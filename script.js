const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const vnsAddress = "0xD56b19A7A083E64b3f2E41cDD09BaDF2D168D101";
const presaleAddress = "0x1d696372c231160765ea55294B545451560451b0";

const usdtAbi = [
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)",
  "function decimals() public view returns (uint8)",
  "function transferFrom(address sender, address recipient, uint amount) public returns (bool)"
];

const presaleAbi = [
  "function buyTokens(uint256 vnsAmount) public",
  "function pricePerVNS() public view returns (uint256)",
  "function minPurchase() public view returns (uint256)"
];

let provider, signer, presaleContract, usdtContract;

document.getElementById("connectBtn").addEventListener("click", connectWallet);
document.getElementById("buyBtn").addEventListener("click", buyVNS);

async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      presaleContract = new ethers.Contract(presaleAddress, presaleAbi, signer);
      usdtContract = new ethers.Contract(usdtAddress, usdtAbi, signer);
      document.getElementById("status").innerText = "✅ Wallet connected!";
    } catch (err) {
      document.getElementById("status").innerText = "❌ Connection failed";
      console.error(err);
    }
  } else {
    alert("🦊 Please install MetaMask");
  }
}

async function buyVNS() {
  const input = document.getElementById("vnsAmount");
  const vnsAmount = parseFloat(input.value);

  if (isNaN(vnsAmount) || vnsAmount < 10) {
    document.getElementById("status").innerText = "❌ Minimum 10 VNS required";
    return;
  }

  try {
    const pricePerVNS = await presaleContract.pricePerVNS();
    const usdtRaw = (vnsAmount * pricePerVNS.toString()) / 1e8;

    const usdtDecimals = await usdtContract.decimals();
    const usdtAmount = ethers.utils.parseUnits(usdtRaw.toString(), usdtDecimals);

    const userAddress = await signer.getAddress();
    const currentAllowance = await usdtContract.allowance(userAddress, presaleAddress);

    if (currentAllowance.lt(usdtAmount)) {
      document.getElementById("status").innerText = "⏳ Approving USDT...";
      const tx = await usdtContract.approve(presaleAddress, usdtAmount);
      await tx.wait();
    }

    document.getElementById("status").innerText = "⏳ Buying VNS tokens...";
    const vnsBig = ethers.utils.parseUnits(vnsAmount.toString(), 18);
    const buyTx = await presaleContract.buyTokens(vnsBig);
    await buyTx.wait();

    document.getElementById("status").innerText = "✅ VNS Purchase Successful!";
  } catch (err) {
    console.error(err);
    document.getElementById("status").innerText = "❌ Error: " + (err?.reason || err.message);
  }
}
