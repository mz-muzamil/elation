$(document).ready(function () {
  $("#main_banner").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    autoHeight: false,
    autoplayHoverPause: true,
  });

  $("#testimonials").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  $("#our_clients").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
  });

  $(window).scroll(function () {
    var sticky = $(".header");
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
      sticky.addClass("animate__animated animate__slideInDown");
    } else {
      sticky.removeClass("animate__animated animate__slideInDown");
    }
  });
  AOS.init();
});
