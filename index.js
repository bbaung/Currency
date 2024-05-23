function convertCurrencyBm2u(mmkValue) {
    // Replace with a function to get the actual exchange rate (e.g., fetch from an API)
    const exchangeRate = 0.0003246; // Placeholder for a realistic rate
  
    // Error handling for non-numeric input
    if (isNaN(mmkValue)) {
      alert("Please enter a valid number for MMK amount.");
      return;
    }
  
    const usdValue = mmkValue * exchangeRate;
    document.getElementById("bu").value = usdValue.toFixed(2); // Format to 2 decimal places
  }

  function convertCurrencyBu2m(usdValue) {
    // Replace with a function to get the actual exchange rate (e.g., fetch from an API)
    const exchangeRate = 1 / 0.0003246; // Conversion factor for USD to MMK (assuming the provided rate is for MMK to USD)
  
    // Error handling for non-numeric input
    if (isNaN(usdValue)) {
      alert("Please enter a valid number for USD amount.");
      return;
    }
  
    const mmkValue = usdValue * exchangeRate;
    document.getElementById("bm").value = parseInt(mmkValue.toFixed(2)); // Format to 2 decimal places
  }

  function convertCurrencySm2u(mmkValue) {
    // Replace with a function to get the actual exchange rate (e.g., fetch from an API)
    const exchangeRate = 0.0003225; // Placeholder for a realistic rate
  
    // Error handling for non-numeric input
    if (isNaN(mmkValue)) {
      alert("Please enter a valid number for MMK amount.");
      return;
    }
  
    const usdValue = mmkValue * exchangeRate;
    document.getElementById("su").value = usdValue.toFixed(2); // Format to 2 decimal places
  }

  function convertCurrencySu2m(usdValue) {
    // Replace with a function to get the actual exchange rate (e.g., fetch from an API)
    const exchangeRate = 1 / 0.0003225; // Conversion factor for USD to MMK (assuming the provided rate is for MMK to USD)
  
    // Error handling for non-numeric input
    if (isNaN(usdValue)) {
      alert("Please enter a valid number for USD amount.");
      return;
    }
  
    const mmkValue = usdValue * exchangeRate;
    document.getElementById("sm").value = parseInt(mmkValue.toFixed(2)); // Format to 2 decimal places
  }