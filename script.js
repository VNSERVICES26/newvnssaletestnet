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
    const vnsInput = document.getElementById("vnsAmount").value;
    if (!vnsInput || isNaN(vnsInput)) {
        alert("Please enter a valid VNS amount.");
        return;
    }

    try {
        if (!window.ethereum) {
            alert("Please connect to MetaMask.");
            return;
        }

        const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
        await ethersProvider.send("eth_requestAccounts", []);
        const signer = ethersProvider.getSigner();
        const userAddress = await signer.getAddress();

        const vnsContract = new ethers.Contract(contractAddress, vnsPresaleABI, signer);
        const usdtContract = new ethers.Contract(usdtTokenAddress, usdtABI, signer);

        const vnsAmount = ethers.utils.parseUnits(vnsInput, vnsDecimals);

        const usdtAmount = await vnsContract.getTokenPrice(vnsAmount);

        const approveTx = await usdtContract.approve(contractAddress, usdtAmount);
        alert("Please confirm USDT approval in MetaMask.");
        await approveTx.wait();
        alert("USDT Approved Successfully.");

        const buyTx = await vnsContract.buyTokens(vnsAmount);
        alert("Please confirm VNS token purchase in MetaMask.");
        await buyTx.wait();
        alert("VNS Tokens purchased successfully.");
    } catch (error) {
        console.error("Transaction Error:", error);
        alert("Transaction failed. See console for details.");
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
