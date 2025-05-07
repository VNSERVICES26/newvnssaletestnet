document.addEventListener("DOMContentLoaded", function () {
  const connectBtn = document.getElementById("connectWalletBtn");
  const buyVNSBtn = document.getElementById("buyVNSBtn");
  const buyUSDTBtn = document.getElementById("buyUSDTBtn");
  const walletAddressSpan = document.getElementById("walletAddress");

  let account;
  let vnsContract;
  let usdtContract;
  let presaleContract;

  const presaleAddress = "0x813058d6256A805DFE53D640756E7C63E0946A72"; 
  const vnsAddress = "0x76f8F13B04B85443afDE3D29991363BF54b756fD"; 
  const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"; 

  const presaleABI = [ {"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"MinPurchaseUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"PaymentReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"} ];
  const erc20ABI = [
    "function decimals() view returns (uint8)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function balanceOf(address owner) view returns (uint256)",
    "function transferFrom(address sender, address recipient, uint256 amount) returns (bool)"
  ];

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        walletAddressSpan.textContent = account;
        initContracts();
      } catch (err) {
        console.error("User denied wallet connection", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  }

  function initContracts() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    vnsContract = new ethers.Contract(vnsAddress, erc20ABI, signer);
    usdtContract = new ethers.Contract(usdtAddress, erc20ABI, signer);
    presaleContract = new ethers.Contract(presaleAddress, presaleABI, signer);
  }

  async function buyWithVNS() {
    const amount = document.getElementById("vnsAmount").value;
    if (!amount) return alert("Enter VNS token amount");

    const decimals = await vnsContract.decimals();
    const vnsAmount = ethers.utils.parseUnits(amount, decimals);

    const allowance = await usdtContract.allowance(account, presaleAddress);
    const price = await presaleContract.getPrice();
    const usdtAmount = vnsAmount.mul(price).div(ethers.BigNumber.from("10").pow(decimals));

    if (allowance.lt(usdtAmount)) {
      const tx = await usdtContract.approve(presaleAddress, usdtAmount);
      await tx.wait();
    }

    const tx = await presaleContract.buyTokens(vnsAmount);
    await tx.wait();
    alert("Purchase successful!");
  }

  async function buyWithUSDT() {
    const amount = document.getElementById("usdtAmount").value;
    if (!amount) return alert("Enter USDT amount");

    const decimals = await usdtContract.decimals();
    const usdtAmount = ethers.utils.parseUnits(amount, decimals);

    const allowance = await usdtContract.allowance(account, presaleAddress);
    if (allowance.lt(usdtAmount)) {
      const tx = await usdtContract.approve(presaleAddress, usdtAmount);
      await tx.wait();
    }

    const tx = await presaleContract.buyWithUSDT(usdtAmount);
    await tx.wait();
    alert("Purchase successful!");
  }

  connectBtn.addEventListener("click", connectWallet);
  buyVNSBtn.addEventListener("click", buyWithVNS);
  buyUSDTBtn.addEventListener("click", buyWithUSDT);
});
