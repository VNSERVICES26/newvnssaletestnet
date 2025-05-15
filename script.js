const presaleAddress = "0x1d696372c231160765ea55294B545451560451b0";
const vnsAbi = [
  // Minimal ABI for interaction
  "function buyTokens(uint256 vnsAmount) external",
];

async function buyTokens() {
  const vnsAmount = document.getElementById("vnsAmount").value;
  const status = document.getElementById("status");

  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(presaleAddress, vnsAbi, signer);

  try {
    const tx = await contract.buyTokens(ethers.utils.parseUnits(vnsAmount, 18));
    status.innerText = "Transaction sent. Waiting for confirmation...";
    await tx.wait();
    status.innerText = "✅ Purchase successful!";
  } catch (err) {
    console.error(err);
    status.innerText = "❌ Error: " + err.message;
  }
}
