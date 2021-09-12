let openPopupButton = document.querySelector(".profile__caption");
let popup = document.querySelector(".popup");
let savePopupButton = document.querySelector(".popup__save");
let closePopupButton = document.querySelector(".popup__close");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_about");

function togglePopup() {
  popup.classList.toggle("popup_opened");
}

function openPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  togglePopup();
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", togglePopup);

let formElement = document.querySelector(".popup__form");
function formSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup();
}

formElement.addEventListener("submit", formSubmitHandler);



const ulCards = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//const cardsElement = document.querySelector('.cards__item');

//function

const addCard = (cards) => {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__image').src=cards.link;
  cardElement.querySelector('.cards__image').alt=cards.name;
  cardElement.querySelector('.cards__title').textContent = cards.name;
  ulCards.prepend(cardElement);
};


//const postingFormHandler = (event) => {
//event.preventDefault();

//addCard({
//  name: cardsName,
//  link: cardsLink,
//});
//
//postingFormElement.reset();
//
//};




initialCards.forEach((cards) => {
addCard(cards);
});
