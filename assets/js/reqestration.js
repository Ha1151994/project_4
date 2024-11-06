const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');

});
signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');

});



//sign in
let Username = document.querySelector("#username")
let Password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in_btn")
let getUsername = localStorage.getItem("Username")
let getPassword = localStorage.getItem("Password")
loginBtn.addEventListener("click", function (e) {
    if (Username.value === "" || Password.value === "") {
        alert("please fail data")
    } else {
        if (getUsername && getUsername.trim() === Username.value && getPassword && getPassword.trim() === Password.value) {
            window.location = "index.html";
        } else {
            alert("username or password is wrong ")

        }
    }
})

//sign up
let Username2 = document.querySelector("#username2")
let Password2 = document.querySelector("#password2")
let Email = document.querySelector("#email")
let registerBtn = document.querySelector("#sign_up_btn")
registerBtn.addEventListener("click", function (e) {
    if (Username2.value === "" || Password2.value === "" || Email.value === "") {
        alert("please fail data")
    } else if (Username2.value.length < 5 || Password2.length < 5 || Email.length < 5) {
			alert("username and password must be more than 5 letters")
    } else {
            window.location = "index.html";
    }
})