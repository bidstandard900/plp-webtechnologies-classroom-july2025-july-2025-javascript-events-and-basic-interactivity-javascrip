/* ================================
   ACATECH SOLUTIONS - script.js
   Handles interactivity, events,
   and form validation
================================ */

/* ---------- THEME TOGGLE ---------- */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon based on theme
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

/* ---------- HERO BUTTON ---------- */
const learnMoreBtn = document.getElementById("learn-more-btn");

learnMoreBtn.addEventListener("click", () => {
  // Smooth scroll to services section
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
});

/* ---------- COUNTER FEATURE ---------- */
let counter = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

/* ---------- FAQ ACCORDION ---------- */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Toggle visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

/* ---------- FORM VALIDATION ---------- */
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Collect input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation logic
  if (name.length < 3) {
    feedback.textContent = "⚠️ Name must be at least 3 characters long.";
    feedback.style.color = "red";
    return;
  }

  // Email validation using RegEx
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "⚠️ Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  // Password validation (min 6 chars, at least 1 number)
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    feedback.textContent =
      "⚠️ Password must be at least 6 characters long and contain at least 1 number.";
    feedback.style.color = "red";
    return;
  }

  if (message.length < 10) {
    feedback.textContent =
      "⚠️ Message must be at least 10 characters long.";
    feedback.style.color = "red";
    return;
  }

  // If all validations pass
  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";

  // Clear form fields
  form.reset();
});
