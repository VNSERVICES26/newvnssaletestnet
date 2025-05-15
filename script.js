const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const presaleAddress = "0x1d696372c231160765ea55294b545451560451b0";

// Simple minimal ABIs with only needed functions (replace with full ABI if available)
const usdtABI = [
  // approve(address spender, uint256 amount)
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

const presaleABI = [
  // buyTokens(uint256 amount)
  {
    "constant": false,
    "inputs": [{ "name": "amount", "type": "uint256" }],
    "name": "buyTokens",
    "outputs": [],
    "type": "function"
  }
];

// Provider & signer setup using ethers.js
let provider;
let signer;
let userAddress;

async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    userAddress = await signer.getAddress();

    document.getElementById("walletAddress").innerText = userAddress;
    console.log("Wallet connected:", userAddress);

    // Enable Buy button only after wallet connect
    document.getElementById("buyBtn").disabled = false;
  } catch (err) {
    console.error("Wallet connection failed:", err);
    alert("Wallet connection failed!");
  }
}

async function approveAndBuy() {
  try {
    if (!signer) {
      alert("Connect your wallet first!");
      return;
    }

    const usdtContract = new ethers.Contract(usdtAddress, usdtABI, signer);
    const presaleContract = new ethers.Contract(presaleAddress, presaleABI, signer);

    // Amount to buy (example: 1 USDT with 18 decimals — check your USDT decimals!)
    const amountToBuy = ethers.utils.parseUnits("1.0", 18); 

    console.log("Approving tokens...");
    const approveTx = await usdtContract.approve(presaleAddress, amountToBuy);
    console.log("Approve Tx hash:", approveTx.hash);
    await approveTx.wait();
    console.log("Approval confirmed");

    console.log("Buying tokens...");
    const buyTx = await presaleContract.buyTokens(amountToBuy);
    console.log("Buy Tx hash:", buyTx.hash);
    await buyTx.wait();
    console.log("Token purchase confirmed");

    alert("Token purchase successful!");
  } catch (error) {
    console.error("Transaction failed:", error);
    alert("Transaction failed! Check console.");
  }
}

// Button events
document.getElementById("connectBtn").onclick = connectWallet;
document.getElementById("buyBtn").onclick = approveAndBuy;
