let openPopupButton = document.querySelector(".profile__caption");
let popup = document.querySelector(".popup");
let savePopupButton = document.querySelector(".popup__save");
let closePopupButton = document.querySelector(".popup__close");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let nameInput = document.querySelector(".popup_type_name");
let jobInput = document.querySelector(".popup_type_about");

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
