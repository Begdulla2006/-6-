const headswiper = new Swiper('.head-swiper', {
  direction: 'horizontal',
  loop: true,
  //     autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },

  pagination: {
    el: '.swiper-pagination',
  },

});

const portwiper = new Swiper('.port-swiper', {
  direction: 'horizontal',
  loop: true,
  //     autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  slidesPerView: 2,
  spaceBetween: 200,
  centeredSlides: true,

  768: {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
  },
});








//   git init
//   git add .
//   {$ git config --global user.name "John Doe"
// $ git config --global user.email johndoe@example.com}
//   git commit -m "First"
//   git branch -M main
//   git remote add origin https://github.com/Begdulla2006/zz.git
//   git push -u origin main

//   git add .
//   git commit -m "Second"
//   git push -u origin main