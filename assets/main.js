// burger
$(document).ready(function(){
  $('#burger-show').click(function(){
    $('.header-wrapper__nav-fixed').css('right', 0);
    $('.bg-shadows').css('display', 'block');
  })

  $('.bg-shadows').click(function(){
    $('.header-wrapper__nav-fixed').css('right', -1000);
    $('.bg-shadows').css('display', 'none');
  })

  $('.bg-shadows').click(function(){
    $('.tools-wrapper__dropdown').css('display', 'none');
    $('.bg-shadows').css('display', 'none');
  })

  $('.tools-wrapper__open-option').click(function(){
    $('.tools-wrapper__dropdown').css('display', 'block');
    $('.tools-wrapper__open-option').css('display', 'none');
    $('.tools-wrapper__close-hiden').css('display', 'block');
    $('.bg-shadows').css('display', 'block');
  })

  $('.tools-wrapper__close-hiden').click(function(){
    $('.tools-wrapper__dropdown').css('display', 'none');
    $('.tools-wrapper__open-option').css('display', 'block');
    $('.tools-wrapper__close-hiden').css('display', 'none');
    $('.bg-shadows').css('display', 'none');
  })

  $('.bg-shadows').click(function(){
    $('.tools-wrapper__dropdown').css('display', 'none');
    $('.tools-wrapper__open-option').css('display', 'block');
    $('.tools-wrapper__close-hiden').css('display', 'none');
    $('.bg-shadows').css('display', 'none');
  })

});

// slider
var swiper = new Swiper('.swiper-container1', {
  speed: 1000,
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
});
