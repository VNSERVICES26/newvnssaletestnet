// ===== Contract addresses =====
const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";     // USDT Token
const vnsPresaleAddress = "0x1d696372c231160765ea55294B545451560451b0"; // Presale Contract

// ===== USDT ABI (Minimal) =====
const usdtABI = [
  {
    "constant": false,
    "inputs": [
      { "name": "spender", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "type": "function"
  }
];

// ===== Presale Contract ABI (Minimal) =====
const presaleABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "buyToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

let web3;
let userAccount;

// ===== Connect Wallet =====
async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    userAccount = accounts[0];
    document.getElementById("status").innerText = "✅ Wallet connected: " + userAccount;
  } else {
    alert("Please install MetaMask!");
  }
}

// ===== Approve USDT =====
async function approveUSDT() {
  try {
    const usdt = new web3.eth.Contract(usdtABI, usdtAddress);
    const amountInput = document.getElementById("amountInput").value;
    const decimals = await usdt.methods.decimals().call();
    const amount = web3.utils.toBN(amountInput).mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));

    console.log("USDT Approve Amount:", amount.toString());
    console.log("To Presale Address:", vnsPresaleAddress);
    console.log("From Wallet:", userAccount);

    document.getElementById("status").innerText = "⏳ Approving USDT...";
    await usdt.methods.approve(vnsPresaleAddress, amount).send({ from: userAccount });

    document.getElementById("status").innerText = "✅ USDT Approved!";
  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "❌ Approval Failed";
  }
}

// ===== Buy Tokens =====
async function buyTokens() {
  try {
    const presale = new web3.eth.Contract(presaleABI, vnsPresaleAddress);
    const amountInput = document.getElementById("amountInput").value;
    const usdt = new web3.eth.Contract(usdtABI, usdtAddress);
    const decimals = await usdt.methods.decimals().call();
    const amount = web3.utils.toBN(amountInput).mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));

    console.log("Buying Tokens:", amount.toString());
    console.log("From Wallet:", userAccount);

    document.getElementById("status").innerText = "⏳ Buying Tokens...";
    await presale.methods.buyToken(amount).send({ from: userAccount });

    document.getElementById("status").innerText = "✅ VNS Tokens Purchased!";
  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "❌ Purchase Failed";
  }
}
