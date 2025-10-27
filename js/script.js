// cand pagina s-a incarcat complet
document.addEventListener('DOMContentLoaded', () => {
  // ia anul curent si il baga in footer (pentru toate span-urile cu id year)
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;
});

// functia care se ocupa cu trimiterea formularului de contact
function handleForm(e) {
  e.preventDefault(); // opreste refresh-ul default al formularului

  // ia mesajul si butonul
  const msg = document.getElementById('formMsg');
  const btn = document.querySelector('#contactForm button[type="submit"]');

  // schimba textul butonului in timp ce "se trimite"
  btn.disabled = true;
  btn.textContent = 'Se trimite...';

  // simuleaza un mic delay (demo)
  setTimeout(() => {
    msg.textContent = 'Multumim! Mesajul a fost trimis (demo).';
    btn.disabled = false;
    btn.textContent = 'Trimite';
    document.getElementById('contactForm').reset(); // goleste formularul
  }, 900);

  return false; // nu trimite nimic real
}
