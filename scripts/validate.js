const showInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);

};

const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid){
  showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);

} else {
  hideInputError(ormElement, inputElement, errorElement, inputErrorClass, errorClass);
}
};

const toggleButtonState = (formElement, submitButtonSelector) => {
 const buttonElement = formElement.querySelector(submitButtonSelector);

 if () {
//вылючаем кнопку
 } else {
//включаем кнопку
 };

};

const setEventListeners = (formElement, submitButtonSelector, inputErrorClass, errorClass) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });
};

const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
inputList.forEach(inputElement => {
  inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
    toggleButtonState(formElement, submitButtonSelector);
  });
 });

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector)
  formList.forEach(formElement => {

    setEventListeners (formElement, config.submitButtonSelector, config.inputErrorClass, config.errorClass);
  });

};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__button_disabled', //создать класс
  inputErrorClass: 'popup__input_type_error', //создать класс и span
  errorClass: 'popup__error_visible' ////создать класс
});
