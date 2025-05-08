// Contract ABIs
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"MinPurchaseUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"PaymentReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const vnsABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}];

// Configuration with provided contract addresses
const config = {
    presaleAddress: "0x813058d6256A805DFE53D640756E7C63E0946A72",
    usdtAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
    vnsAddress: "0x76f8F13B04B85443afDE3D29991363BF54b756fD"
};

let web3;
let presaleContract;
let usdtContract;
let vnsContract;
let accounts = [];
let vnsDecimals = 8;  // VNS has 8 decimals
let usdtDecimals = 18; // USDT has 18 decimals

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const walletAddressDiv = document.getElementById('walletAddress');
const vnsContractSpan = document.getElementById('vnsContract');
const copyContractBtn = document.getElementById('copyContract');
const currentPriceSpan = document.getElementById('currentPrice');
const availableTokensSpan = document.getElementById('availableTokens');
const minPurchaseSpan = document.getElementById('minPurchase');
const buyVnsTab = document.getElementById('buyVnsTab');
const buyUsdtTab = document.getElementById('buyUsdtTab');
const buyVnsSection = document.getElementById('buyVnsSection');
const buyUsdtSection = document.getElementById('buyUsdtSection');
const vnsAmountInput = document.getElementById('vnsAmount');
const usdtCostDiv = document.getElementById('usdtCost');
const usdtAmountInput = document.getElementById('usdtAmount');
const vnsReceivedDiv = document.getElementById('vnsReceived');
const buyWithVnsBtn = document.getElementById('buyWithVns');
const buyWithUsdtBtn = document.getElementById('buyWithUsdt');
const transactionModal = document.getElementById('transactionModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.querySelector('.close');
const notification = document.getElementById('notification');

// Initialize the application
async function init() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize Web3
    await initWeb3();
    
    // Initialize contracts
    await initContracts();
    
    // Load contract data
    await loadContractData();
    
    // Set up real-time updates
    setupRealTimeUpdates();
}

function setupEventListeners() {
    // Wallet connection
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Tab switching
    buyVnsTab.addEventListener('click', () => switchTab('vns'));
    buyUsdtTab.addEventListener('click', () => switchTab('usdt'));
    
    // Copy contract address
    copyContractBtn.addEventListener('click', copyContractAddress);
    
    // Calculate USDT cost when VNS amount changes
    vnsAmountInput.addEventListener('input', calculateUsdtCost);
    
    // Calculate VNS received when USDT amount changes
    usdtAmountInput.addEventListener('input', calculateVnsReceived);
    
    // Buy buttons
    buyWithVnsBtn.addEventListener('click', buyVnsTokens);
    buyWithUsdtBtn.addEventListener('click', buyWithUsdt);
    
    // Modal close
    closeModal.addEventListener('click', () => {
        transactionModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === transactionModal) {
            transactionModal.style.display = 'none';
        }
    });
}

async function initWeb3() {
    // Modern dapp browsers
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
        } catch (error) {
            console.error("User denied account access");
        }
    }
    // Legacy dapp browsers
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        accounts = await web3.eth.getAccounts();
        updateWalletDisplay();
    }
    // Non-dapp browsers
    else {
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
        // You can implement WalletConnect or other providers here
    }
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            updateWalletDisplay();
            loadContractData();
        });
        
        // Listen for chain changes
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
}

async function initContracts() {
    // Initialize presale contract
    presaleContract = new web3.eth.Contract(presaleABI, config.presaleAddress);
    
    // Initialize USDT contract
    usdtContract = new web3.eth.Contract(usdtABI, config.usdtAddress);
    
    // Initialize VNS token contract
    vnsContract = new web3.eth.Contract(vnsABI, config.vnsAddress);
    
    // Get token decimals (using defaults if there's an error)
    try {
        vnsDecimals = await vnsContract.methods.decimals().call();
    } catch (error) {
        console.error("Error getting VNS decimals, using default 8:", error);
        vnsDecimals = 8;
    }
    
    try {
        usdtDecimals = await usdtContract.methods.decimals().call();
    } catch (error) {
        console.error("Error getting USDT decimals, using default 18:", error);
        usdtDecimals = 18;
    }
}

