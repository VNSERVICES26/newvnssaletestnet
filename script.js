// Contract details
const presaleContractAddress = "0x4e8a2994f87843ad9EA5F6bda956aC1b181A3323";
const vnsTokenAddress = "0x76f8F13B04B85443afDE3D29991363BF54b756fD";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const minPurchase = 10 * 10**8; // 10 VNS (8 decimals)
const maxPurchase = 500 * 10**8; // 500 VNS (8 decimals)

// Presale ABI
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"MinMaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"},{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"setMinMaxPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// Global variables
let web3;
let presaleContract;
let accounts = [];
let chainId;

// Initialize the application
window.addEventListener('load', async () => {
    // Set up tab switching
    setupTabs();
    
    // Set up event listeners
    document.getElementById('connectWalletBtn').addEventListener('click', connectWallet);
    document.getElementById('buyWithVNSBtn').addEventListener('click', buyWithVNSAmount);
    document.getElementById('buyWithUSDTBtn').addEventListener('click', buyWithUSDTAmount);
    document.getElementById('vnsAmount').addEventListener('input', calculateUSDTRequired);
    document.getElementById('usdtAmount').addEventListener('input', calculateVNSYouGet);
    
    // Initialize Web3
    await initWeb3();
});

// Initialize Web3
async function initWeb3() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            initContract();
            updateUI();
        } catch (error) {
            console.error("User denied account access");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        initContract();
    } else {
        console.log('Non-Ethereum browser detected. Consider trying MetaMask!');
    }
}

// Initialize contract
function initContract() {
    presaleContract = new web3.eth.Contract(presaleABI, presaleContractAddress);
    loadPrice();
}

// Connect wallet
async function connectWallet() {
    try {
        if (window.ethereum) {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            chainId = await web3.eth.getChainId();
            updateUI();
        } else {
            alert("Please install MetaMask or another Web3 wallet!");
        }
    } catch (error) {
        console.error("Error connecting wallet:", error);
        showTransactionStatus("Error connecting wallet", "error");
    }
}

// Update UI
function updateUI() {
    if (accounts && accounts.length > 0) {
        const walletAddress = document.getElementById('walletAddress');
        walletAddress.textContent = accounts[0];
        
        const connectBtn = document.getElementById('connectWalletBtn');
        connectBtn.textContent = "Connected";
        connectBtn.style.background = "linear-gradient(to right, #4CAF50, #2E7D32)";
        
        updateNetworkIndicator();
    }
}

// Update network indicator
async function updateNetworkIndicator() {
    const networkIndicator = document.getElementById('networkIndicator');
    
    if (!chainId) {
        chainId = await web3.eth.getChainId();
    }
    
    switch(chainId.toString()) {
        case "1": // Ethereum Mainnet
            networkIndicator.textContent = "Ethereum Mainnet";
            networkIndicator.style.backgroundColor = "#29B6AF";
            break;
        case "56": // BSC Mainnet
            networkIndicator.textContent = "BSC Mainnet";
            networkIndicator.style.backgroundColor = "#F0B90B";
            break;
        case "97": // BSC Testnet
            networkIndicator.textContent = "BSC Testnet";
            networkIndicator.style.backgroundColor = "#F0B90B";
            break;
        default:
            networkIndicator.textContent = `Unsupported Network (${chainId})`;
            networkIndicator.style.backgroundColor = "#f44336";
    }
}

// Load price from contract
async function loadPrice() {
    try {
        const price = await presaleContract.methods.pricePerVNS().call();
        const priceInUSDT = web3.utils.fromWei(price.toString(), 'ether');
        document.getElementById('currentPrice').textContent = `${priceInUSDT} USDT per VNS`;
    } catch (error) {
        console.error("Error loading price:", error);
    }
}

// Calculate USDT required for VNS amount
function calculateUSDTRequired() {
    const vnsAmount = parseFloat(document.getElementById('vnsAmount').value) || 0;
    const vnsAmountWithDecimals = vnsAmount * 10**8; // Convert to 8 decimals
    
    if (vnsAmountWithDecimals < minPurchase) {
        document.getElementById('usdtRequired').textContent = "Amount too low (min 10 VNS)";
        return;
    }
    
    if (vnsAmountWithDecimals > maxPurchase) {
        document.getElementById('usdtRequired').textContent = "Amount too high (max 500 VNS)";
        return;
    }
    
    // Get price from contract
    presaleContract.methods.pricePerVNS().call()
        .then(price => {
            const usdtRequired = (vnsAmountWithDecimals * price) / (10**8 * 10**18);
            document.getElementById('usdtRequired').textContent = `${usdtRequired.toFixed(6)} USDT`;
        })
        .catch(err => {
            console.error("Error calculating USDT required:", err);
            document.getElementById('usdtRequired').textContent = "Error calculating";
        });
}

