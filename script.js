// Contract Addresses
const CONTRACTS = {
  presale: {
    address: "0x1d696372c2311607f56ea55294B54545160d451b0",
    decimals: 8 // VNS decimals
  },
  usdt: {
    address: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
    decimals: 18 // USDT decimals
  }
};

// Contract ABIs
const ABIS = {
  presale: [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
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
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minPurchase",
      "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  usdt: [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
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
    },
    {
      "constant": true,
      "inputs": [
        {"name": "_owner", "type": "address"},
        {"name": "_spender", "type": "address"}
      ],
      "name": "allowance",
      "outputs": [{"name": "", "type": "uint256"}],
      "type": "function"
    }
  ]
};

// App State
let state = {
  web3: null,
  accounts: [],
  contracts: {
    presale: null,
    usdt: null
  },
  isWalletConnected: false,
  currentNetwork: null,
  tokenPrice: 0.9, // Default, will be updated
  minPurchase: 10  // Default, will be updated
};

// DOM Elements
const elements = {
  connectWallet: document.getElementById('connectWallet'),
  walletInfo: document.getElementById('walletInfo'),
  walletAddress: document.getElementById('walletAddress'),
  networkName: document.getElementById('networkName'),
  availableTokens: document.getElementById('availableTokens'),
  usdtBalance: document.getElementById('usdtBalance'),
  tokenPrice: document.getElementById('tokenPrice'),
  minPurchase: document.getElementById('minPurchase'),
  vnsAmount: document.getElementById('vnsAmount'),
  usdtCost: document.getElementById('usdtCost'),
  approveBtn: document.getElementById('approveBtn'),
  buyBtn: document.getElementById('buyBtn'),
  errorMessage: document.getElementById('errorMessage'),
  loadingMessage: document.getElementById('loadingMessage'),
  successMessage: document.getElementById('successMessage')
};

// Initialize the application
async function initApp() {
  setupEventListeners();
  
  // Check if Web3 is injected (MetaMask etc)
  if (window.ethereum) {
    try {
      state.web3 = new Web3(window.ethereum);
      
      // Handle chain changed
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      });
      
      // Handle accounts changed
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          handleDisconnect();
        } else {
          state.accounts = accounts;
          updateWalletInfo();
          updateUI();
        }
      });
      
      // Handle disconnect
      window.ethereum.on('disconnect', (error) => {
        handleDisconnect();
      });
      
      // Try to connect automatically if previously connected
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        await handleConnect(accounts);
      }
      
    } catch (error) {
      showError('Failed to initialize Web3: ' + error.message);
    }
  } else {
    showError('Please install a Web3 wallet like MetaMask');
  }
  
  // Initialize VNS amount calculation
  updateUsdtCost();
}

// Setup all event listeners
function setupEventListeners() {
  elements.connectWallet.addEventListener('click', connectWallet);
  elements.vnsAmount.addEventListener('input', updateUsdtCost);
  elements.approveBtn.addEventListener('click', approveUSDT);
  elements.buyBtn.addEventListener('click', buyVNS);
}

// Connect wallet handler
async function connectWallet() {
  try {
    if (!window.ethereum) {
      showError('Please install MetaMask or another Web3 wallet');
      return;
    }
    
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    await handleConnect(accounts);
    
  } catch (error) {
    if (error.code === 4001) {
      showError('Please connect your wallet to continue');
    } else {
      showError('Wallet connection failed: ' + error.message);
    }
  }
}

// Handle successful wallet connection
async function handleConnect(accounts) {
  state.accounts = accounts;
  state.isWalletConnected = true;
  
  // Get network ID
  const chainId = await state.web3.eth.getChainId();
  state.currentNetwork = getNetworkName(chainId);
  
  // Initialize contracts
  await initContracts();
  
  // Update UI
  updateWalletInfo();
  updateUI();
  
  // Load contract data
  await loadContractData();
}

