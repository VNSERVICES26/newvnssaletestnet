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
const usdtABI = [ {"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"} 
  // ... (पहले जैसा ही USDT ABI)
];

const vnsPresaleABI = [ {"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"MinMaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"},{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"setMinMaxPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"} 
  // ... (पहले जैसा ही Presale ABI)
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
      
      // नेटवर्क चेक
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
      if (!signer) {
        alert("कृपया पहले अपना वॉलेट कनेक्ट करें");
        return;
      }

      const vnsInput = document.getElementById("vnsAmount").value;
      const usdtInput = document.getElementById("usdtAmount").value;

      if (!vnsInput && !usdtInput) {
        alert("कृपया VNS या USDT की मात्रा दर्ज करें");
        return;
      }

      document.getElementById("statusMsg").innerText = "लेन-देन प्रसंस्करण...";

      const presaleContract = new ethers.Contract(contractAddress, vnsPresaleABI, signer);
      const usdtContract = new ethers.Contract(usdtTokenAddress, usdtABI, signer);

      // प्रीसेल पॉज्ड है या नहीं चेक करें
      const isPaused = await presaleContract.isPaused();
      if (isPaused) {
        alert("प्रीसेल अभी रोका गया है। कृपया बाद में पुनः प्रयास करें।");
        return;
      }

      if (vnsInput && !usdtInput) {
        const vnsAmount = ethers.utils.parseUnits(vnsInput, vnsDecimals);
        
        // न्यूनतम/अधिकतम सीमा प्राप्त करें
        const minPurchase = await presaleContract.minPurchase();
        const maxPurchase = await presaleContract.maxPurchase();
        
        if (vnsAmount.lt(minPurchase)) {
          alert(`न्यूनतम खरीद सीमा: ${ethers.utils.formatUnits(minPurchase, vnsDecimals)} VNS`);
          return;
        }
        
        if (vnsAmount.gt(maxPurchase)) {
          alert(`अधिकतम खरीद सीमा: ${ethers.utils.formatUnits(maxPurchase, vnsDecimals)} VNS`);
          return;
        }
        
        const usdtAmount = vnsAmount.mul(90).div(100); // 1 VNS = 0.90 USDT
        
        // USDT बैलेंस चेक करें
        const usdtBalance = await usdtContract.balanceOf(selectedAccount);
        if (usdtBalance.lt(usdtAmount)) {
          alert(`आपके पास पर्याप्त USDT नहीं है। आवश्यक: ${ethers.utils.formatUnits(usdtAmount, usdtDecimals)} USDT, उपलब्ध: ${ethers.utils.formatUnits(usdtBalance, usdtDecimals)} USDT`);
          return;
        }
        
        // USDT अनुमति (allowance) चेक करें
        const allowance = await usdtContract.allowance(selectedAccount, contractAddress);
        if (allowance.lt(usdtAmount)) {
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी जा रही है...";
          const approveTx = await usdtContract.approve(contractAddress, usdtAmount);
          await approveTx.wait();
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी गई! अब खरीदारी हो रही है...";
        }
        
        document.getElementById("statusMsg").innerText = "VNS खरीदा जा रहा है...";
        const tx = await presaleContract.buyTokens(vnsAmount);
        await tx.wait();
        document.getElementById("statusMsg").innerText = "VNS सफलतापूर्वक खरीदा गया!";
        alert("VNS सफलतापूर्वक खरीदा गया");
      } else if (!vnsInput && usdtInput) {
        const usdtAmount = ethers.utils.parseUnits(usdtInput, usdtDecimals);
        
        // USDT बैलेंस चेक करें
        const usdtBalance = await usdtContract.balanceOf(selectedAccount);
        if (usdtBalance.lt(usdtAmount)) {
          alert(`आपके पास पर्याप्त USDT नहीं है। आवश्यक: ${ethers.utils.formatUnits(usdtAmount, usdtDecimals)} USDT`);
          return;
        }
        
        // USDT अनुमति (allowance) चेक करें
        const allowance = await usdtContract.allowance(selectedAccount, contractAddress);
        if (allowance.lt(usdtAmount)) {
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी जा रही है...";
          const approveTx = await usdtContract.approve(contractAddress, usdtAmount);
          await approveTx.wait();
          document.getElementById("statusMsg").innerText = "USDT अनुमति दी गई! अब खरीदारी हो रही है...";
        }
        
        document.getElementById("statusMsg").innerText = "USDT से VNS खरीदा जा रहा है...";
        const tx = await presaleContract.buyWithUSDT(usdtAmount);
        await tx.wait();
        document.getElementById("statusMsg").innerText = "VNS सफलतापूर्वक खरीदा गया!";
        alert("VNS सफलतापूर्वक खरीदा गया");
      }
    } catch (err) {
      console.error("लेन-देन विफल:", err);
      let errorMsg = "लेन-देन विफल";
      
      if (err.message.includes("execution reverted")) {
        errorMsg = "स्मार्ट कॉन्ट्रैक्ट ने लेन-देन को अस्वीकार कर दिया। संभावित कारण: अपर्याप्त शेष, अनुमति नहीं, या सीमा से अधिक";
      } else if (err.message.includes("INSUFFICIENT_FUNDS")) {
        errorMsg = "आपके पास पर्याप्त BNB/Gas fees नहीं हैं";
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
      console.error("कॉपी विफल:", err);
    });
  });
});
