const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');
const wrapper = document.querySelector('.wrapper');
const closeIcon = document.querySelector('.icon-close');
const selection = document.getElementById('sorting');
const field = document.querySelector('.musthave__grid');
const cards = Array.from(document.querySelectorAll('.musthave__card'));
const filterItems = document.querySelectorAll('.musthave__nav li');
const sortingSelect = document.getElementById('sorting');
const musthaveGrid = document.querySelector('.musthave__grid');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.style.display = 'block';
    document.querySelector('.sign-in').style.display = 'block';
    document.querySelector('.sign-up').style.display = 'none';
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.style.display = 'block';
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'block';
});

signUpLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'block';
});

signInLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.sign-in').style.display = 'block';
    document.querySelector('.sign-up').style.display = 'none';
});

closeIcon.addEventListener('click', function() {
    wrapper.style.display = 'none';
    wrapper.classList.remove('active');
});

selection.onchange = sortingValue;

function sortingValue() {
let sortLi;
if (this.value === 'Default') {
sortLi = cards.sort((a, b) => {
return a.textContent.localeCompare(b.textContent);
});
} else if (this.value === 'LowToHigh') {
sortLi = cards.sort((a, b) => {
let priceA = parseFloat(a.querySelector('p').textContent.replace(/[^\d.]/g, ''));
let priceB = parseFloat(b.querySelector('p').textContent.replace(/[^\d.]/g, ''));
return priceA - priceB;
});
} else if (this.value === 'HighToLow') {
sortLi = cards.sort((a, b) => {
let priceA = parseFloat(a.querySelector('p').textContent.replace(/[^\d.]/g, ''));
let priceB = parseFloat(b.querySelector('p').textContent.replace(/[^\d.]/g, ''));
return priceB - priceA;
});
}
field.innerHTML = '';
sortLi.forEach(card => {
field.appendChild(card);
});
}

filterItems.forEach(item => {
    item.addEventListener('click', function() {
        filterItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-category');

        cards.forEach(card => {
            if (category === 'ALL' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});