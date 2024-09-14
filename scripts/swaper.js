const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    ckickable: true,
    dynamicBullets: true,

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 // Autoplay configuration
 autoplay: {
  delay: 0, // Set delay to 0 for continuous movement
  disableOnInteraction: false, // Continue autoplay after user interactions
},

// Disable snapping to slides
slidesPerView: 'auto',
speed: 9000, // Adjust the speed to control how fast the slides move


  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },

      1024: {
          slidesPerView: 3
      }
  }

});