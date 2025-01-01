let slides = document.querySelectorAll('.slideshow .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// نمایش اولین اسلاید
showSlide(currentSlide);

// تغییر اسلاید هر ۳ ثانیه
setInterval(nextSlide, 3000);
