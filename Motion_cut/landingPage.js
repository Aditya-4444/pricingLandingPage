        const currencyDropdown = document.getElementById('currencyDropdown');
        const basicPrice = document.getElementById('basicPrice');
        const advancePrice = document.getElementById('advancePrice');
        const proPrice = document.getElementById('proPrice');

        const discountToggle = document.getElementById('discountToggle');

        // Exchange rates
        const exchangeRates = {
            USD: 1,
            EUR: 0.85 ,
            INR: 80
        };
        const discountedPrices = {
            basic: 360,
            advance: 520,
            pro: 760
        };
        const monthlyPrices = {
            basic: 45,
            advance: 65,
            pro: 95
        };
        const currencyType = {
            USD: '$',
            EUR: '€',
            INR: '₹'
        };

        // Update prices based on selected currency
        function updatePrices() {
            const selectedCurrency = currencyDropdown.value;
            const applyDiscount = discountToggle.checked;
            basicPrice.textContent = `${((applyDiscount ? discountedPrices.basic : monthlyPrices.basic) * exchangeRates[selectedCurrency]).toFixed(2)} ${(currencyType[selectedCurrency])}`;
            advancePrice.textContent = `${((applyDiscount ? discountedPrices.advance : monthlyPrices.basic) * exchangeRates[selectedCurrency]).toFixed(2)} ${(currencyType[selectedCurrency])}`;
            proPrice.textContent = `${((applyDiscount ? discountedPrices.pro : monthlyPrices.basic) * exchangeRates[selectedCurrency]).toFixed(2)} ${(currencyType[selectedCurrency])}`;
        }

        currencyDropdown.addEventListener('change', updatePrices);
        discountToggle.addEventListener('change', updatePrices);

        updatePrices();
