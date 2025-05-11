// Contracts
const presaleContractAddress = "0x1d696372c231160765ea55294B545451560451b0";
const usdtContractAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

// Decimals
const VNS_DECIMALS = 8;
const USDT_DECIMALS = 18;

// Minimal ABIs
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
    {
        "inputs": [],
        "name": "getAvailableTokens",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
    {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "_spender", "type": "address"},
            {"name": "_value", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
    }
];

let web3;
let accounts = [];
let presaleContract;
let usdtContract;
let isWalletConnected = false;

// Helper functions
function formatUnits(value, decimals) {
    return value / Math.pow(10, decimals);
}

function parseUnits(value, decimals) {
    return BigInt(Math.round(value * Math.pow(10, decimals)));
}

function showLoading(show) {
    document.getElementById('loadingMessage').style.display = show ? 'block' : 'none';
    document.getElementById('approveBtn').disabled = show;
    document.getElementById('buyBtn').disabled = show;
}

function showError(message) {
    document.getElementById('errorMessage').textContent = message;
    setTimeout(() => {
        document.getElementById('errorMessage').textContent = '';
    }, 5000);
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showError('Failed to copy address');
    });
}

// Initialize contracts
function initContracts() {
    try {
        presaleContract = new web3.eth.Contract(presaleABI, presaleContractAddress);
        usdtContract = new web3.eth.Contract(usdtABI, usdtContractAddress);
        document.getElementById('approveBtn').disabled = false;
        document.getElementById('buyBtn').disabled = false;
    } catch (error) {
        console.error("Contract initialization failed:", error);
        showError('Failed to initialize contracts');
    }
}

// Update balances
async function updateBalances() {
    if (!isWalletConnected) return;
    
    try {
        // Get available tokens
        const availableTokensWei = await presaleContract.methods.getAvailableTokens().call();
        const availableTokens = formatUnits(availableTokensWei, VNS_DECIMALS);
        document.getElementById('availableTokens').textContent = availableTokens.toFixed(2);
        
        // Get USDT balance
        const usdtBalanceWei = await usdtContract.methods.balanceOf(accounts[0]).call();
        const usdtBalance = formatUnits(usdtBalanceWei, USDT_DECIMALS);
        document.getElementById('usdtBalance').textContent = usdtBalance.toFixed(2);
        
    } catch (error) {
        console.error("Error updating balances:", error);
        showError('Error fetching balances');
    }
}

// Update USDT cost based on VNS amount
function updateUsdtCost() {
    try {
        const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
        const price = parseFloat(document.getElementById('tokenPrice').textContent);
        const cost = vnsAmount * price;
        document.getElementById('usdtCost').textContent = cost.toFixed(6);
    } catch (error) {
        console.error("Error calculating cost:", error);
    }
}

// Approve USDT for spending
async function approveUSDT() {
    if (!isWalletConnected) {
        showError('Please connect your wallet first');
        return;
    }
    
    try {
        showLoading(true);
        const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
        const price = parseFloat(document.getElementById('tokenPrice').textContent);
        const usdtAmount = vnsAmount * price;
        
        const usdtAmountWei = parseUnits(usdtAmount, USDT_DECIMALS);
        
        await usdtContract.methods.approve(presaleContractAddress, usdtAmountWei.toString())
            .send({ from: accounts[0] });
            
        showError(''); // Clear any previous errors
        alert('USDT approved successfully!');
    } catch (error) {
        console.error("Approval failed:", error);
        showError('Approval failed: ' + (error.message || error));
    } finally {
        showLoading(false);
    }
}

// Buy VNS tokens
async function buyVNS() {
    if (!isWalletConnected) {
        showError('Please connect your wallet first');
        return;
    }
    
    try {
        showLoading(true);
        const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
        const minPurchase = parseFloat(document.getElementById('minPurchase').textContent);
        
        if (vnsAmount < minPurchase) {
            throw new Error(`Minimum purchase is ${minPurchase} VNS`);
        }
        
        const vnsAmountWei = parseUnits(vnsAmount, VNS_DECIMALS);
        
        await presaleContract.methods.buyTokens(vnsAmountWei.toString())
            .send({ from: accounts[0] });
            
        showError(''); // Clear any previous errors
        alert('Purchase successful!');
        updateBalances();
    } catch (error) {
        console.error("Purchase failed:", error);
        showError('Purchase failed: ' + (error.message || error));
    } finally {
        showLoading(false);
    }
}

// Connect wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            window.ethereum.on('disconnect', (error) => {
                console.log('MetaMask disconnected', error);
                isWalletConnected = false;
                document.getElementById('walletInfo').style.display = 'none';
                document.getElementById('connectWallet').style.display = 'block';
                showError('Wallet disconnected');
            });
            
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                if (accounts.length > 0) {
                    updateWalletInfo();
                    updateBalances();
                } else {
                    isWalletConnected = false;
                    document.getElementById('walletInfo').style.display = 'none';
                    document.getElementById('connectWallet').style.display = 'block';
                }
            });
            
            isWalletConnected = true;
            document.getElementById('connectWallet').style.display = 'none';
            document.getElementById('walletInfo').style.display = 'block';
            updateWalletInfo();
            initContracts();
            updateBalances();
            
        } catch (error) {
            console.error("User denied account access", error);
            showError('Please connect your wallet');
        }
    } else {
        showError('Please install MetaMask to use this dApp!');
    }
}

function updateWalletInfo() {
    if (accounts.length > 0) {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        document.getElementById('walletAddress').textContent = shortAddress;
        document.getElementById('walletAddress').title = accounts[0];
    }
}

// Initialize event listeners
function initEventListeners() {
    document.getElementById('vnsAmount').addEventListener('input', updateUsdtCost);
    document.getElementById('approveBtn').addEventListener('click', approveUSDT);
    document.getElementById('buyBtn').addEventListener('click', buyVNS);
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
}

// Initialize when page loads
window.addEventListener('load', () => {
    initEventListeners();
    updateUsdtCost(); // Initialize the USDT cost display
});
