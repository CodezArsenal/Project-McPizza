$(document).ready(function(){

	/*function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

			var target = $( $(this).attr('href') );

			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, duration);
			}
		});
	}

	smoothScroll(1000);*/

	//smooth scrolling the page
	(function (jQuery) {
		jQuery.mark = {
			jump: function (options) {
				var defaults = {
					selector: 'a.scroll-on-page-link'
				};
				if (typeof options == 'string') {
					defaults.selector = options;
				}

				options = jQuery.extend(defaults, options);
				return jQuery(options.selector).click(function (e) {
					var jumpobj = jQuery(this);
					var target = jumpobj.attr('href');
					var thespeed = 1000;
					var offset = jQuery(target).offset().top;
					jQuery('html,body').animate({
						scrollTop: offset
					}, thespeed, 'swing');
					e.preventDefault();
				});
			}
		};
	})(jQuery);

	jQuery(function(){
		jQuery.mark.jump();
	});


	//carousel animating tasks
	var items = ['_assets/img/images/pizzaTray.png', '_assets/img/images/pizzaTray.png', '_assets/img/images/pizzaTray.png', '_assets/img/images/pizzaTray.png', '_assets/img/images/pizzaTray.png', '_assets/img/images/pizzaTray.png'];

	var mcPizzaInner = $('#pizzaCarousel .mcPizza-inner');

	/*function Load(arr, start, numOfItems) {
		var html = '';
		/*var active = arr[start];

		 if(start+1 == arr.length)
		 var next = arr[0];
		 else
		 var next = arr[start+1];

		 if(start-1 < 0)
		 var prev = arr[arr.length -1];
		 else
		 var prev = arr[start-1];*/

		/*for (i = start; i < numOfItems; i++) {
			html += '<div class="item"><img src="' + arr[i] + ' " width="200px" /></div>'
		}//todo add exception if out of array loading
		console.log(html);//todo remove console.log statements
		mcPizzaInner.html(html);
	}*/

		/*mcPizzaInner.find('.item').first().addClass('active'); //stupid solution i know, im in hurry :)
		var active = mcPizzaInner.find('.active');
		active.next().animate({
			left: "60%",
		}, 100).next().animate({
			left: "70%",
		}, 100);
		active.prev().animate({
			left: "40%",
		}, 100).prev().animate({
			left: "30%",
		});

		console.log($('.prevBtn').prev());
	}
	Load(items, 0 , 5);

	function position(){
		var active = mcPizzaInner.find('.item.active');
		active.next()
	}

	mcPizzaInner.find('.nextBtn').click(function(){
		mcPizzaInner.find('.active').prev().prev().animate({
			left: "70%"
		}, 60);
		mcPizzaInner.find('.active').prev().animate({
			left:"30%",
		},1000);
		mcPizzaInner.find('.active').animate({
			left: "40%",
			width: "360px", //edit depending on pic
			height: "300px",
		}, 1000).removeClass('active').next().addClass('active').animate({
			left: "50%",
			width: "360px", //edit depending on pic
			height: "300px",
		},1000).next().animate({
			left: "60%"
		},1000);
	});*/

	mcPizzaInner.slick({
		centerMode: true,
		centerPadding: '130px',
		slidesToShow: 3,
		arrows: true,
		focusOnSelect: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					focusOnSelect: false,
					draggable: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
					focusOnSelect: false,
					draggable: false
				}
			}
		]
	});


	$('.mcPizza-inner').on('swipe', function(event, slick, direction){
		var currentSlide = $('.your-element').slick('slickCurrentSlide');
		console.log(direction);
		currentSlide.animate({
			width: "360px",
			height: "300px",
		}, 1000);
		console.log("swipe!");
	});

	function carouselPositioning(){
		var slides = $(".slick-slide");
		var current = $('.slick-current');
		var currentPrev = current.prev();
		var currentNext = current.next();

		slides.removeClass('firstLevelStyle');
		currentPrev.addClass('firstLevelStyle');
		currentNext.addClass('firstLevelStyle');

		slides.removeClass('secondLevelStyle');
		currentPrev.prev().addClass('secondLevelStyle left');
		currentNext.next().addClass('secondLevelStyle right');


		slides.removeClass('activeStyle');
		current.addClass('activeStyle');
	}

	$('button.slick-next').click(function(){
		carouselPositioning();

		/*currentImg.animate({
			width: "360px",
			height: "300px",
		}, 1000);
		currentImg.parent().prev().find('img').animate({
			width: "180px",
			height: "150px",
		},1000);*/

	});

	$('button.slick-prev').click(function(){
		carouselPositioning();

	});


	//menu titles background
	var position = $(".categoryList h3").position(); //Position of the header in the webpage
	var paddingTop = 0;
	var paddingLeft = 10; //Padding set to the header
	var left = position.left + paddingLeft;
	var top = position.top + paddingTop;
	$(".categoryList h3").find("span").css("background-position","-"+left+"px -"+top+"px");
	//todo work on aligning the backgrounds of the text and the body
	//todo use svg on V2

	//menu animations
	$('.meal').hover(function(){
		$(this).next().next().css('display', 'block').addClass('animated').hover(
			function(){
				$(this).css('display', 'block');
			},
			function(){
				$(this).css('display', 'none');
			}
		);
	},
	function(){
		$(this).next().next().css('display', 'none').removeClass('animated');
	})


});


