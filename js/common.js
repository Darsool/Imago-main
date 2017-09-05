$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(window).resize(function(event) {
		/* Act on the event */
		if($(this).width() > 1184){
			$('.header__top-line_info-list').show();
		}else if($(this).width() < 1184){
			$('.header__top-line_info-list').hide();
		}
		// console.log($(this).width())
	});

	$('.header__top-line_info-list-span').on('click', function(event) {
		event.preventDefault();
		
		$(this).closest('.header__top-line_info-list-wrap').toggleClass('on');
		$('.header__top-line_info-list').slideToggle('400');
	});

	$('.header__menu-btn').on('click', function(event) {
		event.preventDefault();
		
		$(this).closest('.header__menu').toggleClass('on');
	});

	$('.header__menu-wrap-list li').on('mouseover', function(event) {
		event.preventDefault();
		
		var
			$this = $(this),
			dataHd = $this.attr('data-hd-m-i'),
			blockImg = $('.header__menu-block-img'),
			blockImg__img = blockImg.find('img');
			
		blockImg__img.remove();
		blockImg.append('<img src="'+objSRC[dataHd]+'" >');
		
	});


	$('.product__price-oder').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

	});

	// product__price-oder
		$('.product__price-oder').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$('.popup-wrap').show();
			$('html').toggleClass('popup-active');

		});
	// END product__price-oder
	// pupup

	$('.popup-form .popup-list input').on('change', function(event) {
		
		$(this).closest('.popup-form').find('.popup-submit').removeAttr('disabled')
		
	});
	$('.popup-wrap').on('click',  function(event) {
		event.stopPropagation();

		var
			$this = $(this),
			$target = $(event.target),
			targetClass = event.target.className,

			$close = $('popup-closed');

		if( targetClass === 'popup-closed' || targetClass === this.className){
			$(this).hide();
			$('html').toggleClass('popup-active');
		}
	});
});
