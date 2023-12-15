
document.addEventListener('DOMContentLoaded', function (){
        
const signUpForm = document.querySelector('.form-box form');
const signInBtn = document.getElementById('Signinbtn');
const signUpBtn = document.getElementById('Signupbtn');


signInBtn.addEventListener('click', function () {
signUpForm.style.display = 'none';
});

signUpBtn.addEventListener('click', function () {
signUpForm.style.display = 'block';
});
});
