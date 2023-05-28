const modal = document.querySelector('.account-modal');
const account = document.querySelector('#account');
const closeBtn = document.querySelector('.close-icon');

const showAccount = () =>{
    modal.classList.toggle('show-account');
}
const close = () =>{
    modal.classList.remove('show-account');
}

account.addEventListener('click',showAccount);
