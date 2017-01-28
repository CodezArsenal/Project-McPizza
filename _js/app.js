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

});


