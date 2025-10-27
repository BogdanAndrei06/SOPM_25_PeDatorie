// cand se incarca pagina shop
document.addEventListener("DOMContentLoaded", () => {
  // ia toate produsele din grila
  const products = document.querySelectorAll(".product");

  // animatia aia mica de aparitie la load
  products.forEach((product, i) => {
    product.style.opacity = 0; // initial ascuns
    product.style.transform = "translateY(20px)"; // pleaca de jos in sus

    // delay mic intre produse ca sa apara pe rand
    setTimeout(() => {
      product.style.transition = "opacity .6s ease, transform .6s cubic-bezier(.2,.9,.3,1)";
      product.style.opacity = 1;
      product.style.transform = "translateY(0)";
    }, 100 * i);
  });
});
