let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const textareaEl = form.elements.message;
const emailEl = form.elements.email;
const localStorageKey = 'feedback-form-state';

const localStor = localStorage.getItem(localStorageKey) ?? '';
if (localStor) {
  formData = JSON.parse(localStor);
  textareaEl.value = formData.message;
  emailEl.value = formData.email;
}

form.addEventListener('input', evt => {
  const { email, message } = evt.currentTarget.elements;
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (emailEl.value && textareaEl.value) {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert(`Fill please all fields`);
  }
});
