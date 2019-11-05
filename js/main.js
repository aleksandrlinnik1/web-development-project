$('.team-slide').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	      }
	    }
    ]
  });
