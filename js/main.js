$('.team-slide').slick({
    infinite: true,
    dots: true,
    arrows : false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
	      breakpoint: 800,
	      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