async function loadContractData() {
    try {
        // Load VNS contract address
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        vnsContractSpan.textContent = vnsAddress;
        
        // Load current price (pricePerVNS is in USDT with 18 decimals per VNS with 8 decimals)
        const price = await presaleContract.methods.getPrice().call();
        // Convert price to human-readable format (USDT per VNS)
        const priceHumanReadable = price / (10 ** (18 - 8 + 8)); // Adjust for both tokens' decimals
        currentPriceSpan.textContent = priceHumanReadable.toFixed(8);
        
        // Load available tokens
        const availableTokens = await presaleContract.methods.getAvailableTokens().call();
        availableTokensSpan.textContent = formatTokenAmount(availableTokens, vnsDecimals);
        
        // Load minimum purchase
        const minPurchase = await presaleContract.methods.minPurchase().call();
        minPurchaseSpan.textContent = formatTokenAmount(minPurchase, vnsDecimals);
    } catch (error) {
        console.error("Error loading contract data:", error);
        showNotification("Error loading contract data. Please try again.", "error");
    }
}

function setupRealTimeUpdates() {
    // Update prices when inputs change
    vnsAmountInput.addEventListener('input', calculateUsdtCost);
    usdtAmountInput.addEventListener('input', calculateVnsReceived);
}

async function connectWallet() {
    if (!window.ethereum) {
        showNotification("Please install MetaMask or another Web3 provider.", "error");
        return;
    }
    
    try {
        showModal("Connecting Wallet", "Please approve the connection in your wallet...");
        
        // Request account access
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        updateWalletDisplay();
        
        // Check if we need to switch networks
        const chainId = await web3.eth.getChainId();
        // You might want to add network switching logic here if needed
        
        hideModal();
        showNotification("Wallet connected successfully!", "success");
        
        // Refresh contract data
        await loadContractData();
    } catch (error) {
        console.error("Error connecting wallet:", error);
        hideModal();
        showNotification("Error connecting wallet. Please try again.", "error");
    }
}

function updateWalletDisplay() {
    if (accounts.length > 0) {
        const shortenedAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        walletAddressDiv.textContent = `Connected: ${shortenedAddress}`;
        connectWalletBtn.textContent = "Wallet Connected";
        connectWalletBtn.disabled = true;
    } else {
        walletAddressDiv.textContent = "";
        connectWalletBtn.textContent = "Connect Wallet";
        connectWalletBtn.disabled = false;
    }
}

function switchTab(tab) {
    if (tab === 'vns') {
        buyVnsTab.classList.add('active');
        buyUsdtTab.classList.remove('active');
        buyVnsSection.style.display = 'block';
        buyUsdtSection.style.display = 'none';
    } else {
        buyVnsTab.classList.remove('active');
        buyUsdtTab.classList.add('active');
        buyVnsSection.style.display = 'none';
        buyUsdtSection.style.display = 'block';
    }
}

function copyContractAddress() {
    const address = vnsContractSpan.textContent;
    navigator.clipboard.writeText(address).then(() => {
        showNotification("Contract address copied to clipboard!", "success");
    }).catch(err => {
        console.error("Failed to copy address:", err);
        showNotification("Failed to copy address", "error");
    });
}

async function calculateUsdtCost() {
    if (!vnsAmountInput.value) {
        usdtCostDiv.textContent = "0 USDT";
        return;
    }
    
    try {
        const price = await presaleContract.methods.getPrice().call();
        const vnsAmount = parseFloat(vnsAmountInput.value);
        
        if (isNaN(vnsAmount) || vnsAmount <= 0) {
            usdtCostDiv.textContent = "0 USDT";
            return;
        }
        
        // Convert VNS amount to token units (with 8 decimals)
        const vnsAmountInUnits = vnsAmount * (10 ** vnsDecimals);
        
        // Calculate USDT cost (price is in USDT with 18 decimals per VNS with 8 decimals)
        const usdtCost = (vnsAmountInUnits * price) / (10 ** (18 + 8));
        
        usdtCostDiv.textContent = `${usdtCost.toFixed(6)} USDT`;
    } catch (error) {
        console.error("Error calculating USDT cost:", error);
        usdtCostDiv.textContent = "Error";
    }
}

async function calculateVnsReceived() {
    if (!usdtAmountInput.value) {
        vnsReceivedDiv.textContent = "0 VNS";
        return;
    }
    
    try {
        const price = await presaleContract.methods.getPrice().call();
        const usdtAmount = parseFloat(usdtAmountInput.value);
        
        if (isNaN(usdtAmount) || usdtAmount <= 0) {
            vnsReceivedDiv.textContent = "0 VNS";
            return;
        }
        
        // Convert USDT amount to token units (with 18 decimals)
        const usdtAmountInUnits = usdtAmount * (10 ** usdtDecimals);
        
        // Calculate VNS received (price is in USDT with 18 decimals per VNS with 8 decimals)
        const vnsReceived = (usdtAmountInUnits * (10 ** 8)) / price;
        
        vnsReceivedDiv.textContent = `${vnsReceived.toFixed(8)} VNS`;
    } catch (error) {
        console.error("Error calculating VNS received:", error);
        vnsReceivedDiv.textContent = "Error";
    }
}

