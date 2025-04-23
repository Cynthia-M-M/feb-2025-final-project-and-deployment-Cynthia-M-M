document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.querySelector(".scroll-to-top");

  // Show or hide scroll-to-top button on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Scroll to top smoothly
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Add product to cart
function addToCart(productName) {
  alert(`${productName} added to cart! 🛒`);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Validate contact form
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formMessage");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
    return false;
  }

  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return false;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";
  return false; // prevent page refresh
}
