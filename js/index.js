// step 1
document.getElementById('btn-submit').addEventListener('click', function () {

    //step 2 get the  email address inside the email input field   
    //  always remember to use .value to get txt from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //  step 3 get password 
    //    set id first html 
    //  get element 
    //  get the field .value 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    // step 4 varify user 

    if (email === 'akm@baap.com' && password === 'secret') {
        window.location.href = "bank.html"
    }

    else {
        alert('type your password')
    }

})