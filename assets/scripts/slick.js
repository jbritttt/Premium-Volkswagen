// first slider





$(".slick-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2300,

  prevArrow: ".prev",
  nextArrow: ".next",
  dots: true,
  responsive: [
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

   


  ],
});

// second slider. The only difference is the width on images is set to 70% and it doesnt have auto play.
$(".slick-slider-1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow: ".prev-1",
  nextArrow: ".next-1",
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

   
  ],
});
