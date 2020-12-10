$(document).ready(function () {
  $('.page-header__burger-btn').click(function () {
    $('.page-header__burger-btn').toggleClass('active');
    $('.main-nav__container').toggleClass('active');
  });
});