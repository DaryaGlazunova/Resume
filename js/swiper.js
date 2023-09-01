const slider = document.querySelector('.sample-slider');

let swiper = new Swiper(slider, {
    slidesPerView: 1,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      spaceBetween:  15,
      
      breakpoints: {
        800: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
      },

      autoplay: {                         //autoplay
        delay: 2000,  
    },   

  });

