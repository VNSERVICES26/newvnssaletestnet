const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const vnsAddress = "0xD56b19A7A083E64b3f2E41cDD09BaDF2D168D101";
const presaleAddress = "0x1d696372c231160765ea55294B545451560451b0";

let web3;
let account;
let usdtContract;
let presaleContract;

const usdtABI = [ // only `approve` function
  {
    "constant": false,
    "inputs": [
      { "name": "spender", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];

const presaleABI = [ // only `buyTokens` function
  {
    "inputs": [
      { "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }
    ],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
    document.getElementById("walletAddress").innerText = `Wallet: ${account}`;
    usdtContract = new web3.eth.Contract(usdtABI, usdtAddress);
    presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);
  } else {
    alert("Please install MetaMask");
  }
}

async function approveUSDT() {
  const amount = document.getElementById("usdtAmount").value;
  if (!amount) return alert("Enter amount");
  const value = web3.utils.toWei(amount, "ether");
  try {
    await usdtContract.methods
      .approve(presaleAddress, value)
      .send({ from: account });
    alert("USDT Approved ✅");
  } catch (e) {
    console.error(e);
    alert("Approval failed ❌");
  }
}

async function buyVNS() {
  const amount = document.getElementById("usdtAmount").value;
  if (!amount) return alert("Enter amount");
  const value = web3.utils.toWei(amount, "ether");
  try {
    await presaleContract.methods
      .buyTokens(value)
      .send({ from: account });
    alert("VNS Purchased 🎉");
  } catch (e) {
    console.error(e);
    alert("Buy failed ❌");
  }
}
