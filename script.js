// Contract ABIs (same as before)
const presaleABI = [{"inputs":[{"internalType":"address","name":"_vnsToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_paymentReceiver","type":"address"},{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_minPurchase","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnsAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymentReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerVNS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"}],"name":"setMinPurchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setPaymentReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"setVnsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]; // आपका मूल ABI कोड यहाँ रहेगा
const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]; // आपका मूल ABI कोड यहाँ रहेगा
const vnsABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // आपका मूल ABI कोड यहाँ रहेगा

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
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
            
            window.ethereum.on('disconnect', () => {
                accounts = [];
                updateWalletDisplay();
            });
            
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                updateWalletDisplay();
                loadContractData();
            });
            
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
            
            showNotification("वॉलेट सफलतापूर्वक कनेक्ट हुआ", "success");
        } catch (error) {
            console.error("वॉलेट एक्सेस में त्रुटि:", error);
            showNotification("कृपया वॉलेट कनेक्ट करें", "error");
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        accounts = await web3.eth.getAccounts();
        updateWalletDisplay();
    } else {
        showNotification("कृपया MetaMask इंस्टॉल करें", "error");
    }
}

async function initContracts() {
    if (!web3) return;

    try {
        presaleContract = new web3.eth.Contract(presaleABI, config.presaleAddress);
        usdtContract = new web3.eth.Contract(usdtABI, config.usdtAddress);
        vnsContract = new web3.eth.Contract(vnsABI, config.vnsAddress);

        vnsDecimals = await vnsContract.methods.decimals().call();
        usdtDecimals = await usdtContract.methods.decimals().call();
    } catch (error) {
        console.error("कॉन्ट्रैक्ट इनिशियलाइजेशन में त्रुटि:", error);
        showNotification("कॉन्ट्रैक्ट से कनेक्ट नहीं हो पाया", "error");
    }
}

async function loadContractData() {
    if (!presaleContract || !vnsContract) return;

    try {
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        document.getElementById('vnsContract').textContent = vnsAddress;
        document.getElementById('presaleContract').textContent = config.presaleAddress;
        
        const price = await presaleContract.methods.pricePerVNS().call();
        document.getElementById('currentPrice').textContent = web3.utils.fromWei(price, 'ether');
        
        const sellerWallet = await presaleContract.methods.sellerWallet().call();
        const availableTokens = await vnsContract.methods.balanceOf(sellerWallet).call();
        document.getElementById('availableTokens').textContent = formatTokenAmount(availableTokens, vnsDecimals);
        
        const minPurchase = await presaleContract.methods.minPurchase().call();
        document.getElementById('minPurchase').textContent = formatTokenAmount(minPurchase, vnsDecimals);
        
        const isPaused = await presaleContract.methods.isPaused().call();
        document.getElementById('contractStatus').textContent = isPaused ? "रोका हुआ" : "चालू";
        
    } catch (error) {
        console.error("डेटा लोड करने में त्रुटि:", error);
        showNotification("कॉन्ट्रैक्ट डेटा लोड नहीं हो पाया", "error");
    }
}

function setupEventListeners() {
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('copyPresaleContract').addEventListener('click', () => copyToClipboard(config.presaleAddress));
    document.getElementById('copyVnsContract').addEventListener('click', async () => {
        const vnsAddress = await presaleContract.methods.vnsToken().call();
        copyToClipboard(vnsAddress);
    });
    document.getElementById('vnsAmount').addEventListener('input', calculateUsdtCost);
    document.getElementById('buyWithVns').addEventListener('click', buyVnsTokens);
    document.getElementById('cancelApprove').addEventListener('click', () => hideModal('approveModal'));
    document.getElementById('cancelBuy').addEventListener('click', () => hideModal('buyModal'));
    document.getElementById('approveBtn').addEventListener('click', approveUsdt);
    document.getElementById('confirmBuyBtn').addEventListener('click', executeBuy);
}

