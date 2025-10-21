document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  document.querySelectorAll('.hero-image, .feature-card, .product-card, .contact-form-wrap').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(16px)';
    setTimeout(() => {
      el.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.9,.3,1)';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 80 * i);
  });
});

function handleForm(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  const btn = document.querySelector('#contactForm button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Se trimite...';

  setTimeout(() => {
    msg.textContent = 'Mulțumim! Mesajul a fost trimis (demo).';
    btn.disabled = false;
    btn.textContent = 'Trimite';
    document.getElementById('contactForm').reset();
  }, 900);
  return false;
}

function changeCurrency(value) {
  console.log("Monedă selectată:", value);
}
