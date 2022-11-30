// Get Item price value
function getTextElementValue(elementId) {
    const TextElement = document.getElementById(elementId);
    const TextElementValue = parseInt(TextElement.innerText);
    return TextElementValue;
}


// Set subtotal value
function setTextElementValue(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// Calculate Subtotal, Tax, Total
function calculateSubtotal() {
    // Get Item Price
    const getFirstItemPrice = getTextElementValue('firstItemPrice');
    const getSecondItemPrice = getTextElementValue('secondItemPrice');

    // Subtotal
    const totalSubtotalPrice = getFirstItemPrice + getSecondItemPrice;
    setTextElementValue('subTotal', totalSubtotalPrice);

    // Tax
    const totalTaxPrice = (totalSubtotalPrice * 0.1).toFixed(2);
    const totalTaxPriceNumber = parseFloat(totalTaxPrice);
    setTextElementValue('tax', totalTaxPrice);

    // Total
    const totalPrice = totalSubtotalPrice + totalTaxPriceNumber;
    setTextElementValue('total', totalPrice);
}
