// Menu navigation bar

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if(menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./images/menu_white_36dp.svg"
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./images/close_white_36dp.svg"    
  }
}

// Carousel functions

const slider = document.querySelectorAll('.slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}; 

function showSlider() {
  slider[currentSlide].classList.add('on');
};

function nextSlider() {
  hideSlider();
  if(currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if(currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

nextBtn.addEventListener('click', nextSlider);
prevBtn.addEventListener('click', prevSlider);

// Accordion functions

const accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach((item) => {
  const accordionHeaderItem = item.querySelector('.accordion-header');

  accordionHeaderItem.addEventListener('click', () => {
    const accordionContentItem = item.querySelector('.accordion-content');

    const contentActivated = document.querySelector('.active');

    verifyActive(item, accordionContentItem, contentActivated);
  });
});

function verifyActive(item, content, contentActivated) {
  const iconItem = item.querySelector('.accordion-icon');

  const icons = document.querySelectorAll('.accordion-ico');

  icons.forEach((item) => (item.innerHTML = '+'));

  if(contentActivated) {
    contentActivated.style.height = 0;
    contentActivated.classList.remove('active');
  }

  if(content !== contentActivated) {
    iconItem.innerHTML = '-';
    content.classList.add('active');
    content.style.height = content.scrollHeight + 10 + 'px';
  }
}

// Animação de visibilidade

// window.sr = ScrollReveal({ reset: true });

// sr.reveal('.content', { duration: 2000 });

// sr.reveal('.contact-info', { duration: 2000 });

// sr.reveal('.contact-form', { duration: 2000 });

// sr.reveal('.contact-map', { duration: 2000 });

// sr.reveal('.video-card', { 
//   rotate: { x: 0, y: 50, z: 0 },
//   duration: 1500
// });

// sr.reveal('.cards', {
//   rotate: { x: 0, y: 50, z: 0 },
//   duration: 1500
// });

// sr.reveal('.statement-card', {
//   rotate: { x: 0, y: 50, z: 0 },
//   duration: 1500
// });