// Handle wallet disconnect
function handleDisconnect() {
  state.isWalletConnected = false;
  state.accounts = [];
  elements.walletInfo.style.display = 'none';
  elements.connectWallet.style.display = 'block';
  disableButtons();
  showError('Wallet disconnected');
}

// Initialize smart contracts
async function initContracts() {
  try {
    state.contracts.presale = new state.web3.eth.Contract(
      ABIS.presale,
      CONTRACTS.presale.address
    );
    
    state.contracts.usdt = new state.web3.eth.Contract(
      ABIS.usdt,
      CONTRACTS.usdt.address
    );
    
  } catch (error) {
    showError('Failed to initialize contracts: ' + error.message);
  }
}

// Load data from contracts
async function loadContractData() {
  try {
    // Get token price
    const priceWei = await state.contracts.presale.methods.tokenPrice().call();
    state.tokenPrice = formatUnits(priceWei, CONTRACTS.usdt.decimals);
    elements.tokenPrice.textContent = state.tokenPrice;
    
    // Get minimum purchase
    const minPurchaseWei = await state.contracts.presale.methods.minPurchase().call();
    state.minPurchase = formatUnits(minPurchaseWei, CONTRACTS.presale.decimals);
    elements.minPurchase.textContent = state.minPurchase;
    elements.vnsAmount.min = state.minPurchase;
    
    // Update available tokens and balances
    await updateBalances();
    
  } catch (error) {
    showError('Failed to load contract data: ' + error.message);
  }
}

// Update token balances
async function updateBalances() {
  if (!state.isWalletConnected) return;
  
  try {
    // Get available tokens
    const availableTokensWei = await state.contracts.presale.methods.getAvailableTokens().call();
    const availableTokens = formatUnits(availableTokensWei, CONTRACTS.presale.decimals);
    elements.availableTokens.textContent = availableTokens.toFixed(2);
    
    // Get USDT balance
    const usdtBalanceWei = await state.contracts.usdt.methods.balanceOf(state.accounts[0]).call();
    const usdtBalance = formatUnits(usdtBalanceWei, CONTRACTS.usdt.decimals);
    elements.usdtBalance.textContent = usdtBalance.toFixed(2);
    
  } catch (error) {
    showError('Failed to update balances: ' + error.message);
  }
}

// Update USDT cost based on VNS amount
function updateUsdtCost() {
  try {
    const vnsAmount = parseFloat(elements.vnsAmount.value);
    const cost = vnsAmount * state.tokenPrice;
    elements.usdtCost.textContent = cost.toFixed(6);
  } catch (error) {
    showError('Invalid amount entered');
  }
}

