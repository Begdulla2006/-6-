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

const portswiper = new Swiper('.port-swiper', {
  direction: 'horizontal',
  loop: true,
  //     autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  slidesPerView: 2,
  spaceBetween: 200,
  centeredSlides: true,
});

const hotswiper = new Swiper('.hot-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  //     autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

let prevImg = document.querySelector(".prev-img");
let nextImg = document.querySelector(".next-img");

window.addEventListener("DOMContentLoaded", () => {
  let next = ((hotswiper.realIndex == 2 ? 0 : hotswiper.realIndex + 1) + 1);
  let prev = ((hotswiper.realIndex == 0 ? 2 : hotswiper.realIndex - 1) + 1);
  prevImg.style.background = "url(" + "../images/slide" + prev + ".png" + ")";
  nextImg.style.background = "url(" + "../images/slide" + next + ".png" + ")";
})

hotswiper.on("slideChangeTransitionEnd", () => {
  console.log(hotswiper.realIndex);
  let next = ((hotswiper.realIndex == 2 ? 0 : hotswiper.realIndex + 1) + 1);
  let prev = ((hotswiper.realIndex == 0 ? 2 : hotswiper.realIndex - 1) + 1);
  prevImg.style.background = "url(" + "../images/slide" + prev + ".png" + ")";
  nextImg.style.background = "url(" + "../images/slide" + next + ".png" + ")";
})














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