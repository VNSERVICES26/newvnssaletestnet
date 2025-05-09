// Contract ABIs
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const usdtABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const vnsABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Configuration
const config = {
    presaleAddress: "0x1d696372c231160765ea55294B545451560451b0",
    usdtAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
    vnsAddress: "0xD56b19A7A083E64b3f2E41cDD09BaDF2D168D101"
};

let web3;
let presaleContract;
let usdtContract;
let vnsContract;
let accounts = [];
let vnsDecimals = 8;
let usdtDecimals = 18;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    await init();
});

async function init() {
    await initWeb3();
    await initContracts();
    await loadContractData();
    setupEventListeners();
}

async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
        } catch (error) {
            console.error("User denied account access");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        accounts = await web3.eth.getAccounts();
        updateWalletDisplay();
    } else {
        showNotification("Please install MetaMask to use this dApp", "error");
    }
}

async function initContracts() {
    if (!web3) return;

    presaleContract = new web3.eth.Contract(presaleABI, config.presaleAddress);
    usdtContract = new web3.eth.Contract(usdtABI, config.usdtAddress);
    vnsContract = new web3.eth.Contract(vnsABI, config.vnsAddress);

    try {
        vnsDecimals = await vnsContract.methods.decimals().call();
    } catch {
        vnsDecimals = 8;
    }

    try {
        usdtDecimals = await usdtContract.methods.decimals().call();
    } catch {
        usdtDecimals = 18;
    }
}

async function loadContractData() {
    if (!presaleContract) return;

    try {
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        document.getElementById('vnsContract').textContent = vnsAddress;
        
        const price = await presaleContract.methods.getPrice().call();
        document.getElementById('currentPrice').textContent = (price / 1e18).toFixed(2);
        
        const availableTokens = await presaleContract.methods.getAvailableTokens().call();
        document.getElementById('availableTokens').textContent = formatTokenAmount(availableTokens, vnsDecimals);
        
        const minPurchase = await presaleContract.methods.minPurchase().call();
        document.getElementById('minPurchase').textContent = formatTokenAmount(minPurchase, vnsDecimals);
    } catch (error) {
        console.error("Failed to load contract data:", error);
    }
}

function setupEventListeners() {
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('copyContract').addEventListener('click', copyContractAddress);
    document.getElementById('vnsAmount').addEventListener('input', calculateUsdtCost);
    document.getElementById('buyWithVns').addEventListener('click', buyVnsTokens);
    document.getElementById('cancelApprove').addEventListener('click', () => hideModal('approveModal'));
    document.getElementById('cancelBuy').addEventListener('click', () => hideModal('buyModal'));
}

function updateWalletDisplay() {
    const walletBtn = document.getElementById('connectWallet');
    const walletDiv = document.getElementById('walletAddress');
    
    if (accounts.length > 0) {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        walletDiv.textContent = `Connected: ${shortAddress}`;
        walletBtn.textContent = "Connected";
        walletBtn.disabled = true;
    } else {
        walletDiv.textContent = "";
        walletBtn.textContent = "Connect Wallet";
        walletBtn.disabled = false;
    }
}

async function connectWallet() {
    if (!window.ethereum) {
        showNotification("Please install MetaMask", "error");
        return;
    }

    try {
        showModal('approveModal', "Connecting to your wallet...");
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        updateWalletDisplay();
        hideModal('approveModal');
        showNotification("Wallet connected successfully", "success");
        await loadContractData();
    } catch (error) {
        hideModal('approveModal');
        showNotification("Failed to connect wallet", "error");
        console.error("Wallet connection error:", error);
    }
}

function copyContractAddress() {
    const address = document.getElementById('vnsContract').textContent;
    navigator.clipboard.writeText(address).then(() => {
        showNotification("Contract address copied", "success");
    }).catch(err => {
        console.error("Failed to copy:", err);
        showNotification("Failed to copy", "error");
    });
}

async function calculateUsdtCost() {
    const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
    if (!vnsAmount || vnsAmount <= 0) {
        document.getElementById('usdtCost').textContent = "0";
        return;
    }

    try {
        const price = await presaleContract.methods.getPrice().call();
        const usdtCost = (vnsAmount * (price / 1e18)).toFixed(2);
        document.getElementById('usdtCost').textContent = usdtCost;
    } catch (error) {
        console.error("Calculation error:", error);
        document.getElementById('usdtCost').textContent = "Error";
    }
}

async function buyVnsTokens() {
    if (!accounts || accounts.length === 0) {
        showNotification("Please connect wallet first", "error");
        return;
    }

    const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
    if (!vnsAmount || vnsAmount <= 0) {
        showNotification("Enter valid VNS amount", "error");
        return;
    }

    try {
        // Step 1: Calculate USDT cost
        const price = await presaleContract.methods.getPrice().call();
        const vnsAmountInUnits = vnsAmount * (10**vnsDecimals);
        const usdtCost = (vnsAmountInUnits * price) / (10**18);
        
        // Step 2: Show approval modal
        showModal('approveModal', "Please approve USDT spending in your wallet");
        
        // Step 3: Approve USDT
        await approveUsdtSpending(usdtCost);
        hideModal('approveModal');
        
        // Step 4: Show buy modal
        showModal('buyModal', "Confirm VNS purchase in your wallet");
        
        // Step 5: Execute purchase
        const tx = await presaleContract.methods.buyTokens(
            vnsAmountInUnits.toString()
        ).send({ from: accounts[0] });
        
        hideModal('buyModal');
        showNotification("Successfully purchased VNS tokens!", "success");
        
        // Refresh data
        await loadContractData();
        
    } catch (error) {
        hideModal('approveModal');
        hideModal('buyModal');
        console.error("Purchase error:", error);
        showNotification(`Transaction failed: ${error.message}`, "error");
    }
}

async function approveUsdtSpending(amount) {
    const usdtAmountInUnits = amount * (10**usdtDecimals);
    await usdtContract.methods.approve(
        config.presaleAddress,
        usdtAmountInUnits.toString()
    ).send({ from: accounts[0] });
}

// Helper functions
function formatTokenAmount(amount, decimals) {
    return (amount / (10**decimals)).toLocaleString();
}

function showModal(id, message) {
    const modal = document.getElementById(id);
    const messageEl = modal.querySelector('p');
    messageEl.textContent = message;
    modal.style.display = 'flex';
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}
