// Contract ABIs (same as before)
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const vnsABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Configuration with your contract addresses
const config = {
    presaleAddress: "0x1d696372c231160765ea55294B545451560451b0",
    vnsAddress: "0xD56b19A7A083E64b3f2E41cDD09BaDF2D168D101",
    usdtAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"
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
            // Request account access
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                updateWalletDisplay();
                loadContractData();
            });
            
            // Listen for chain changes
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
            
            showNotification("Wallet connected successfully", "success");
        } catch (error) {
            console.error("User denied account access:", error);
            showNotification("Please connect your wallet to continue", "error");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        accounts = await web3.eth.getAccounts();
        updateWalletDisplay();
    } else {
        showNotification("Please install MetaMask or another Web3 wallet to use this dApp", "error");
    }
}

async function initContracts() {
    if (!web3) return;

    try {
        presaleContract = new web3.eth.Contract(presaleABI, config.presaleAddress);
        usdtContract = new web3.eth.Contract(usdtABI, config.usdtAddress);
        vnsContract = new web3.eth.Contract(vnsABI, config.vnsAddress);

        // Get token decimals
        vnsDecimals = await vnsContract.methods.decimals().call();
        usdtDecimals = await usdtContract.methods.decimals().call();
    } catch (error) {
        console.error("Error initializing contracts:", error);
        showNotification("Error connecting to contracts. Please try again.", "error");
    }
}

async function loadContractData() {
    if (!presaleContract || !vnsContract) return;

    try {
        // Load contract addresses
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        document.getElementById('vnsContract').textContent = vnsAddress;
        document.getElementById('presaleContract').textContent = config.presaleAddress;
        
        // Load price and token info
        const price = await presaleContract.methods.pricePerVNS().call();
        document.getElementById('currentPrice').textContent = web3.utils.fromWei(price, 'ether');
        
        const sellerWallet = await presaleContract.methods.sellerWallet().call();
        const availableTokens = await vnsContract.methods.balanceOf(sellerWallet).call();
        document.getElementById('availableTokens').textContent = formatTokenAmount(availableTokens, vnsDecimals);
        
        const minPurchase = await presaleContract.methods.minPurchase().call();
        document.getElementById('minPurchase').textContent = formatTokenAmount(minPurchase, vnsDecimals);
        
        // Load contract status
        const isPaused = await presaleContract.methods.isPaused().call();
        document.getElementById('contractStatus').textContent = isPaused ? "Paused" : "Active";
        
    } catch (error) {
        console.error("Failed to load contract data:", error);
        showNotification("Failed to load contract data. Please try again.", "error");
    }
}

function setupEventListeners() {
    // Wallet connection
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    
    // Copy contract addresses
    document.getElementById('copyPresaleContract').addEventListener('click', () => copyToClipboard(config.presaleAddress));
    document.getElementById('copyVnsContract').addEventListener('click', async () => {
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        copyToClipboard(vnsAddress);
    });
    
    // Buy functionality
    document.getElementById('vnsAmount').addEventListener('input', calculateUsdtCost);
    document.getElementById('buyWithVns').addEventListener('click', buyVnsTokens);
    
    // Modal controls
    document.getElementById('cancelApprove').addEventListener('click', () => hideModal('approveModal'));
    document.getElementById('cancelBuy').addEventListener('click', () => hideModal('buyModal'));
    
    // Approve and Buy buttons
    document.getElementById('approveBtn').addEventListener('click', approveUsdt);
    document.getElementById('confirmBuyBtn').addEventListener('click', executeBuy);
}

// Helper function to format token amounts
function formatTokenAmount(amount, decimals) {
    const formatted = web3.utils.fromWei(amount.toString(), 'ether') / (10 ** (18 - decimals));
    return formatted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
}

// Connect wallet function
async function connectWallet() {
    try {
        if (window.ethereum) {
            document.getElementById('connectWallet').disabled = true;
            document.getElementById('connectWallet').textContent = "Connecting...";
            
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
            loadContractData();
            
            showNotification("Wallet connected successfully", "success");
        } else {
            showNotification("Please install MetaMask to connect wallet", "error");
        }
    } catch (error) {
        console.error("Error connecting wallet:", error);
        showNotification("Error connecting wallet: " + error.message, "error");
        document.getElementById('connectWallet').disabled = false;
        document.getElementById('connectWallet').textContent = "Connect Wallet";
    }
}

// Calculate USDT cost based on VNS amount
function calculateUsdtCost() {
    const vnsAmount = document.getElementById('vnsAmount').value;
    if (!vnsAmount || isNaN(vnsAmount)) {
        document.getElementById('usdtCost').textContent = "0.00";
        return;
    }

    const pricePerVNS = parseFloat(document.getElementById('currentPrice').textContent);
    const usdtCost = (parseFloat(vnsAmount) * pricePerVNS);
    document.getElementById('usdtCost').textContent = usdtCost.toFixed(6);
}

