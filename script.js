// Contract details
const presaleContractAddress = "0x4e8a2994f87843ad9EA5F6bda956aC1b181A3323";
const vnsTokenAddress = "0x76f8F13B04B85443afDE3D29991363BF54b756fD";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const minPurchase = 10 * 10**8; // 10 VNS (8 decimals)
const maxPurchase = 500 * 10**8; // 500 VNS (8 decimals)

// ERC20 ABI (for USDT approvals)
const ERC20_ABI = [ {"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
    {
        "constant": false,
        "inputs": [
            {"name": "spender","type": "address"},
            {"name": "value","type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "","type": "bool"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {"name": "owner","type": "address"},
            {"name": "spender","type": "address"}
        ],
        "name": "allowance",
        "outputs": [{"name": "","type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{"name": "account","type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "","type": "uint256"}],
        "type": "function"
    }
];

// Presale ABI
const presaleABI = [ {"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_pricePerVNS","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"MinMaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[],"name":"CHANGE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPriceChange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"},{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"setMinMaxPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// Global variables
let web3;
let presaleContract;
let accounts = [];
let chainId;

// Initialize the application
window.addEventListener('load', async () => {
    // Initialize Web3
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            chainId = await web3.eth.getChainId();
            
            // Initialize contract
            presaleContract = new web3.eth.Contract(presaleABI, presaleContractAddress);
            
            // Update UI
            updateUI();
            loadPrice();
            
            // Setup event listeners
            setupEventListeners();
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert("Please install MetaMask or another Web3 wallet!");
    }
});

function setupEventListeners() {
    // Connect and buy button
    document.getElementById('connectAndBuyBtn').addEventListener('click', startPurchaseFlow);
    
    // VNS amount input listener
    document.getElementById('vnsAmount').addEventListener('input', calculateUSDTRequired);
}

async function startPurchaseFlow() {
    try {
        const vnsAmount = document.getElementById('vnsAmount').value;
        const vnsAmountWithDecimals = Math.floor(parseFloat(vnsAmount) * 10**8);
        
        // Validate input
        if (!vnsAmount || isNaN(vnsAmountWithDecimals) {
            showTransactionStatus("Please enter valid VNS amount", "error");
            return;
        }
        
        if (vnsAmountWithDecimals < minPurchase) {
            showTransactionStatus(`Minimum purchase is ${minPurchase/10**8} VNS`, "error");
            return;
        }
        
        if (vnsAmountWithDecimals > maxPurchase) {
            showTransactionStatus(`Maximum purchase is ${maxPurchase/10**8} VNS`, "error");
            return;
        }
        
        // Calculate required USDT
        const price = await presaleContract.methods.pricePerVNS().call();
        const usdtAmountRequired = (vnsAmountWithDecimals * price) / (10**8 * 10**18);
        const usdtAmountWithDecimals = Math.floor(usdtAmountRequired * 10**18);
        
        // Check USDT balance
        const usdtContract = new web3.eth.Contract(ERC20_ABI, usdtTokenAddress);
        const usdtBalance = await usdtContract.methods.balanceOf(accounts[0]).call();
        
        if (usdtBalance < usdtAmountWithDecimals) {
            showTransactionStatus("Insufficient USDT balance", "error");
            return;
        }
        
        // Check allowance
        const currentAllowance = await usdtContract.methods.allowance(accounts[0], presaleContractAddress).call();
        
        // Step 1: Approve USDT if needed
        if (currentAllowance < usdtAmountWithDecimals) {
            showTransactionStatus("Approving USDT...", "processing");
            await usdtContract.methods.approve(
                presaleContractAddress,
                usdtAmountWithDecimals.toString()
            ).send({ from: accounts[0] });
        }
        
        // Step 2: Buy VNS tokens
        showTransactionStatus("Purchasing VNS tokens...", "processing");
        const result = await presaleContract.methods.buyTokens(
            vnsAmountWithDecimals.toString()
        ).send({ from: accounts[0] });
        
        showTransactionStatus(`Success! TX Hash: ${result.transactionHash}`, "success");
        
    } catch (error) {
        console.error("Purchase error:", error);
        showTransactionStatus(`Error: ${error.message}`, "error");
    }
}

// Other helper functions (updateUI, calculateUSDTRequired, showTransactionStatus etc.)
// ... (keep all your existing helper functions)

// Copy to clipboard function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = element.nextElementSibling;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 2000);
    });
}
