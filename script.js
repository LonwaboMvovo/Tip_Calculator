// Variables from the HTML page:
const num_ppl = document.querySelector('#num_ppl');
const bill = document.querySelector('#bill');
const tip_perc = document.querySelector('#tip_perc');

const tip = document.querySelector('#tip');
const total = document.querySelector('#total');

const moneyDisplay = () => {
    if (tip_perc.value !== '' && bill.value !== '') {
        tip_display = bill.value * tip_perc.value / 100;
        total_display = tip_display + parseFloat(bill.value);
        tip.textContent = tip_display;
        total.textContent = total_display;
    }
    else if (bill.value !== '') {
        total_display = bill.value;
        tip.textContent = '';
        total.textContent = total_display;
    }
    else {
        tip.textContent = '';
        total.textContent = '';
    }
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                moneyDisplay()
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}


const floatRegex = /^-?\d*.?\d*$/;
const intRegex = /^[0-9]*$/;

setInputFilter(bill, function(value) {
    return floatRegex.test(value);
});

setInputFilter(num_ppl, function(value) {
    return intRegex.test(value);
});

setInputFilter(tip_perc, function(value) {
    return floatRegex.test(value);
});