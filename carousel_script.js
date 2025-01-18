document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;

    function updateCarousel() {
        const width = carouselInner.clientWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        const totalImages = carouselInner.children.length;
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        const totalImages = carouselInner.children.length;
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});
