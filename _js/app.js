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


	$(function(){
		$('#pizzaCarousel').carousel();
	});


	var position = $(".categoryList h3").position(); //Position of the header in the webpage
	var paddingTop = 0;
	var paddingLeft = 10; //Padding set to the header
	var left = position.left + paddingLeft;
	var top = position.top + paddingTop;
	$(".categoryList h3").find("span").css("background-position","-"+left+"px -"+top+"px");
	//todo work on aligning the backgrounds of the text and the body
	//todo use svg on V2

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


