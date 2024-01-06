const user_email = document.querySelector('.email-text');
const submit = document.querySelector('.updated-subs');
const usererror = document.querySelector('.email-error');
const stayupd = document.querySelector('.wrapper');
const scriber = document.querySelector('.updated-success');
const displayemail = document.querySelector('.email-insert');
const compsubs = document.querySelector('.updated-success-button');


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if(user_email.value == ""){
        usererror.innerHTML ="Valid email required.";
        user_email.setAttribute('data-error','true');
    }else{
        user_email.setAttribute('data-error','false');
        stayupd.setAttribute('data-hidden','true');
        scriber.setAttribute('data-hidden','false');
        usererror.innerHTML ="";
        displayemail.innerHTML = user_email.value;
    }
});

user_email.addEventListener('input',(e) => {
    user_email.setAttribute('data-error','false');
    usererror.innerHTML ="";
});

compsubs.addEventListener('click', (e) => {
    stayupd.setAttribute('data-hidden','false');
    scriber.setAttribute('data-hidden','true');
    user_email.value = "";
    usererror.innerHTML ="";
});