// Buy VNS tokens function
async function buyVnsTokens() {
    if (!accounts || accounts.length === 0) {
        showNotification("Please connect your wallet first", "error");
        return;
    }

    const vnsAmountInput = document.getElementById('vnsAmount').value;
    if (!vnsAmountInput || isNaN(vnsAmountInput) || parseFloat(vnsAmountInput) <= 0) {
        showNotification("Please enter a valid VNS amount", "error");
        return;
    }

    try {
        // Disable buy button during processing
        document.getElementById('buyWithVns').disabled = true;
        document.getElementById('buyWithVns').textContent = "Processing...";
        
        // Convert VNS amount to wei
        const vnsAmount = web3.utils.toWei(vnsAmountInput, 'ether');
        
        // Check if presale is paused
        const isPaused = await presaleContract.methods.isPaused().call();
        if (isPaused) {
            showNotification("Presale is currently paused", "error");
            document.getElementById('buyWithVns').disabled = false;
            document.getElementById('buyWithVns').textContent = "Buy VNS Tokens";
            return;
        }
        
        // Check minimum purchase
        const minPurchase = await presaleContract.methods.minPurchase().call();
        if (BigInt(vnsAmount) < BigInt(minPurchase)) {
            showNotification(`Minimum purchase is ${formatTokenAmount(minPurchase, vnsDecimals)} VNS`, "error");
            document.getElementById('buyWithVns').disabled = false;
            document.getElementById('buyWithVns').textContent = "Buy VNS Tokens";
            return;
        }
        
        // Calculate required USDT
        const pricePerVNS = await presaleContract.methods.pricePerVNS().call();
        const requiredUsdt = BigInt(pricePerVNS) * BigInt(vnsAmount) / (10n ** BigInt(vnsDecimals));
        
        // Check USDT allowance
        const allowance = await usdtContract.methods.allowance(accounts[0], config.presaleAddress).call();
        
        if (BigInt(allowance) < requiredUsdt) {
            // Show approval modal
            document.getElementById('approveAmount').textContent = formatTokenAmount(requiredUsdt.toString(), usdtDecimals);
            showModal('approveModal');
        } else {
            // Directly show buy modal if already approved
            showBuyModal(vnsAmountInput, pricePerVNS);
        }
    } catch (error) {
        console.error("Buy error:", error);
        showNotification("Error processing purchase: " + error.message, "error");
    } finally {
        document.getElementById('buyWithVns').disabled = false;
        document.getElementById('buyWithVns').textContent = "Buy VNS Tokens";
    }
}

// Show buy confirmation modal
function showBuyModal(vnsAmountInput, pricePerVNS) {
    document.getElementById('confirmVnsAmount').textContent = vnsAmountInput;
    document.getElementById('confirmUsdtAmount').textContent = 
        (parseFloat(vnsAmountInput) * parseFloat(web3.utils.fromWei(pricePerVNS, 'ether'))).toFixed(6);
    showModal('buyModal');
}

// Approve USDT spending
async function approveUsdt() {
    try {
        // Disable approve button during processing
        document.getElementById('approveBtn').disabled = true;
        document.getElementById('approveBtn').textContent = "Approving...";
        
        const vnsAmountInput = document.getElementById('vnsAmount').value;
        const vnsAmount = web3.utils.toWei(vnsAmountInput, 'ether');
        const pricePerVNS = await presaleContract.methods.pricePerVNS().call();
        const requiredUsdt = BigInt(pricePerVNS) * BigInt(vnsAmount) / (10n ** BigInt(vnsDecimals));
        
        showNotification("Approving USDT...", "info");
        
        await usdtContract.methods.approve(config.presaleAddress, requiredUsdt.toString())
            .send({ from: accounts[0] });
            
        hideModal('approveModal');
        showNotification("USDT approved successfully", "success");
        
        // Show buy modal after approval
        showBuyModal(vnsAmountInput, pricePerVNS);
    } catch (error) {
        console.error("Approval error:", error);
        showNotification("Approval failed: " + error.message, "error");
    } finally {
        document.getElementById('approveBtn').disabled = false;
        document.getElementById('approveBtn').textContent = "Approve USDT";
    }
}

// Execute buy transaction
async function executeBuy() {
    try {
        // Disable confirm button during processing
        document.getElementById('confirmBuyBtn').disabled = true;
        document.getElementById('confirmBuyBtn').textContent = "Processing...";
        
        const vnsAmountInput = document.getElementById('vnsAmount').value;
        const vnsAmount = web3.utils.toWei(vnsAmountInput, 'ether');
        
        showNotification("Processing purchase transaction...", "info");
        
        await presaleContract.methods.buyTokens(vnsAmount).send({ from: accounts[0] });
        
        hideModal('buyModal');
        showNotification("Tokens purchased successfully!", "success");
        
        // Refresh data and clear input
        loadContractData();
        document.getElementById('vnsAmount').value = '';
        document.getElementById('usdtCost').textContent = '0.00';
    } catch (error) {
        console.error("Transaction error:", error);
        showNotification("Transaction failed: " + error.message, "error");
    } finally {
        document.getElementById('confirmBuyBtn').disabled = false;
        document.getElementById('confirmBuyBtn').textContent = "Confirm Purchase";
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showNotification("Copied to clipboard: " + text.substring(0, 10) + "...", "success");
}

// UI Helper functions
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function updateWalletDisplay() {
    const walletBtn = document.getElementById('connectWallet');
    const walletDiv = document.getElementById('walletAddress');
    
    if (accounts && accounts.length > 0) {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        walletDiv.textContent = `Connected: ${shortAddress}`;
        walletBtn.textContent = "Connected";
        walletBtn.disabled = true;
    } else {
        walletDiv.textContent = '';
        walletBtn.textContent = "Connect Wallet";
        walletBtn.disabled = false;
    }
}
