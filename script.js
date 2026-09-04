// ==========================================
// LUXENT HOTEL - CUSTOM JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  // Display the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set today's date as the minimum check-in/check-out date
  const today = new Date().toISOString().split("T")[0];
  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");

  checkIn.min = today;
  checkOut.min = today;

  // Check-out cannot be before check-in
  checkIn.addEventListener("change", function () {
    checkOut.min = checkIn.value;

    if (checkOut.value && checkOut.value < checkIn.value) {
      checkOut.value = "";
    }
  });

  // Reservation form
  const reservationForm = document.getElementById("reservationForm");
  const reservationMessage = document.getElementById("reservationMessage");

  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;
    const roomType = document.getElementById("roomType").value;

    reservationMessage.textContent =
      `Thank you, ${guestName}! Your sample reservation request for a ${roomType} has been received.`;

    reservationMessage.classList.remove("d-none");

    reservationForm.reset();
    checkIn.min = today;
    checkOut.min = today;

    window.scrollTo({
      top: reservationMessage.getBoundingClientRect().top + window.scrollY - 150,
      behavior: "smooth"
    });
  });

  // Contact form
  const contactForm = document.getElementById("contactForm");
  const contactMessageBox = document.getElementById("contactMessageBox");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    contactMessageBox.textContent =
      "Your message has been sent successfully. This is a demonstration form.";

    contactMessageBox.classList.remove("d-none");
    contactForm.reset();
  });

  // Close the mobile navbar after clicking a navigation link
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navCollapse = document.getElementById("mainNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

});

