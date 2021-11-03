const openPopupButton = document.querySelector(".profile__caption");

const profilePopup = document.querySelector(".profile_popup");
const closePopupButton = profilePopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const locationInput = document.querySelector(".popup__input_type_location");
const linkInput = document.querySelector(".popup__input_type_link");
const popupPlace = document.querySelector(".new_card_popup");
const createPopupButton = document.querySelector(".profile__submit");
const closePopupPlaceButton = popupPlace.querySelector(".popup__close");
const bigImagePopup = document.querySelector(".image_popup");
const closePopupBigImageButton = bigImagePopup.querySelector(".popup__close");
const popupImage = bigImagePopup.querySelector(".popup__image");
const popupSignature = bigImagePopup.querySelector(".popup__signature");

function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
}

function toggleProfile() {
  togglePopup(profilePopup);
}

function openPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  toggleProfile();
}

function togglePopupPlace() {
  togglePopup(popupPlace);
}

function togglePopupBig() {
  togglePopup(bigImagePopup);
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", toggleProfile);

createPopupButton.addEventListener("click", togglePopupPlace);
closePopupPlaceButton.addEventListener("click", togglePopupPlace);
closePopupBigImageButton.addEventListener("click", togglePopupBig);

const formElement = profilePopup.querySelector(".popup__form");

function formSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  toggleProfile();
}

const formElementPlace = popupPlace.querySelector(".popup__form");

function formSubmitPlace(event) {
  event.preventDefault();
  const card = { name: locationInput.value, link: linkInput.value };
  prependCard(card);
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

initialCards.forEach(prependCard);

function createCard(card) {
  const cardElement = cardTemplate
    .querySelector(".cards__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".cards__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".cards__title").textContent = card.name;
  const like = cardElement.querySelector(".cards__icon");
  like.addEventListener("click", likeActive);
  const del = cardElement.querySelector(".cards__trash");
  del.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", bigSize);
  return cardElement;
}

function prependCard(item) {
  const card = createCard(item);
  ulCards.prepend(card);
}

function likeActive(evt) {
  evt.target.classList.toggle("cards__icon_active");
}

function deleteCard(evt) {
  const cardDel = evt.target.closest(".cards__item");
  cardDel.remove();
}

function bigSize(evt) {
  popupImage.src = evt.target.src;
  popupSignature.textContent = evt.target.alt;
  togglePopupBig();
}
