let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // смена через 2 секунды
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) {slideIndex = slides.length}
    if (slideIndex > slides.length) {slideIndex = 1}
    showSlidesManually();
}

function showSlidesManually() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

function openArticle(articleContent) {
    document.getElementById("article-text").innerText = `Содержимое: ${articleContent}`;
}
