const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteractiIon: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });