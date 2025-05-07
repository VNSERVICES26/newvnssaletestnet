let web3;
let userAccount;
let presaleContract;
let vnsToken;
let usdtToken;

// Replace with your deployed contract addresses
const presaleAddress = "0x813058d6256A805DFE53D640756E7C63E0946A72";
const vnsTokenAddress = "0x76f8F13B04B85443afDE3D29991363BF54b756fD";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

// ABI from your verified contract (paste actual ABI here)
const presaleABI = [ {"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"MinPurchaseUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"PaymentReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"} ];
const erc20ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "name": "", "type": "uint256" }],
    "type": "function"
  },
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
    "inputs": [
      { "name": "owner", "type": "address" },
      { "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "type": "function"
  }
];

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    userAccount = accounts[0];

    presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);
    vnsToken = new web3.eth.Contract(erc20ABI, vnsTokenAddress);
    usdtToken = new web3.eth.Contract(erc20ABI, usdtTokenAddress);

    document.getElementById("wallet").innerText = `Wallet: ${userAccount}`;
    loadPresaleInfo();
  } else {
    alert("Please install MetaMask to continue.");
  }
}

async function loadPresaleInfo() {
  try {
    const price = await presaleContract.methods.getPrice().call();
    const available = await presaleContract.methods.getAvailableTokens().call();

    document.getElementById("price").innerText = `Price per VNS: ${price} (in USDT base units)`;
    document.getElementById("available").innerText = `Available Tokens: ${available}`;
  } catch (err) {
    console.error("Error loading presale info:", err);
  }
}

async function buyVNSWithAmount() {
  try {
    const vnsAmount = document.getElementById("vnsAmount").value;
    if (!vnsAmount || vnsAmount <= 0) return alert("Enter valid VNS amount");

    const decimals = await vnsToken.methods.decimals().call();
    const amountInWei = web3.utils.toBN(vnsAmount).mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));

    const pricePerVNS = await presaleContract.methods.getPrice().call();
    const usdtAmount = amountInWei.mul(web3.utils.toBN(pricePerVNS)).div(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));

    // Approve USDT
    await usdtToken.methods.approve(presaleAddress, usdtAmount.toString()).send({ from: userAccount });

    // Buy
    await presaleContract.methods.buyTokens(amountInWei.toString()).send({ from: userAccount });

    alert("VNS tokens purchased successfully!");
    loadPresaleInfo();
  } catch (err) {
    console.error("Transaction Error:", err);
    alert("Transaction failed. See console for details.");
  }
}

async function buyVNSWithUSDT() {
  try {
    const usdtInput = document.getElementById("usdtAmount").value;
    if (!usdtInput || usdtInput <= 0) return alert("Enter valid USDT amount");

    const decimals = await usdtToken.methods.decimals().call();
    const amountInWei = web3.utils.toBN(usdtInput).mul(web3.utils.toBN(10).pow(web3.utils.toBN(decimals)));

    // Approve USDT
    await usdtToken.methods.approve(presaleAddress, amountInWei.toString()).send({ from: userAccount });

    // Buy
    await presaleContract.methods.buyWithUSDT(amountInWei.toString()).send({ from: userAccount });

    alert("VNS tokens purchased successfully with USDT!");
    loadPresaleInfo();
  } catch (err) {
    console.error("Transaction Error:", err);
    alert("Transaction failed. See console for details.");
  }
}

window.addEventListener("load", () => {
  document.getElementById("connectBtn").addEventListener("click", connectWallet);
  document.getElementById("buyVNS").addEventListener("click", buyVNSWithAmount);
  document.getElementById("buyUSDT").addEventListener("click", buyVNSWithUSDT);
});
