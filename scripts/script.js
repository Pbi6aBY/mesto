const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const openPopupButton = document.querySelector(".profile__caption");
const profilePopup = document.querySelector(".popup_profile");
const closePopupButton = profilePopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const locationInput = document.querySelector(".popup__input_type_location");
const linkInput = document.querySelector(".popup__input_type_link");
const popupPlace = document.querySelector(".popup_new_card");
const createPopupButton = document.querySelector(".profile__submit");
const savePopupButton = popupPlace.querySelector(".popup__save");
const closePopupPlaceButton = popupPlace.querySelector(".popup__close");
const bigImagePopup = document.querySelector(".popup_image");
const closePopupBigImageButton = bigImagePopup.querySelector(".popup__close");
const popupImage = bigImagePopup.querySelector(".popup__image");
const popupSignature = bigImagePopup.querySelector(".popup__signature");

function disableSubmitButtonPlace(popup) {
  popup.classList.add("popup__button_disabled");
}

function handleEscPressed(popup) {
  if (popup.classList.contains("popup_opened")) {
    document.addEventListener("keydown", closeProfile);
  } else {
    document.removeEventListener("keydown", closeProfile);
  }
}

function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
  handleEscPressed(popup);
}

function toggleProfile() {
  togglePopup(profilePopup);
}

function openPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  hideErrors(profilePopup);
  toggleProfile();
}

function openPopupPlace() {
  linkInput.value = "";
  locationInput.value = "";
  disableSubmitButtonPlace(savePopupButton);
  hideErrors(popupPlace);
  togglePopup(popupPlace);
}

function closePopupPlace() {
  togglePopup(popupPlace);
}

function openPopupBig() {
  togglePopup(bigImagePopup);
}

function closePopupBig() {
  togglePopup(bigImagePopup);
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", toggleProfile);

createPopupButton.addEventListener("click", openPopupPlace);
closePopupPlaceButton.addEventListener("click", closePopupPlace);
closePopupBigImageButton.addEventListener("click", closePopupBig);

const formElement = profilePopup.querySelector(".popup__form");

function formSubmitProfile(event) {
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
  closePopupPlace();
}

formElement.addEventListener("submit", formSubmitProfile);
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
  openPopupBig();
}

profilePopup.addEventListener("click", clickEmpty);
popupPlace.addEventListener("click", clickEmpty);
bigImagePopup.addEventListener("click", clickEmpty);

function clickEmpty(evt) {
  if (evt.target.classList.contains("popup")) {
    const popup = document.querySelector(".popup_opened");
    togglePopup(popup);
  }
}

function closeProfile(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    if (popup) {
      togglePopup(popup);
    }
  }
}

enableValidation(config);
