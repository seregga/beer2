import './styles.css'
import './img/863bdf70fcbc8e9cae9b1711537e73fe3d68fefe_full.jpg'
import './img/H244484bb65e5472cb6f35b59bedf4240w.jpg_640x640.webp'

const buttonBeerSelection = document.querySelector('.button-beer-selection');
let limiter = false;

buttonBeerSelection.addEventListener('click', () => {
    buttonBeerSelection.textContent = 'другое'
    getRandomBeer()
    if (!limiter) {
        getRandomUser();
        limiter = true;
    }

})

function getRandomBeer() {
    const result = document.querySelector('.result');

    fetch('https://random-data-api.com/api/beer/random_beer')
        .then(resp => resp.json())
        .then(data => {
            result.innerHTML = `
                <h3 class="result__title">Попробуй это :</h3>
                <ul class="result__list">
                <li class="result__item"><span class="result__name-color">Название:</span> ${data.name}</li>
                <li class="result__item"><span class="result__name-color">Бренд:</span> ${data.brand}</li>
                <li class="result__item"><span class="result__name-color">Алкоголь:</span> ${data.alcohol}</li>
                <li class="result__item"><span class="result__name-color">Blg:</span> ${data.blg}</li>
                <li class="result__item"><span class="result__name-color">Хмель:</span> ${data.hop}</li>
                <li class="result__item"><span class="result__name-color">Ibu:</span> ${data.ibu}</li>
                <li class="result__item"><span class="result__name-color">Солод:</span> ${data.malts}</li>
                <li class="result__item"><span class="result__name-color">Style:</span> ${data.style}</li>
                <li class="result__item"><span class="result__name-color">Yeast:</span> ${data.yeast}</li>
                </ul>
            `
        });
}

function getRandomUser() {
    const personalAccount = document.querySelector('.personal-account');

    fetch('https://random-data-api.com/api/users/random_user')
        .then(resp => resp.json())
        .then(data => {
            personalAccount.innerHTML = `
        <h5 class="personal-account__name">${data.first_name} ${data.last_name}</h5>
        <img class="personal-account__avatar" src="${data.avatar}" alt="кружка пива">
        <div class="personal-account__button">>></div>
        `
        })
}

document.body.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("personal-account__button")) {
        getRandomUser()
    }
});
