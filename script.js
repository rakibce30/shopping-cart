// Phone Number count
function updatePhoneNumber(isIncrease) {
    let phoneNumberField = document.getElementById('firstItemElement');
    let previousPhoneNumber = parseInt(phoneNumberField.value);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

// Phone price update
function updatePhonePrice(newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 1219;
    const totalPhonePriceElement = document.getElementById('firstItemPrice');
    totalPhonePriceElement.innerText = totalPhonePrice;
}

// For phone item increase
document.getElementById('firstItemIncrease').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
    calculateSubtotal();
})

// For phone item decrease
document.getElementById('firstItemDecrease').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
    calculateSubtotal();
})

// ----------------------------------------------------------------------------------------------------

// Second Item count
function updateSecondItem(isIncrease) {
    let secondItemField = document.getElementById('secondItemElement');
    let previousSecondItem = parseInt(secondItemField.value);

    let newSecondItem;

    if (isIncrease) {
        newSecondItem = previousSecondItem + 1;
    } else {
        newSecondItem = previousSecondItem - 1;
    }

    secondItemField.value = newSecondItem;
    return newSecondItem;
}

// Second Item price update
function updateSecondItemPrice(newSecondItem){
    const totalSecondItemPrice = newSecondItem * 59;
    const totalSecondItemElement = document.getElementById('secondItemPrice');
    totalSecondItemElement.innerText = totalSecondItemPrice;
}

// For Second item increase
document.getElementById('secondItemIncrease').addEventListener('click', function () {
    const newSecondItem = updateSecondItem(true);
    updateSecondItemPrice(newSecondItem);
    calculateSubtotal();
})

// For Second item decrease
document.getElementById('secondItemDecrease').addEventListener('click', function () {
    const newSecondItem = updateSecondItem(false);
    updateSecondItemPrice(newSecondItem);
    calculateSubtotal();
})