// Approve USDT for spending
async function approveUSDT() {
  if (!state.isWalletConnected) {
    showError('Please connect your wallet first');
    return;
  }
  
  try {
    const vnsAmount = parseFloat(elements.vnsAmount.value);
    if (isNaN(vnsAmount) {
      showError('Please enter a valid VNS amount');
      return;
    }
    
    const usdtAmount = vnsAmount * state.tokenPrice;
    const usdtAmountWei = parseUnits(usdtAmount, CONTRACTS.usdt.decimals);
    
    showLoading(true);
    
    // Send approval transaction
    const tx = await state.contracts.usdt.methods.approve(
      CONTRACTS.presale.address,
      usdtAmountWei.toString()
    ).send({ from: state.accounts[0] });
    
    if (tx.status) {
      showSuccess('USDT approved successfully!');
      // Check allowance
      await checkAllowance();
    } else {
      throw new Error('Approval transaction failed');
    }
    
  } catch (error) {
    showError('Approval failed: ' + (error.message || error));
  } finally {
    showLoading(false);
  }
}

// Check USDT allowance
async function checkAllowance() {
  try {
    const allowanceWei = await state.contracts.usdt.methods.allowance(
      state.accounts[0],
      CONTRACTS.presale.address
    ).call();
    
    const allowance = formatUnits(allowanceWei, CONTRACTS.usdt.decimals);
    return parseFloat(allowance);
    
  } catch (error) {
    showError('Failed to check allowance: ' + error.message);
    return 0;
  }
}

// Buy VNS tokens
async function buyVNS() {
  if (!state.isWalletConnected) {
    showError('Please connect your wallet first');
    return;
  }
  
  try {
    const vnsAmount = parseFloat(elements.vnsAmount.value);
    if (isNaN(vnsAmount) || vnsAmount < state.minPurchase) {
      showError(`Minimum purchase is ${state.minPurchase} VNS`);
      return;
    }
    
    // Check allowance first
    const allowance = await checkAllowance();
    const requiredAllowance = vnsAmount * state.tokenPrice;
    
    if (allowance < requiredAllowance) {
      showError('Please approve sufficient USDT first');
      return;
    }
    
    showLoading(true);
    
    const vnsAmountWei = parseUnits(vnsAmount, CONTRACTS.presale.decimals);
    
    // Send buy transaction
    const tx = await state.contracts.presale.methods.buyTokens(
      vnsAmountWei.toString()
    ).send({ from: state.accounts[0] });
    
    if (tx.status) {
      showSuccess('VNS tokens purchased successfully!');
      // Update balances
      await updateBalances();
    } else {
      throw new Error('Purchase transaction failed');
    }
    
  } catch (error) {
    showError('Purchase failed: ' + (error.message || error));
  } finally {
    showLoading(false);
  }
}

// Update wallet info in UI
function updateWalletInfo() {
  if (state.isWalletConnected && state.accounts.length > 0) {
    elements.connectWallet.style.display = 'none';
    elements.walletInfo.style.display = 'block';
    
    const shortAddress = `${state.accounts[0].substring(0, 6)}...${state.accounts[0].substring(38)}`;
    elements.walletAddress.textContent = shortAddress;
    elements.walletAddress.setAttribute('data-tooltip', state.accounts[0]);
    elements.networkName.textContent = state.currentNetwork;
  }
}

// Update UI based on connection state
function updateUI() {
  if (state.isWalletConnected) {
    elements.approveBtn.disabled = false;
    elements.buyBtn.disabled = false;
  } else {
    disableButtons();
  }
}

// Disable action buttons
function disableButtons() {
  elements.approveBtn.disabled = true;
  elements.buyBtn.disabled = true;
}

// Show loading state
function showLoading(show) {
  elements.loadingMessage.style.display = show ? 'flex' : 'none';
  elements.approveBtn.disabled = show;
  elements.buyBtn.disabled = show;
}

// Show success message
function showSuccess(message) {
  elements.successMessage.textContent = message;
  elements.successMessage.style.display = 'block';
  elements.errorMessage.style.display = 'none';
  
  setTimeout(() => {
    elements.successMessage.style.display = 'none';
  }, 5000);
}

// Show error message
function showError(message) {
  elements.errorMessage.textContent = message;
  elements.errorMessage.style.display = 'block';
  elements.successMessage.style.display = 'none';
  
  setTimeout(() => {
    elements.errorMessage.style.display = 'none';
  }, 5000);
}

// Helper: Format units from wei
function formatUnits(value, decimals) {
  return value / Math.pow(10, decimals);
}

// Helper: Parse units to wei
function parseUnits(value, decimals) {
  return BigInt(Math.round(value * Math.pow(10, decimals)));
}

// Helper: Get network name from chain ID
function getNetworkName(chainId) {
  const networks = {
    1: 'Ethereum Mainnet',
    5: 'Goerli Testnet',
    56: 'Binance Smart Chain',
    97: 'BSC Testnet',
    137: 'Polygon Mainnet',
    80001: 'Mumbai Testnet'
  };
  return networks[chainId] || `Unknown Network (${chainId})`;
}

// Helper: Copy to clipboard
function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showSuccess('Copied to clipboard!');
  }).catch(err => {
    showError('Failed to copy: ' + err);
  });
}

// Initialize the app when page loads
window.addEventListener('load', initApp);
