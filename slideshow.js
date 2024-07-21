function redirectToThankYou() {
  let emailInput = document.getElementById("email").value;
  let errorMessage = document.getElementById("error-message");

  if (emailInput) {
    errorMessage.textContent = ''; // Fehlernachricht zurücksetzen
    window.location.href = "https://www.bounce.at/angebot/mitgliedsbeitrag/probetraining";
  } else {
    errorMessage.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
  }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


