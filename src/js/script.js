const toggleMenuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#main-menu");

toggleMenuBtn.addEventListener("click", () => {
  const isExpanded = toggleMenuBtn.getAttribute("aria-expanded") === "true";
  
  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  toggleMenuBtn.setAttribute("aria-expanded", "true");
  menu.removeAttribute("hidden");
  
  document.body.style.overflow = "hidden"; 
}

function closeMenu() {
  toggleMenuBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("hidden", "");
  document.body.style.overflow = ""; 
}

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const container = carousel.querySelector('.carousel__container');
    const slides = carousel.querySelectorAll('.carousel__slide');
    const nextBtn = carousel.querySelector('.carousel__btn--next');
    const prevBtn = carousel.querySelector('.carousel__btn--prev');
    const indicators = carousel.querySelectorAll('.carousel__indicator');
    
    let currentIndex = 0;

    function updateCarousel() {
        const width = slides[0].getBoundingClientRect().width;
        container.style.transform = `translateX(-${currentIndex * width}px)`;
        
        indicators.forEach((dot, index) => {
            dot.classList.toggle('current', index === currentIndex);
        });
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= slides.length) currentIndex = 0;
            updateCarousel();
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) currentIndex = slides.length - 1;
            updateCarousel();
        });
    }
    
    window.addEventListener('resize', updateCarousel);
});