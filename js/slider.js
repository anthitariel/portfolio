$("#slick").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  adaptiveHeight: true,
  prevArrow: "<span class='slick-prev'>&lt;</span>",
  nextArrow: "<span class='slick-next'>&gt;</span>",
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
