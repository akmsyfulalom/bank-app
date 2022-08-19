// step 1 add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step 2 get the deposit amount from the input field 
    // for input field use .value to the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountSting = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountSting);
    // step 3 get the current deposit total
    //  for non input (element other then input , textarea ) use innertext to get the text

    const depositTotalElement = document.getElementById('total-deposit')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 4 add number to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    // step 5 balance current total amount 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    //  step 6 calculate curreny deposit total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    //  set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;
    // step 7 clear field 
    depositField.value = '';
})