async function buyVnsTokens() {
    if (!accounts.length) {
        showNotification("Please connect your wallet first.", "error");
        return;
    }
    
    const vnsAmount = vnsAmountInput.value;
    if (!vnsAmount || parseFloat(vnsAmount) <= 0) {
        showNotification("Please enter a valid VNS amount.", "error");
        return;
    }
    
    try {
        showModal("Processing Purchase", "Please approve the transactions in your wallet...");
        
        // Get the price to calculate USDT cost
        const price = await presaleContract.methods.getPrice().call();
        const vnsAmountInUnits = parseFloat(vnsAmount) * (10 ** vnsDecimals);
        const usdtCost = (vnsAmountInUnits * price) / (10 ** (18 + 8));
        
        // Step 1: Approve USDT spending
        modalMessage.textContent = "Step 1/2: Approving USDT spending...";
        await approveUsdtSpending(usdtCost);
        
        // Step 2: Buy VNS tokens
        modalMessage.textContent = "Step 2/2: Buying VNS tokens...";
        await buyTokens(vnsAmountInUnits.toString());
        
        hideModal();
        showNotification("VNS tokens purchased successfully!", "success");
        
        // Refresh available tokens
        await loadContractData();
    } catch (error) {
        console.error("Error buying VNS tokens:", error);
        hideModal();
        showNotification(`Error: ${error.message}`, "error");
    }
}

async function buyWithUsdt() {
    if (!accounts.length) {
        showNotification("Please connect your wallet first.", "error");
        return;
    }
    
    const usdtAmount = usdtAmountInput.value;
    if (!usdtAmount || parseFloat(usdtAmount) <= 0) {
        showNotification("Please enter a valid USDT amount.", "error");
        return;
    }
    
    try {
        showModal("Processing Purchase", "Please approve the transactions in your wallet...");
        
        // Convert USDT amount to token units (with 18 decimals)
        const usdtAmountInUnits = parseFloat(usdtAmount) * (10 ** usdtDecimals);
        
        // Step 1: Approve USDT spending
        modalMessage.textContent = "Step 1/2: Approving USDT spending...";
        await approveUsdtSpending(usdtAmount);
        
        // Step 2: Buy with USDT
        modalMessage.textContent = "Step 2/2: Buying VNS tokens with USDT...";
        await buyWithUsdtTokens(usdtAmountInUnits.toString());
        
        hideModal();
        showNotification("VNS tokens purchased successfully with USDT!", "success");
        
        // Refresh available tokens
        await loadContractData();
    } catch (error) {
        console.error("Error buying with USDT:", error);
        hideModal();
        showNotification(`Error: ${error.message}`, "error");
    }
}

async function approveUsdtSpending(amount) {
    try {
        // Convert amount to USDT decimals
        const amountWithDecimals = BigInt(Math.floor(amount * (10 ** usdtDecimals)));
        
        // Check if we already have sufficient allowance
        const currentAllowance = await usdtContract.methods.allowance(
            accounts[0],
            config.presaleAddress
        ).call();
        
        if (BigInt(currentAllowance) >= amountWithDecimals) {
            return; // Already approved
        }
        
        // Send approval transaction
        const tx = await usdtContract.methods.approve(
            config.presaleAddress,
            amountWithDecimals.toString()
        ).send({ from: accounts[0] });
        
        return tx;
    } catch (error) {
        console.error("Error approving USDT spending:", error);
        throw error;
    }
}

async function buyTokens(vnsAmount) {
    try {
        const tx = await presaleContract.methods.buyTokens(
            vnsAmount
        ).send({ from: accounts[0] });
        
        return tx;
    } catch (error) {
        console.error("Error buying tokens:", error);
        throw error;
    }
}

async function buyWithUsdtTokens(usdtAmount) {
    try {
        const tx = await presaleContract.methods.buyWithUSDT(
            usdtAmount
        ).send({ from: accounts[0] });
        
        return tx;
    } catch (error) {
        console.error("Error buying with USDT:", error);
        throw error;
    }
}

function formatTokenAmount(amount, decimals) {
    const amountNumber = typeof amount === 'string' ? parseFloat(amount) : amount;
    return (amountNumber / (10 ** decimals)).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: decimals
    });
}

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    transactionModal.style.display = 'block';
}

function hideModal() {
    transactionModal.style.display = 'none';
}

function showNotification(message, type) {
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', init);