// Calculate VNS you get for USDT amount
function calculateVNSYouGet() {
    const usdtAmount = parseFloat(document.getElementById('usdtAmount').value) || 0;
    const usdtAmountWithDecimals = usdtAmount * 10**18; // Convert to 18 decimals
    
    // Get price from contract
    presaleContract.methods.pricePerVNS().call()
        .then(price => {
            const vnsYouGet = (usdtAmountWithDecimals * (10**8)) / price;
            const vnsYouGetWithDecimals = vnsYouGet;
            
            if (vnsYouGetWithDecimals < minPurchase) {
                document.getElementById('vnsYouGet').textContent = "Amount too low (min 9 USDT)";
                return;
            }
            
            if (vnsYouGetWithDecimals > maxPurchase) {
                document.getElementById('vnsYouGet').textContent = "Amount too high (max 450 USDT)";
                return;
            }
            
            document.getElementById('vnsYouGet').textContent = `${(vnsYouGet/10**8).toFixed(2)} VNS`;
        })
        .catch(err => {
            console.error("Error calculating VNS amount:", err);
            document.getElementById('vnsYouGet').textContent = "Error calculating";
        });
}

// Buy with VNS amount
async function buyWithVNSAmount() {
    try {
        const vnsAmount = document.getElementById('vnsAmount').value;
        const vnsAmountWithDecimals = Math.floor(parseFloat(vnsAmount) * 10**8);
        
        if (!vnsAmount || isNaN(vnsAmountWithDecimals) || vnsAmountWithDecimals <= 0) {
            showTransactionStatus("Please enter a valid VNS amount", "error");
            return;
        }
        
        if (vnsAmountWithDecimals < minPurchase) {
            showTransactionStatus(`Minimum purchase is ${minPurchase/10**8} VNS`, "error");
            return;
        }
        
        if (vnsAmountWithDecimals > maxPurchase) {
            showTransactionStatus(`Maximum purchase is ${maxPurchase/10**8} VNS per transaction`, "error");
            return;
        }
        
        showTransactionStatus("Processing transaction...", "processing");
        
        const result = await presaleContract.methods.buyTokens(vnsAmountWithDecimals.toString())
            .send({ from: accounts[0] });
        
        showTransactionStatus(`Success! Transaction hash: ${result.transactionHash}`, "success");
    } catch (error) {
        console.error("Error buying tokens:", error);
        showTransactionStatus(`Error: ${error.message}`, "error");
    }
}

// Buy with USDT amount
async function buyWithUSDTAmount() {
    try {
        const usdtAmount = document.getElementById('usdtAmount').value;
        const usdtAmountWithDecimals = Math.floor(parseFloat(usdtAmount) * 10**18);
        
        if (!usdtAmount || isNaN(usdtAmountWithDecimals) || usdtAmountWithDecimals <= 0) {
            showTransactionStatus("Please enter a valid USDT amount", "error");
            return;
        }
        
        showTransactionStatus("Processing transaction...", "processing");
        
        const result = await presaleContract.methods.buyWithUSDT(usdtAmountWithDecimals.toString())
            .send({ from: accounts[0] });
        
        showTransactionStatus(`Success! Transaction hash: ${result.transactionHash}`, "success");
    } catch (error) {
        console.error("Error buying with USDT:", error);
        showTransactionStatus(`Error: ${error.message}`, "error");
    }
}

// Show transaction status
function showTransactionStatus(message, type) {
    const statusElement = document.getElementById('transactionStatus');
    statusElement.textContent = message;
    statusElement.style.display = "block";
    
    switch(type) {
        case "success":
            statusElement.style.backgroundColor = "#4CAF50";
            break;
        case "error":
            statusElement.style.backgroundColor = "#f44336";
            break;
        case "processing":
            statusElement.style.backgroundColor = "#2196F3";
            break;
        default:
            statusElement.style.backgroundColor = "#9E9E9E";
    }
    
    // Hide after 5 seconds if not error
    if (type !== "error") {
        setTimeout(() => {
            statusElement.style.display = "none";
        }, 5000);
    }
}

// Set up tabs
function setupTabs() {
    const tabVNS = document.getElementById('tabVNS');
    const tabUSDT = document.getElementById('tabUSDT');
    const vnsTab = document.getElementById('vnsTab');
    const usdtTab = document.getElementById('usdtTab');
    
    tabVNS.addEventListener('click', () => {
        tabVNS.classList.add('active');
        tabUSDT.classList.remove('active');
        vnsTab.classList.add('active');
        usdtTab.classList.remove('active');
    });
    
    tabUSDT.addEventListener('click', () => {
        tabUSDT.classList.add('active');
        tabVNS.classList.remove('active');
        usdtTab.classList.add('active');
        vnsTab.classList.remove('active');
    });
}

// Copy to clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = element.nextElementSibling;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
