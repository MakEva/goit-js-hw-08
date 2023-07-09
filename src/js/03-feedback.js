import throttle from 'lodash.throttle';

const selector = {
    form: document.querySelector(".feedback-form"),
    emailInput: document.querySelector('.feedback-form input'),
    messageInput: document.querySelector('.feedback-form textarea')
}

const LS_KEY = "feedback-form-state";
let formInput = {};
isPreviousMessage();

selector.form.addEventListener("input", throttle(onFormInput, 500));
selector.form.addEventListener("submit", onFormSubmit);

function onFormInput(evt) {
    formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(formInput));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LS_KEY);
    console.log(formInput);
    formInput = {};
}

function isPreviousMessage() {
    const savedMessage = localStorage.getItem(LS_KEY);
    if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);
        selector.emailInput.value = email || "";
        selector.messageInput.value = message || "";
    }
}
