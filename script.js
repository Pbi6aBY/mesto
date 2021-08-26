let openPopupButton = document.querySelector('.profile__caption');
let popup = document.querySelector('.popup');
let savePopupButton = document.querySelector('.popup__save');
let closePopupButton = document.querySelector('.popup__close');
let form = document.querySelector('.popup__container');

function togglePopup () {
  if (!popup.classList.contains('popup_opened')){
  }
  popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

form.addEventListener('submit', function (event) { event.preventDefault();} );
