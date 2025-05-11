// Contracts
const presaleContractAddress = "0x1d696372c231160765ea55294B545451560451b0";
const usdtContractAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

// Decimals
const VNS_DECIMALS = 8;
const USDT_DECIMALS = 18;

// ABIs - Replace with your actual contract ABIs
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
    // Minimal USDT ABI including balanceOf and approve
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

// Helper function to format with decimals
function formatUnits(value, decimals) {
    return value / Math.pow(10, decimals);
}

// Helper function to parse to wei/units
function parseUnits(value, decimals) {
    return BigInt(Math.round(value * Math.pow(10, decimals)));
}

// Initialize Web3
async function initWeb3() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Use 'disconnect' instead of deprecated 'close' event
            window.ethereum.on('disconnect', (error) => {
                console.log('MetaMask disconnected', error);
                showError('Wallet disconnected');
            });
            
            accounts = await web3.eth.getAccounts();
            initContracts();
            updateBalances();
            
            // Setup event listeners
            document.getElementById('vnsAmount').addEventListener('input', updateUsdtCost);
            document.getElementById('approveBtn').addEventListener('click', approveUSDT);
            document.getElementById('buyBtn').addEventListener('click', buyVNS);
            
        } catch (error) {
            console.error("User denied account access", error);
            showError('Please connect your wallet');
        }
    } else {
        showError('Please install MetaMask to use this dApp!');
    }
}

// Initialize contracts
function initContracts() {
    presaleContract = new web3.eth.Contract(presaleABI, presaleContractAddress);
    usdtContract = new web3.eth.Contract(usdtABI, usdtContractAddress);
}

// Update balances
async function updateBalances() {
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
    try {
        const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
        const price = parseFloat(document.getElementById('tokenPrice').textContent);
        const usdtAmount = vnsAmount * price;
        
        const usdtAmountWei = parseUnits(usdtAmount, USDT_DECIMALS);
        
        // Show MetaMask popup for approval
        const tx = await usdtContract.methods.approve(presaleContractAddress, usdtAmountWei.toString())
            .send({ from: accounts[0] });
            
        if (tx.status) {
            alert('USDT approved successfully!');
        } else {
            throw new Error('Approval transaction failed');
        }
    } catch (error) {
        console.error("Approval failed:", error);
        showError('Approval failed: ' + (error.message || error));
    }
}

// Buy VNS tokens
async function buyVNS() {
    try {
        const vnsAmount = parseFloat(document.getElementById('vnsAmount').value);
        const minPurchase = parseFloat(document.getElementById('minPurchase').textContent);
        
        if (vnsAmount < minPurchase) {
            throw new Error(`Minimum purchase is ${minPurchase} VNS`);
        }
        
        const vnsAmountWei = parseUnits(vnsAmount, VNS_DECIMALS);
        
        // Show MetaMask popup for buy transaction
        const tx = await presaleContract.methods.buyTokens(vnsAmountWei.toString())
            .send({ from: accounts[0] });
            
        if (tx.status) {
            alert('Purchase successful!');
            updateBalances();
        } else {
            throw new Error('Purchase transaction failed');
        }
    } catch (error) {
        console.error("Purchase failed:", error);
        showError('Purchase failed: ' + (error.message || error));
    }
}

// Show error message
function showError(message) {
    document.getElementById('errorMessage').textContent = message;
}

// Copy to clipboard
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

// Initialize when page loads
window.addEventListener('load', initWeb3);
