$("#slick").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  // prevArrow: "<span class='slick-prev'>&lt;</span>",
  // nextArrow: "<span class='slick-next'>&gt;</span>",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
