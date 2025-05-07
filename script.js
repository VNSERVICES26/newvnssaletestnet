// Initialize Web3Modal
const providerOptions = {
  walletconnect: {
    package: window.WalletConnectProvider.default,
    options: {
      rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/" // BSC Testnet
      },
      chainId: 97
    }
  }
};

const web3Modal = new window.Web3Modal.default({
  cacheProvider: false,
  providerOptions
});

let provider;
let signer;
let selectedAccount;

// Contract Addresses
const contractAddress = "0x4e8a2994f87843ad9EA5F6bda956aC1b181A3323";
const vnsTokenAddress = "0x76f8F13B04B85443afDE3D29991363BF54b756fD";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

// Token Decimals
const vnsDecimals = 8;
const usdtDecimals = 18;

// ABIs (Updated)
const usdtABI = [
  {"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
];

const vnsPresaleABI = [
  {"constant":false,"inputs":[{"name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":false,"inputs":[{"name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[],"name":"isPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"minPurchase","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"maxPurchase","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"pricePerVNS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Connect Wallet
  document.getElementById("connectWallet").addEventListener("click", async () => {
    try {
      document.getElementById("statusMsg").innerText = "वॉलेट कनेक्ट किया जा रहा है...";
      provider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      signer = ethersProvider.getSigner();
      selectedAccount = await signer.getAddress();
      document.getElementById("walletAddress").innerText = `कनेक्टेड: ${selectedAccount.slice(0, 6)}...${selectedAccount.slice(-4)}`;
      document.getElementById("statusMsg").innerText = "वॉलेट सफलतापूर्वक कनेक्ट हो गया!";
      
      // Check network
      const network = await ethersProvider.getNetwork();
      if (network.chainId !== 97) {
        alert("कृपया BSC टेस्टनेट (Chain ID: 97) पर स्विच करें");
      }
    } catch (err) {
      console.error("वॉलेट कनेक्शन विफल:", err);
      document.getElementById("statusMsg").innerText = "वॉलेट कनेक्शन विफल";
      alert("वॉलेट कनेक्शन विफल। कृपया पुनः प्रयास करें।");
    }
  });

  // Buy VNS
  document.getElementById("buyButton").addEventListener("click", async () => {
    try {
      // 1. Check wallet connection
      if (!signer) {
        throw new Error("कृपया पहले अपना वॉलेट कनेक्ट करें");
      }

      // 2. Get input values
      const vnsInput = document.getElementById("vnsAmount").value;
      const usdtInput = document.getElementById("usdtAmount").value;

      // 3. Validate input
      if (!vnsInput && !usdtInput) {
        throw new Error("कृपया VNS या USDT की मात्रा दर्ज करें");
      }

      document.getElementById("statusMsg").innerText = "लेन-देन प्रसंस्करण...";

      // 4. Initialize contracts
      const presaleContract = new ethers.Contract(contractAddress, vnsPresaleABI, signer);
      const usdtContract = new ethers.Contract(usdtTokenAddress, usdtABI, signer);

      // 5. Check if presale is paused
      const isPaused = await presaleContract.isPaused();
      if (isPaused) {
        throw new Error("प्रीसेल अभी रोका गया है। कृपया बाद में पुनः प्रयास करें।");
      }

      if (vnsInput && !usdtInput) {
        // Buy with VNS amount specified
        const vnsAmount = ethers.utils.parseUnits(vnsInput, vnsDecimals);
        
        // 6. Get min/max limits
        const [minPurchase, maxPurchase] = await Promise.all([
          presaleContract.minPurchase(),
          presaleContract.maxPurchase()
        ]);
        
        // 7. Validate limits
        if (vnsAmount.lt(minPurchase)) {
          throw new Error(`न्यूनतम खरीद सीमा: ${ethers.utils.formatUnits(minPurchase, vnsDecimals)} VNS`);
        }
        
        if (vnsAmount.gt(maxPurchase)) {
          throw new Error(`अधिकतम खरीद सीमा: ${ethers.utils.formatUnits(maxPurchase, vnsDecimals)} VNS`);
        }
        
        // 8. Calculate required USDT (1 VNS = 0.90 USDT)
        const usdtAmount = vnsAmount.mul(90).div(100);
        
        // 9. Check USDT balance
        const usdtBalance = await usdtContract.balanceOf(selectedAccount);
        if (usdtBalance.lt(usdtAmount)) {
          throw new Error(`आपके पास पर्याप्त USDT नहीं है। आवश्यक: ${ethers.utils.formatUnits(usdtAmount, usdtDecimals)} USDT, उपलब्ध: ${ethers.utils.formatUnits(usdtBalance, usdtDecimals)} USDT`);
        }
        
        // 10. Check and approve allowance
        const allowance = await usdtContract.allowance(selectedAccount, contractAddress);
        if (allowance.lt(usdtAmount)) {
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी जा रही है...";
          const approveTx = await usdtContract.approve(contractAddress, usdtAmount);
          await approveTx.wait();
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी गई! अब खरीदारी हो रही है...";
        }
        
        // 11. Execute purchase
        document.getElementById("statusMsg").innerText = "VNS खरीदा जा रहा है...";
        const tx = await presaleContract.buyTokens(vnsAmount);
        await tx.wait();
        document.getElementById("statusMsg").innerText = "VNS सफलतापूर्वक खरीदा गया!";
        alert("VNS सफलतापूर्वक खरीदा गया");
        
      } else if (!vnsInput && usdtInput) {
        // Buy with USDT amount specified
        const usdtAmount = ethers.utils.parseUnits(usdtInput, usdtDecimals);
        
        // 12. Check USDT balance
        const usdtBalance = await usdtContract.balanceOf(selectedAccount);
        if (usdtBalance.lt(usdtAmount)) {
          throw new Error(`आपके पास पर्याप्त USDT नहीं है। आवश्यक: ${ethers.utils.formatUnits(usdtAmount, usdtDecimals)} USDT`);
        }
        
        // 13. Check and approve allowance
        const allowance = await usdtContract.allowance(selectedAccount, contractAddress);
        if (allowance.lt(usdtAmount)) {
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी जा रही है...";
          const approveTx = await usdtContract.approve(contractAddress, usdtAmount);
          await approveTx.wait();
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी गई! अब खरीदारी हो रही है...";
        }
        
        // 14. Execute purchase
        document.getElementById("statusMsg").innerText = "USDT से VNS खरीदा जा रहा है...";
        const tx = await presaleContract.buyWithUSDT(usdtAmount);
        await tx.wait();
        document.getElementById("statusMsg").innerText = "VNS सफलतापूर्वक खरीदा गया!";
        alert("VNS सफलतापूर्वक खरीदा गया");
      }
      
    } catch (err) {
      console.error("Transaction Error:", err);
      let errorMsg = err.message || "लेन-देन विफल";
      
      // Handle specific errors
      if (err.message.includes("execution reverted")) {
        errorMsg = "स्मार्ट कॉन्ट्रैक्ट ने लेन-देन को अस्वीकार कर दिया";
      } else if (err.message.includes("INSUFFICIENT_FUNDS")) {
        errorMsg = "आपके पास पर्याप्त BNB/Gas fees नहीं हैं";
      } else if (err.message.includes("User denied transaction")) {
        errorMsg = "आपने लेन-देन को अस्वीकार कर दिया";
      }
      
      document.getElementById("statusMsg").innerText = errorMsg;
      alert(errorMsg);
    }
  });

  // Copy VNS Token Address
  document.getElementById("copyBtn").addEventListener("click", () => {
    const vnsAddress = document.getElementById("vnsAddress").innerText;
    navigator.clipboard.writeText(vnsAddress).then(() => {
      document.getElementById("statusMsg").innerText = "VNS टोकन पता कॉपी किया गया!";
      setTimeout(() => {
        document.getElementById("statusMsg").innerText = "";
      }, 2000);
    }).catch(err => {
      console.error("Copy Failed:", err);
    });
  });
});
