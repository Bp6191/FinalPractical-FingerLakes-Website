// Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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


// Change quotes every 5 seconds
document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        `"When the weather starts to cool down you might be tempted to just stay home and hunker down, but you can choose to embrace the cold, lean into it, and embrace a “cozy” mindset."`,
        `"The Finger Lakes are breathtaking in every season – a true paradise for adventure and serenity seekers alike."`,
        `"From waterfalls to wineries, every corner of the Finger Lakes holds a story waiting to be explored."`
    ];

    let currentQuote = 0;

    function rotateQuotes() {
        const blockquote = document.querySelector("#highlight-quote blockquote p");
        blockquote.classList.add("fade-out");
        setTimeout(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            blockquote.textContent = quotes[currentQuote];
            blockquote.classList.remove("fade-out");
        }, 500); 
    }

    setInterval(rotateQuotes, 5000);
});


