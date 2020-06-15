// Variables from the HTML page:
const num_ppl = document.querySelector('#num_ppl');
const split_even_box = document.querySelector('#split_even_box');
const split_even = document.querySelector('#split_even');
const bill = document.querySelector('#bill');
const tip_perc = document.querySelector('#tip_perc');

const tip = document.querySelector('#tip');
const total = document.querySelector('#total');
const pp_box = document.querySelector('#pp_box');
const tip_pp = document.querySelector('#tip_pp');
const total_pp = document.querySelector('#total_pp');

const short_box = document.querySelector('#short_box');
const short = document.querySelector('#short');

let tip_display;
let total_display;
let tip_pp_display;
let total_pp_display;

const moneyDisplay = () => {
    if (parseInt(num_ppl.value) > 1) {
        split_even_box.className = '';
        pp_box.className = '';
    } else {
        split_even_box.className = 'nope';
        pp_box.className = 'nope';
    }

    if (tip_perc.value !== '' && bill.value !== '') {
        tip_display = parseFloat(bill.value) * parseFloat(tip_perc.value) / 100;
        total_display = tip_display + parseFloat(bill.value);
        tip.textContent = 'R' + tip_display.toFixed(2);
        total.textContent = 'R' + total_display.toFixed(2);

        if (split_even.checked) {
            tip_pp_display = tip_display / parseInt(num_ppl.value);
            total_pp_display = total_display / parseInt(num_ppl.value);
            tip_pp.textContent = 'R' + tip_pp_display.toFixed(2);
            total_pp.textContent = 'R' + total_pp_display.toFixed(2);

            let short_display = total_display.toFixed(2) - total_pp_display.toFixed(2) * parseInt(num_ppl.value);
            if (short_display > 0) {
                short_box.className = '';
                short.textContent = 'R' + short_display.toFixed(2);
            } else if (short_display < 0) {
                short_box.className = 'nope';
                total.textContent = `R${total_display.toFixed(2) * 1 + short_display.toFixed(2) * -1}`;
            } else {
                short_box.className = 'nope';
            }
        }
    } else {
        tip.textContent = '';
        total.textContent = '';

        tip_pp.textContent = '';
        total_pp.textContent = '';
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
const intRegex = /^[1-9]*$/;

split_even.addEventListener('change', moneyDisplay)

setInputFilter(bill, function(value) {
    return floatRegex.test(value);
});

setInputFilter(num_ppl, function(value) {
    return intRegex.test(value);
});

setInputFilter(tip_perc, function(value) {
    return floatRegex.test(value);
});