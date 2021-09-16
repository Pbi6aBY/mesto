let openPopupButton = document.querySelector(".profile__caption");
let popup = document.querySelector(".popup");
let savePopupButton = document.querySelector(".popup__save");
let closePopupButton = document.querySelector(".popup__close");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_about");
let locationInput = document.querySelector(".popup__input_type_location");
let linkInput = document.querySelector(".popup__input_type_link");
let popupPlace = document.querySelectorAll(".popup")[1];
let createPopupButton = document.querySelector(".profile__submit");
let closePopupPlaceButton = popupPlace.querySelector(".popup__close");
let bigImagePopup = document.querySelectorAll(".popup")[2];
let closePopupBigImageButton = bigImagePopup.querySelector(".popup__close");
let popupImage = bigImagePopup.querySelector(".popup__image");
let popupSignature = bigImagePopup.querySelector(".popup__signature");

function togglePopup() {
  popup.classList.toggle("popup_opened");
}

function openPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  togglePopup();
}

function togglePopupPlace() {
  popupPlace.classList.toggle("popup_opened");
}

function togglePopupBig() {
  bigImagePopup.classList.toggle("popup_opened");
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", togglePopup);
createPopupButton.addEventListener("click", togglePopupPlace);
closePopupPlaceButton.addEventListener("click", togglePopupPlace);
closePopupBigImageButton.addEventListener("click", togglePopupBig);

let formElement = document.querySelector(".popup__form");
function formSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup();
}

let formElementPlace = popupPlace.querySelector(".popup__form");
function formSubmitPlace(event) {
  event.preventDefault();
  const card = { name: locationInput.value, link: linkInput.value };
  initialCards.push(card);
  addCard(card);
  locationInput.value = "";
  linkInput.value = "";
  togglePopupPlace();
}

formElement.addEventListener("submit", formSubmitHandler);
formElementPlace.addEventListener("submit", formSubmitPlace);

const ulCards = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const addCard = (card) => {
  const cardElement = cardTemplate
    .querySelector(".cards__item")
    .cloneNode(true);
  cardElement.querySelector(".cards__image").src = card.link;
  cardElement.querySelector(".cards__image").alt = card.name;
  cardElement.querySelector(".cards__title").textContent = card.name;
  let like = cardElement.querySelector(".cards__icon");
  like.addEventListener("click", likeActive);
  let del = cardElement.querySelector(".cards__trash");
  del.addEventListener("click", deleteCard);
  let big = cardElement.querySelector(".cards__image");
  big.addEventListener("click", bigSize);
  ulCards.prepend(cardElement);
};

initialCards.forEach((card) => {
  addCard(card);
});

function likeActive(evt) {
  evt.target.classList.toggle("cards__icon_active");
}

function deleteCard(evt) {
  let cardDel = evt.target.closest(".cards__item");
  cardDel.remove();
}

function bigSize(evt) {
  popupImage.src = evt.target.src;
  popupSignature.textContent = evt.target.alt;
  togglePopupBig();
}
