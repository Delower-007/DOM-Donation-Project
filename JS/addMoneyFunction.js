function getInputFieldValueByID(id) {
    const inputValue = document.getElementById(id).value;
    const inputMoneyValue = parseFloat(inputValue);
    return inputMoneyValue;
}

function getCardValueByID(id) {
    const cardValue = document.getElementById(id).innerText;
    const inputCardValue = parseFloat(cardValue);
    return inputCardValue;

}

function getMainValueByID(id) {
    const mainValue = document.getElementById(id).innerText;
    const mainBalance = parseFloat(mainValue);
    return mainBalance;
}

// -----------------------------------------
function showSectionId(id) {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-id').classList.add('hidden');
    document.getElementById('faq-section').classList.add('hidden');


    //show the section with the provided id as a parameter
    document.getElementById(id).classList.remove('hidden');
}

function showSectionId2() {
    document.getElementById('hide-all').classList.add('hidden');
}
function showMainSection() {
    document.getElementById('faq-section').classList.add('hidden');
    document.getElementById('hide-all').classList.remove('hidden');

}

