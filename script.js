const form = document.getElementById('signup-form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    const value = input.value.trim();
    const parent = input.parentElement;

    if (!value) {
      parent.classList.add('error');
    } else if (input.type === 'email' && !validateEmail(value)) {
      parent.classList.add('error');
    } else {
      parent.classList.remove('error');
    }
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}