function formatTokenAmount(amount, decimals) {
    return (web3.utils.fromWei(amount.toString(), 'ether') / (10 ** (18 - decimals))).toFixed(2);
}

async function connectWallet() {
    try {
        if (window.ethereum) {
            document.getElementById('connectWallet').disabled = true;
            document.getElementById('connectWallet').textContent = "कनेक्ट हो रहा है...";
            
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateWalletDisplay();
            loadContractData();
            
            showNotification("वॉलेट सफलतापूर्वक कनेक्ट हुआ", "success");
        } else {
            showNotification("कृपया MetaMask इंस्टॉल करें", "error");
        }
    } catch (error) {
        console.error("वॉलेट कनेक्शन त्रुटि:", error);
        showNotification("वॉलेट कनेक्ट नहीं हो पाया: " + error.message, "error");
        document.getElementById('connectWallet').disabled = false;
        document.getElementById('connectWallet').textContent = "वॉलेट कनेक्ट करें";
    }
}

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

async function buyVnsTokens() {
    if (!accounts || accounts.length === 0) {
        showNotification("कृपया पहले वॉलेट कनेक्ट करें", "error");
        return;
    }

    const vnsAmountInput = document.getElementById('vnsAmount').value;
    if (!vnsAmountInput || isNaN(vnsAmountInput) || parseFloat(vnsAmountInput) <= 0) {
        showNotification("कृपया सही VNS मात्रा डालें", "error");
        return;
    }

    try {
        document.getElementById('buyWithVns').disabled = true;
        document.getElementById('buyWithVns').textContent = "प्रोसेसिंग...";
        
        const vnsAmount = web3.utils.toWei(vnsAmountInput, 'ether');
        const vnsAmountWithDecimals = BigInt(vnsAmount) * (10n ** BigInt(18 - vnsDecimals));
        
        const isPaused = await presaleContract.methods.isPaused().call();
        if (isPaused) {
            showNotification("प्रीसेल अभी रोका हुआ है", "error");
            resetBuyButton();
            return;
        }
        
        const minPurchase = await presaleContract.methods.minPurchase().call();
        if (vnsAmountWithDecimals < BigInt(minPurchase)) {
            showNotification(`न्यूनतम खरीद ${formatTokenAmount(minPurchase, vnsDecimals)} VNS है`, "error");
            resetBuyButton();
            return;
        }
        
        const pricePerVNS = await presaleContract.methods.pricePerVNS().call();
        const requiredUsdt = BigInt(pricePerVNS) * vnsAmountWithDecimals / (10n ** BigInt(vnsDecimals));
        
        const usdtBalance = await usdtContract.methods.balanceOf(accounts[0]).call();
        if (BigInt(usdtBalance) < requiredUsdt) {
            showNotification("आपके पास पर्याप्त USDT नहीं है", "error");
            resetBuyButton();
            return;
        }
        
        const allowance = await usdtContract.methods.allowance(accounts[0], config.presaleAddress).call();
        
        if (BigInt(allowance) < requiredUsdt) {
            document.getElementById('approveAmount').textContent = formatTokenAmount(requiredUsdt.toString(), usdtDecimals);
            showModal('approveModal');
            
            window.pendingPurchase = {
                vnsAmount: vnsAmountInput,
                vnsAmountWei: vnsAmountWithDecimals.toString(),
                pricePerVNS: pricePerVNS
            };
        } else {
            showBuyModal(vnsAmountInput, pricePerVNS);
        }
    } catch (error) {
        console.error("खरीदने में त्रुटि:", error);
        showNotification("खरीद प्रक्रिया में त्रुटि: " + error.message, "error");
        resetBuyButton();
    }
}

