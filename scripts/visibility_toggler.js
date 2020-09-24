const VISIBILITY_CLASS = 'visually-hidden'

const buttonClose = document.getElementById('feedback_form__close');
const buttonOpen = document.getElementById('feedback_form__open');
const feedbackForm = document.getElementById('feedback_form');


function visibilityToggler(element) {
    if (element.classList.contains(VISIBILITY_CLASS )) {
        element.classList.remove(VISIBILITY_CLASS );
    }
    else {
        element.classList.add(VISIBILITY_CLASS );
    }
}

buttonClose.addEventListener("click", () => {
    visibilityToggler(feedbackForm);
});

buttonOpen.addEventListener("click", () => {
    visibilityToggler(feedbackForm);
});