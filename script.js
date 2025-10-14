// Funcție pentru adăugarea produselor în coș
let cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
  alert(`${productName} a fost adăugat în coș!`);
}

// Formular de contact
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-message").textContent =
      "Mulțumim pentru mesaj! Te vom contacta în curând.";
    contactForm.reset();
  });
}
