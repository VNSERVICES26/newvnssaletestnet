const presaleAddress = "0x813058d6256A805DFE53D640756E7C63E0946A72";
const vnsTokenAddress = "0x76f8F13B04B85443afDE3D29991363BF54b756fD";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

const presaleABI = [ {"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"MinPurchaseUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"PaymentReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"} ];

let web3;
let accounts;
let presaleContract;

window.addEventListener("load", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      accounts = await web3.eth.getAccounts();
      document.getElementById("walletAddress").textContent = "Wallet: " + accounts[0];
      presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);
      loadDetails();
    } catch (error) {
      alert("User denied account access");
    }
  } else {
    alert("Please install MetaMask!");
  }
});

document.getElementById("connectBtn").addEventListener("click", async () => {
  if (window.ethereum) {
    accounts = await web3.eth.requestAccounts();
    document.getElementById("walletAddress").textContent = "Wallet: " + accounts[0];
  }
});

async function loadDetails() {
  const price = await presaleContract.methods.getPrice().call();
  const available = await presaleContract.methods.getAvailableTokens().call();
  const decimals = await getDecimals(vnsTokenAddress);
  document.getElementById("price").innerText = `1 VNS = ${web3.utils.fromWei(price, 'ether')} USDT`;
  document.getElementById("available").innerText = `Available: ${available / 10 ** decimals} VNS`;
}

async function getDecimals(tokenAddress) {
  const token = new web3.eth.Contract([
    { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }
  ], tokenAddress);
  return await token.methods.decimals().call();
}

document.getElementById("buyVNSBtn").addEventListener("click", async () => {
  const vnsAmount = document.getElementById("vnsAmount").value;
  if (!vnsAmount || vnsAmount <= 0) return alert("Enter VNS amount");

  const decimals = await getDecimals(vnsTokenAddress);
  const amount = web3.utils.toBN(vnsAmount * (10 ** decimals));

  try {
    await presaleContract.methods.buyTokens(amount.toString()).send({ from: accounts[0] });
    alert("VNS purchased successfully!");
    loadDetails();
  } catch (e) {
    alert("Error: " + e.message);
  }
});

document.getElementById("buyUSDTBtn").addEventListener("click", async () => {
  const usdtAmount = document.getElementById("usdtAmount").value;
  if (!usdtAmount || usdtAmount <= 0) return alert("Enter USDT amount");

  const decimals = await getDecimals(usdtTokenAddress);
  const amount = web3.utils.toBN(usdtAmount * (10 ** decimals));

  const usdt = new web3.eth.Contract([
    { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }
  ], usdtTokenAddress);

  try {
    await usdt.methods.approve(presaleAddress, amount.toString()).send({ from: accounts[0] });
    await presaleContract.methods.buyWithUSDT(amount.toString()).send({ from: accounts[0] });
    alert("VNS purchased with USDT!");
    loadDetails();
  } catch (e) {
    alert("Error: " + e.message);
  }
});
