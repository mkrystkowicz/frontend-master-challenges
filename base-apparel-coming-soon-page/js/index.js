window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', submitForm);
});

function submitForm(e) {
  e.preventDefault();
  const emailInput = e.target.querySelector('#email-input');

  const emailIsValid = validateEmail(emailInput.value);

  if (!emailIsValid) {
    emailInput.classList.add('action__input--failed');
    const failedDesc = document.querySelector('.action__info');
    failedDesc.classList.add('action__info--failed');
  }
}

function validateEmail(text) {
  const mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!text.match(mailformat)) {
    return false;
  }

  return true;
}
