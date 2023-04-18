$(document).ready(function () {
    var currentSlide = 0;
    var slideCount = $('.slider .slide').length;
    var autoPlayInterval;
  
    function changeSlide(next) {
      $('.slider .slide').eq(currentSlide).removeClass('active');
      currentSlide = next ? (currentSlide + 1) % slideCount : (currentSlide - 1 + slideCount) % slideCount;
      $('.slider .slide').eq(currentSlide).addClass('active');
    }
  
    function startAutoPlay() {
      autoPlayInterval = setInterval(function () {
        changeSlide(true);
      }, 2000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }
  
    startAutoPlay();
  
    $('.slider-control.prev').on('click', function () {
      stopAutoPlay();
      changeSlide(false);
    });
  
    $('.slider-control.next').on('click', function () {
      stopAutoPlay();
      changeSlide(true);
    });
  });