// Contract ABIs
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"oldMin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MinPurchaseUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"},{"indexed":false,"internalType":"address","name":"oldReceiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"PaymentReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"oldPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldWallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"SellerWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pricePerVNS","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAvailableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSellerWallet","type":"address"}],"name":"setSellerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const vnsABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Configuration with contract addresses
const config = {
    presaleAddress: "0xCf49a837B3De3C838aA22DBc7Bb5472640F3301a",
    usdtAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
    vnsAddress: "0x76f8F13B04B85443afDE3D29991363BF54b756fD"
};

// Global variables
let web3;
let presaleContract;
let usdtContract;
let vnsContract;
let accounts = [];
let vnsDecimals = 8;
let usdtDecimals = 18;

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const walletAddressDiv = document.getElementById('walletAddress');
const currentPriceSpan = document.getElementById('currentPrice');
const availableTokensSpan = document.getElementById('availableTokens');
const minPurchaseSpan = document.getElementById('minPurchase');
const vnsAmountInput = document.getElementById('vnsAmount');
const usdtCostDiv = document.getElementById('usdtCost');
const buyWithVnsBtn = document.getElementById('buyWithVns');
const transactionModal = document.getElementById('transactionModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const notification = document.getElementById('notification');

// Initialize the application
async function init() {
    await initWeb3();
    await initContracts();
    await loadContractData();
    setupEventListeners();
}

// Initialize Web3
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
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
    }

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            updateWalletDisplay();
            loadContractData();
        });
        
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
}

// Initialize contracts
async function initContracts() {
    presaleContract = new web3.eth.Contract(presaleABI, config.presaleAddress);
    usdtContract = new web3.eth.Contract(usdtABI, config.usdtAddress);
    vnsContract = new web3.eth.Contract(vnsABI, config.vnsAddress);

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

// Load contract data
async function loadContractData() {
    try {
        const price = await presaleContract.methods.getPrice().call();
        const priceHumanReadable = price / (10 ** (18 - 8 + 8));
        currentPriceSpan.textContent = priceHumanReadable.toFixed(8);

        const availableTokens = await presaleContract.methods.getAvailableTokens().call();
        availableTokensSpan.textContent = formatTokenAmount(availableTokens, vnsDecimals);

        const minPurchase = await presaleContract.methods.minPurchase().call();
        minPurchaseSpan.textContent = formatTokenAmount(minPurchase, vnsDecimals);
    } catch (error) {
        console.error("Error loading contract data:", error);
        showNotification("Error loading contract data. Please try again.", "error");
    }
}

// Setup event listeners
function setupEventListeners() {
    connectWalletBtn.addEventListener('click', connectWallet);
    vnsAmountInput.addEventListener('input', calculateUsdtCost);
    buyWithVnsBtn.addEventListener('click', buyVnsTokens);
}

// Connect wallet
async function connectWallet() {
    if (!window.ethereum) {
        showNotification("Please install MetaMask or another Web3 provider.", "error");
        return;
    }

    try {
        showModal("Connecting Wallet", "Please approve the connection in your wallet...");
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        updateWalletDisplay();
        hideModal();
        showNotification("Wallet connected successfully!", "success");
        await loadContractData();
    } catch (error) {
        console.error("Error connecting wallet:", error);
        hideModal();
        showNotification("Error connecting wallet. Please try again.", "error");
    }
}

// Update wallet display
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

// Calculate USDT cost
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

        const vnsAmountInUnits = vnsAmount * (10 ** vnsDecimals);
        const usdtCost = (vnsAmountInUnits * price) / (10 ** (18 + 8));
        usdtCostDiv.textContent = `${usdtCost.toFixed(6)} USDT`;
    } catch (error) {
        console.error("Error calculating USDT cost:", error);
        usdtCostDiv.textContent = "Error";
    }
}

// Buy VNS tokens
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
        
        // 1. Get required data
        const price = await presaleContract.methods.getPrice().call();
        const vnsAmountInUnits = parseFloat(vnsAmount) * (10 ** vnsDecimals);
        const usdtCost = (vnsAmountInUnits * price) / (10 ** (18 + 8));
        
        // 2. Check contract state
        const isPaused = await presaleContract.methods.isPaused().call();
        if(isPaused) {
            hideModal();
            showNotification("Presale is currently paused", "error");
            return;
        }
        
        // 3. Check minimum purchase
        const minPurchase = await presaleContract.methods.minPurchase().call();
        if(vnsAmountInUnits < minPurchase) {
            hideModal();
            showNotification(`Minimum purchase is ${minPurchase/(10**vnsDecimals)} VNS`, "error");
            return;
        }
        
        // 4. Check USDT balance
        const usdtBalance = await usdtContract.methods.balanceOf(accounts[0]).call();
        if(usdtBalance < usdtCost * (10 ** usdtDecimals)) {
            hideModal();
            showNotification("Insufficient USDT balance", "error");
            return;
        }
        
        // 5. Approve USDT spending
        modalMessage.textContent = "Step 1/2: Approving USDT spending...";
        await approveUsdtSpending(usdtCost);
        
        // 6. Verify allowance
        const allowance = await usdtContract.methods.allowance(
            accounts[0], 
            config.presaleAddress
        ).call();
        
        console.log("USDT Allowance:", allowance);
        
        // 7. Execute purchase
        modalMessage.textContent = "Step 2/2: Buying VNS tokens...";
        
        const tx = await presaleContract.methods.buyTokens(
            vnsAmountInUnits.toString()
        ).send({ 
            from: accounts[0],
            gas: 300000,
            gasPrice: web3.utils.toWei('15', 'gwei')
        });
        
        console.log("Transaction Receipt:", tx);
        
        hideModal();
        showNotification("VNS tokens purchased successfully!", "success");
        await loadContractData();
        
    } catch (error) {
        console.error("Purchase Error:", {
            message: error.message,
            data: error.data,
            stack: error.stack
        });
        
        hideModal();
        
        if(error.data) {
            const revertReason = web3.utils.hexToAscii(error.data);
            showNotification(`Failed: ${revertReason}`, "error");
        } else {
            showNotification(`Failed: ${error.message}`, "error");
        }
    }
}

// Approve USDT spending
async function approveUsdtSpending(amount) {
    try {
        const amountWithDecimals = BigInt(Math.floor(amount * (10 ** usdtDecimals)));
        
        const currentAllowance = await usdtContract.methods.allowance(
            accounts[0],
            config.presaleAddress
        ).call();
        
        if (BigInt(currentAllowance) >= amountWithDecimals) {
            return;
        }
        
        const tx = await usdtContract.methods.approve(
            config.presaleAddress,
            amountWithDecimals.toString()
        ).send({ 
            from: accounts[0],
            gas: 200000
        });
        
        return tx;
    } catch (error) {
        console.error("Error approving USDT spending:", error);
        throw error;
    }
}

// Helper functions
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

// Initialize the app
window.addEventListener('DOMContentLoaded', init);
