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
const contractAddress = "0x813058d6256A805DFE53D640756E7C63E0946A72";
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

const vnsPresaleABI = [ {"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"MinPurchaseUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"PaymentReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"} 
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
// Buy VNS
document.getElementById("buyButton").addEventListener("click", async () => {
    const vnsInput = document.getElementById("vnsAmount").value;

    if (!vnsInput || isNaN(vnsInput)) {
        alert("कृपया मान्य VNS राशि दर्ज करें।");
        return;
    }

    try {
        // Wallet check
        if (!window.ethereum) {
            alert("कृपया MetaMask कनेक्ट करें।");
            return;
        }

        const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
        await ethersProvider.send("eth_requestAccounts", []);
        const signer = ethersProvider.getSigner();
        const userAddress = await signer.getAddress();

        const presaleContract = new ethers.Contract(contractAddress, vnsPresaleABI, signer);
        const usdtContract = new ethers.Contract(usdtTokenAddress, usdtABI, signer);

        const vnsAmount = ethers.utils.parseUnits(vnsInput, vnsDecimals);

        // Check if presale is paused
        const isPaused = await presaleContract.isPaused();
        if (isPaused) {
            throw new Error("प्रीसेल वर्तमान में रोका गया है।");
        }

        // Check min limits
        const [minPurchase] = await Promise.all([
            presaleContract.minPurchase(),
        ]);

        if (vnsAmount.lt(minPurchase)) {
            throw new Error(`न्यूनतम खरीद सीमा: ${ethers.utils.formatUnits(minPurchase, vnsDecimals)} VNS`);
        }
        if (vnsAmount.gt(maxPurchase)) {
            throw new Error(`अधिकतम खरीद सीमा: ${ethers.utils.formatUnits(maxPurchase, vnsDecimals)} VNS`);
        }

        // Get required USDT for given VNS amount (using pricePerVNS)
        const pricePerVNS = await presaleContract.pricePerVNS(); // price per VNS in USDT (18 decimals)
        const usdtAmount = vnsAmount.mul(pricePerVNS).div(ethers.utils.parseUnits("1", vnsDecimals));

        // Check balance
        const usdtBalance = await usdtContract.balanceOf(userAddress);
        if (usdtBalance.lt(usdtAmount)) {
            throw new Error(`पर्याप्त USDT नहीं है। ज़रूरी: ${ethers.utils.formatUnits(usdtAmount, usdtDecimals)} USDT`);
        }

        // Approve USDT
        const allowance = await usdtContract.allowance(userAddress, contractAddress);
        if (allowance.lt(usdtAmount)) {
            document.getElementById("statusMsg").innerText = "USDT अनुमति दी जा रही है...";
            const approveTx = await usdtContract.approve(contractAddress, usdtAmount);
            alert("MetaMask में USDT अनुमति दें।");
            await approveTx.wait();
            document.getElementById("statusMsg").innerText = "USDT अनुमति सफल!";
        }

        // Execute purchase
        document.getElementById("statusMsg").innerText = "VNS खरीदा जा रहा है...";
        const buyTx = await presaleContract.buyTokens(vnsAmount);
        alert("MetaMask में खरीदारी पुष्टि करें।");
        await buyTx.wait();

        document.getElementById("statusMsg").innerText = "VNS सफलतापूर्वक खरीदा गया!";
        alert("VNS टोकन खरीदारी सफल रही!");

    } catch (err) {
        console.error("Transaction Error:", err);
        let errorMsg = err.message || "लेन-देन विफल";

        if (err.message.includes("execution reverted")) {
            errorMsg = "स्मार्ट कॉन्ट्रैक्ट ने लेन-देन अस्वीकार किया";
        } else if (err.message.includes("INSUFFICIENT_FUNDS")) {
            errorMsg = "पर्याप्त गैस फीस (BNB) नहीं है";
        } else if (err.message.includes("User denied transaction")) {
            errorMsg = "आपने लेन-देन अस्वीकार कर दिया";
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
