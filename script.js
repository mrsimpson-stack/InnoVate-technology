// Admin notification for withdrawals
function requestWithdrawal() {
  const amount = document.getElementById('withdraw-amount').value;
  const method = document.getElementById('withdraw-method').value;
  const phone = document.getElementById('withdraw-phone').value;
  
  // Send notification to admin
  const adminNotification = {
    user: currentUser.phone,
    amount: amount,
    method: method,
    phone: phone,
    timestamp: new Date().toISOString()
  };
  
  // In a real app, you would send this to your backend
  console.log("ADMIN ALERT:", adminNotification);
  alert("Withdrawal request submitted. Admin will process it shortly.");
  
  // Here you would typically send this to your server
  // fetch('/api/withdraw', { method: 'POST', body: JSON.stringify(adminNotification) });
}

// Handle deposit with screenshot
function submitDeposit() {
  const amount = document.getElementById('deposit-amount').value;
  const screenshot = document.getElementById('payment-screenshot').files[0];
  
  if (!amount || !screenshot) {
    alert("Please enter amount and upload payment screenshot");
    return;
  }
  
  // Process deposit - in a real app you would upload to server
  const depositData = {
    amount: amount,
    screenshot: screenshot.name,
    timestamp: new Date().toISOString()
  };
  
  alert("Deposit submitted for verification");
  console.log("Deposit data:", depositData);
}