function showBuyModal(vnsAmountInput, pricePerVNS) {
    document.getElementById('confirmVnsAmount').textContent = vnsAmountInput;
    document.getElementById('confirmUsdtAmount').textContent = 
        (parseFloat(vnsAmountInput) * parseFloat(web3.utils.fromWei(pricePerVNS, 'ether'))).toFixed(6);
    showModal('buyModal');
}

async function approveUsdt() {
    try {
        document.getElementById('approveBtn').disabled = true;
        document.getElementById('approveBtn').textContent = "अनुमति दी जा रही है...";
        
        if (!window.pendingPurchase) {
            throw new Error("खरीद डेटा नहीं मिला");
        }
        
        const requiredUsdt = BigInt(window.pendingPurchase.pricePerVNS) * 
                           BigInt(window.pendingPurchase.vnsAmountWei) / 
                           (10n ** BigInt(vnsDecimals));
        
        showNotification("USDT अनुमति दी जा रही है...", "info");
        
        const receipt = await usdtContract.methods.approve(config.presaleAddress, requiredUsdt.toString())
            .send({ from: accounts[0] });
            
        if (!receipt.status) {
            throw new Error("अनुमति लेन-देन विफल");
        }
            
        hideModal('approveModal');
        showNotification("USDT अनुमति सफलतापूर्वक दी गई", "success");
        
        showBuyModal(window.pendingPurchase.vnsAmount, window.pendingPurchase.pricePerVNS);
    } catch (error) {
        console.error("अनुमति त्रुटि:", error);
        showNotification("अनुमति विफल: " + error.message, "error");
    } finally {
        document.getElementById('approveBtn').disabled = false;
        document.getElementById('approveBtn').textContent = "USDT अनुमति दें";
    }
}

async function executeBuy() {
    try {
        document.getElementById('confirmBuyBtn').disabled = true;
        document.getElementById('confirmBuyBtn').textContent = "प्रोसेसिंग...";
        
        if (!window.pendingPurchase) {
            throw new Error("खरीद डेटा नहीं मिला");
        }
        
        showNotification("खरीद लेन-देन प्रोसेस हो रहा है...", "info");
        
        const receipt = await presaleContract.methods.buyTokens(window.pendingPurchase.vnsAmountWei)
            .send({ from: accounts[0] });
            
        if (!receipt.status) {
            throw new Error("लेन-देन वापस लिया गया");
        }
        
        hideModal('buyModal');
        showNotification("टोकन सफलतापूर्वक खरीदे गए!", "success");
        
        loadContractData();
        document.getElementById('vnsAmount').value = '';
        document.getElementById('usdtCost').textContent = '0.00';
        delete window.pendingPurchase;
    } catch (error) {
        console.error("लेन-देन त्रुटि:", error);
        
        if (error.message.includes("revert") || error.receipt?.status === false) {
            showNotification("लेन-देन विफल: कॉन्ट्रैक्ट ने लेन-देन वापस ले लिया। संभावित कारण: अपर्याप्त कॉन्ट्रैक्ट बैलेंस, अमान्य पैरामीटर, या कॉन्ट्रैक्ट प्रतिबंध।", "error");
        } else {
            showNotification("लेन-देन विफल: " + error.message, "error");
        }
    } finally {
        document.getElementById('confirmBuyBtn').disabled = false;
        document.getElementById('confirmBuyBtn').textContent = "खरीद की पुष्टि करें";
    }
}

function resetBuyButton() {
    const buyButton = document.getElementById('buyWithVns');
    if(buyButton) {
        buyButton.disabled = false;
        buyButton.textContent = "VNS टोकन खरीदें";
    }
}

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showNotification("कॉपी किया गया: " + text.substring(0, 10) + "...", "success");
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
        walletDiv.textContent = `कनेक्टेड: ${shortAddress}`;
        walletBtn.textContent = "कनेक्टेड";
        walletBtn.disabled = true;
    } else {
        walletDiv.textContent = '';
        walletBtn.textContent = "वॉलेट कनेक्ट करें";
        walletBtn.disabled = false;
    }
}
