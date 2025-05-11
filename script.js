// Contract ABIs
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const usdtABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const vnsABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Configuration
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

// Safe DOM element updater
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initWeb3();
        await initContracts();
        await loadContractData();
        setupEventListeners();
        showNotification("Application initialized successfully", "success");
    } catch (error) {
        console.error("Initialization error:", error);
        showNotification("Failed to initialize application", "error");
    }
});

async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
            
            window.ethereum.on('disconnect', () => {
                accounts = [];
                updateWalletDisplay();
                showNotification("Wallet disconnected", "error");
            });
            
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                updateWalletDisplay();
                loadContractData();
            });
            
            window.ethereum.on('chainChanged', () => window.location.reload());
            
        } catch (error) {
            console.error("Wallet connection error:", error);
            showNotification("Please connect your wallet", "error");
        }
    } else {
        showNotification("Please install MetaMask", "error");
    }
}

async function initContracts() {
    if (!web3) {
        showNotification("Web3 not initialized", "error");
        return;
    }

    try {
        presaleContract = new web3.eth.Contract(presaleABI, config.presaleAddress);
        usdtContract = new web3.eth.Contract(usdtABI, config.usdtAddress);
        vnsContract = new web3.eth.Contract(vnsABI, config.vnsAddress);

        vnsDecimals = await vnsContract.methods.decimals().call();
        usdtDecimals = await usdtContract.methods.decimals().call();
    } catch (error) {
        console.error("Contract initialization error:", error);
        showNotification("Failed to load contracts", "error");
    }
}

async function loadContractData() {
    if (!presaleContract || !vnsContract) {
        showNotification("Contracts not loaded", "error");
        return;
    }

    try {
        // Load and display contract data
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        updateElement('vnsContract', vnsAddress);
        updateElement('presaleContract', config.presaleAddress);
        
        const price = await presaleContract.methods.pricePerVNS().call();
        updateElement('currentPrice', web3.utils.fromWei(price, 'ether'));
        
        const sellerWallet = await presaleContract.methods.sellerWallet().call();
        const availableTokens = await vnsContract.methods.balanceOf(sellerWallet).call();
        updateElement('availableTokens', formatTokenAmount(availableTokens, vnsDecimals));
        
        const minPurchase = await presaleContract.methods.minPurchase().call();
        updateElement('minPurchase', formatTokenAmount(minPurchase, vnsDecimals));
        
        const isPaused = await presaleContract.methods.isPaused().call();
        updateElement('contractStatus', isPaused ? "Paused" : "Active");
        
        // Load user's USDT balance if wallet is connected
        if (accounts.length > 0) {
            const usdtBalance = await usdtContract.methods.balanceOf(accounts[0]).call();
            updateElement('userUsdtBalance', formatTokenAmount(usdtBalance, usdtDecimals));
        }
    } catch (error) {
        console.error("Data loading error:", error);
        showNotification("Failed to load contract data", "error");
    }
}

function setupEventListeners() {
    // Safe event listener adder
    function addListener(id, event, handler) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener(event, handler);
        } else {
            console.warn(`Element ${id} not found for event listener`);
        }
    }

    addListener('connectWallet', 'click', connectWallet);
    addListener('copyPresaleContract', 'click', () => copyToClipboard(config.presaleAddress));
    addListener('copyVnsContract', 'click', async () => {
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        copyToClipboard(vnsAddress);
    });
    addListener('vnsAmount', 'input', calculateUsdtCost);
    addListener('buyWithVns', 'click', buyVnsTokens);
    addListener('cancelApprove', 'click', () => hideModal('approveModal'));
    addListener('cancelBuy', 'click', () => hideModal('buyModal'));
    addListener('approveBtn', 'click', approveUsdt);
    addListener('confirmBuyBtn', 'click', executeBuy);
}

// ... [Rest of your existing functions remain unchanged] ...

// Helper function to format token amounts
function formatTokenAmount(amount, decimals) {
    return (web3.utils.fromWei(amount.toString(), 'ether') / (10 ** (18 - decimals))).toFixed(2);
}

// UI Helper functions
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

function updateWalletDisplay() {
    const walletBtn = document.getElementById('connectWallet');
    const walletDiv = document.getElementById('walletAddress');
    
    if (walletBtn && walletDiv) {
        if (accounts.length > 0) {
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
}

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showNotification("Copied to clipboard", "success");
}

function resetBuyButton() {
    const buyButton = document.getElementById('buyWithVns');
    if (buyButton) {
        buyButton.disabled = false;
        buyButton.textContent = "Buy VNS Tokens";
    }
}
