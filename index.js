const displayAmountTip = document.getElementById('display-amount-percent');
const displayAmountTotal = document.getElementById('display-amount-total');

const amountInput = document.getElementById('amount');
const peopleInput = document.getElementById('people');
const newAmount = document.getElementById('new-amount');

const reset = document.getElementById('reset');
reset.addEventListener('click', resetAll);

const btns = document.querySelectorAll('.flex-percenteges button');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let tipvalue = e.target.value;
    if (amountInput.value == '') return;
    if (peopleInput.value == '') {
      return (peopleInput.value = 1);
    }
    operation(
      parseFloat(amountInput.value),
      parseFloat(e.target.value),
      parseInt(peopleInput.value)
    );
  });
});

//Calculate Tip When User Give Custom Tip Percentage Input
newAmount.addEventListener('blur', (e) => {
  console.log(e.target.value);
  if (amountInput.value === '') {
    resetAll();
    return;
  }
  if (peopleInput.value === '') {
    peopleInput.value = 1;
  }
  operation(
    parseFloat(amountInput.value),
    parseFloat(e.target.value),
    parseInt(peopleInput.value)
  );
});

function operation(amountInput, tipvalue, peopleInput) {
  let tipAmount = (amountInput * (tipvalue / 100)) / peopleInput;
  tot_divide = (amountInput + tipAmount * peopleInput) / peopleInput;
  let tip = amountInput + peopleInput;
  displayAmountTip.innerHTML = tipAmount.toFixed(2);
  displayAmountTotal.innerText = tot_divide.toFixed(2);
}

function resetAll() {
  displayAmountTip.textContent = '0.00';
  displayAmountTotal.textContent = '0.00';
  amountInput.value = '';
  peopleInput.value = '';
  newAmount.value = '';
}
