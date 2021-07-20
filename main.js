const modal = document.querySelector('.modal')
const authForm = document.querySelector('.js-auth-form')
const loginForm = document.querySelector('.js-login-form')
const authFormsBack = document.querySelectorAll('.js-auth-form-back')

hideForm = ()=>{
    modal.classList.remove('open')
}

authForm.addEventListener('click',  ()=>{
    modal.classList.add('open')
    document.querySelector('.js-login').style.display="none";
    document.querySelector('.js-registration').style.display="block";

})
loginForm.addEventListener('click',  ()=>{
    modal.classList.add('open')
    document.querySelector('.js-registration').style.display="none";
    document.querySelector('.js-login').style.display="block";
    
})

for(const authFormBack of authFormsBack){
    authFormBack.addEventListener('click', hideForm)
}