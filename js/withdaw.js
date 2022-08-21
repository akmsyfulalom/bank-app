/*
1. add event handler with the withdaw button
2. get the withdaw from the withdaw ammount field 
2.5 also make sure to convart the input  a number by using parsflot 
3. gey previous  withdaw total 

4. calcilulate total withdaw amount 
4.5 total withdaw amount 

5 get the previous balance total    
    // step 7 clear foeld 
    

*/
// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step 2
    const withdawField = document.getElementById('withdraw-field');
    const NewWithdawAmountString = withdawField.value;
    const newWithdawAmount = parseFloat(NewWithdawAmountString);
    console.log(newWithdawAmount);

    // step 3
    const withdawTotalElement = document.getElementById('total-withdaw');
    const previosWithdawTotalString = withdawTotalElement.innerText;
    const previosWithdawTotal = parseFloat(previosWithdawTotalString);
    console.log(previosWithdawTotal)



    // step 7 clear foeld 
    withdawField.value = '';

    // step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newWithdawAmount > previousBalanceTotal) {
        alert('তোমার বাপ এর ব্যাংকে  তো টাকা নাই তুমি আগে এখানে টাকা রাখো তারপর তুমি এত টাকা তুলো')
        return;
    }
    // step 4
    const currentWithdawTotal = previosWithdawTotal + newWithdawAmount;
    withdawTotalElement.innerText = currentWithdawTotal;
    //  steo 6
    const newBalanceTotal = previousBalanceTotal - newWithdawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})