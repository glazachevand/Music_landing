export function formHandler() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('.contact-form__line input, .contact-form__line textarea');

  inputs.forEach(item => {

    item.addEventListener('focus', e => {
      const target = e.target;
      const line = target.closest('.contact-form__line');
      if (line) {
        line.classList.add('active');
      }
    });

    item.addEventListener('blur', e => {
      const target = e.target;
      const line = target.closest('.contact-form__line');
      if (line) {
        line.classList.remove('active');
      }
    });
  });

}
