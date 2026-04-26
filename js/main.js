document.addEventListener("DOMContentLoaded", function () {
  /* HERO TYPING EFFECT */

  const text = "Your Gateway to Global Travel";
  const typingElement = document.getElementById("typing");

  let index = 0;
  let isDeleting = false;

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });


  function typeEffect() {
    if (!isDeleting) {
      typingElement.textContent = text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      typingElement.textContent = text.substring(0, index - 1);
      index--;

      if (index === 0) {
        isDeleting = false;
      }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }

  typeEffect();

  /* COUNTRY INTERACTION */

  const countryData = {
    usa: {
      title: "United States Visa",
      text: "Assistance for B1/B2 visitor visas including DS-160 preparation and interview guidance.",
      img: "assets/images/usa.jpg",
    },

    uk: {
      title: "United Kingdom Visa",
      text: "Tourist and business visa assistance including documentation preparation.",
      img: "assets/images/uk.jpg",
    },

    australia: {
      title: "Australia Visa",
      text: "Complete assistance for Australian visitor visa applications.",
      img: "assets/images/australia.jpg",
    },

    schengen: {
      title: "Schengen Visa",
      text: "Travel across 27 European countries with full Schengen visa documentation support.",
      img: "assets/images/EU.jpg",
    },

    canada: {
      title: "Canada Visa",
      text: "Visitor visa assistance including application preparation and document verification.",
      img: "assets/images/canada.avif",
    },

    dubai: {
      title: "Dubai Visa",
      text: "Fast UAE tourist visa assistance including documentation and submission support.",
      img: "assets/images/dubai.avif",
    },

    singapore: {
      title: "Singapore Visa",
      text: "Tourist visa support including documentation and travel preparation.",
      img: "assets/images/singapore.webp",
    },
  };

  const buttons = document.querySelectorAll(".country-btn");

  let currentIndex = 0;

  /* function to change country */

  function showCountry(index){

const img = document.getElementById("countryImg");
const title = document.getElementById("countryTitle");
const text = document.getElementById("countryText");

buttons.forEach(btn => btn.classList.remove("active"));
buttons[index].classList.add("active");

const country = countryData[buttons[index].dataset.country];

/* fade out */

img.classList.add("fade-out");
title.classList.add("fade-out");
text.classList.add("fade-out");

setTimeout(()=>{

img.src = country.img;
title.textContent = country.title;
text.textContent = country.text;

/* fade in */

img.classList.remove("fade-out");
title.classList.remove("fade-out");
text.classList.remove("fade-out");

img.classList.add("fade-in");
title.classList.add("fade-in");
text.classList.add("fade-in");

},400);

}


/* CLICK EVENTS */

buttons.forEach((btn,i)=>{

btn.addEventListener("click",()=>{

currentIndex=i;
showCountry(currentIndex);

});

});


/* AUTO ROTATION */

setInterval(()=>{

currentIndex++;

if(currentIndex>=buttons.length){
currentIndex=0;
}

showCountry(currentIndex);

},4000);

});
