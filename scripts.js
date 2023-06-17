$(".product-slider").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },

    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },

    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
  prevArrow:
    "<button type='button' class='pagination pull-left'><i class='fa-solid fa-caret-down' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='pagination pull-right'><i class='fa-solid fa-caret-down' aria-hidden='true'></i></button>",
});
