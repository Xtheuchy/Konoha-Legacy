const slideContainer = document.querySelector('.slide-cosplay');
        const slides = document.querySelectorAll('.slide-cosplay img');
        const totalSlides = slides.length;
        let currentIndex = 0;

        function startSlider() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(startSlider, 2000);
//NAV BAR
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});