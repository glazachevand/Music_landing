import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
  const swiperTestimonial = new Swiper('#testimonials-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true
    },
  });

  const swiperCaregories = new Swiper('#categories-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 2,
    spaceBetween: 30,
  });

  const swiperGallery = new Swiper('#gallery-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 0,
    centeredSlidesBounds: true,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    zoom: {
      maxRatio: 2,
      minRatio: 1,
    },
    navigation: {
      nextEl: '.gallery-swiper-next',
      prevEl: '.gallery-swiper-prev',
    },
  });
}

export default swiperFunc;
