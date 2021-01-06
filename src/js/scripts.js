const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const menuBtnBurger = document.querySelector('.menu-btn__burger');

$('.slider').slick({
    dots: true,
    arrows: true,
    dotsClass: 'slider__dots',
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: $('.prev'),
    nextArrow: $('.next')

  });