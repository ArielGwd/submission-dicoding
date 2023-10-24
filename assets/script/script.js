// Bagian Menu
const menu = document.querySelector('.nav-responsive input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


// like like like ya hehehe :v
const likeCuy = document.querySelector('#emoji');
likeCuy.addEventListener('click', function (event) {
    document.querySelector('#nambah').innerText++;
});