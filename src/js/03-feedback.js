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
    selector.form.reset();
    const savedMessage = localStorage.getItem(LS_KEY);
    localStorage.removeItem(LS_KEY);
    formInput = {};
       if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);
        selector.emailInput.value = email || "";
        selector.messageInput.value = message || "";
        console.log({ email, message });
    }
  
}
function isPreviousMessage() {
    const savedMessage = localStorage.getItem(LS_KEY);
    if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);
        selector.emailInput.value = email || "";
        selector.messageInput.value = message || "";
    }
}


