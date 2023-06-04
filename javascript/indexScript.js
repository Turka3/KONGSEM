$(document).ready(function () {
	// Modal'ı göster
	$("#modalNesne").modal('show');

	// Popup ayarları
	$('#searchBar').popup({
		scrolllock: true,
		transition: 'all 0.3s'
	});

	// Popup varsayılan sayfa konteynerini belirle
	$.fn.popup.defaults.pagecontainer = '#main';
});

// Olay kaydırıcısı ayarları
$('#eventsSlider').carousel({
	interval: 10000
});

// Olay kaydırıcısının carousel öğelerini kontrol et
$('#eventsSlider .carousel-item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
});

$(document).ready(function () {
	var windowWidth = $(window).width();
	$(window).scroll(function () {
		if (windowWidth >= 970) {
			// Sticky menüyü etkinleştir
			$('nav').addClass('sticky-top');

			// Intersection Observer kullanarak sayfa kaydırıldığında yapılan işlemler
			new IntersectionObserver(function (e, o) {
				if (e[0].intersectionRatio > 0) {
					document.documentElement.removeAttribute('class');

					$('.wp').addClass('d-lg-block');

					$('nav .nav-link').css('padding', '39px 14px 38px 14px');

					$('.navbar-left').removeClass('ml-auto');

					$('.navbar-right').css('margin-left', 'auto');
					$('.navbar-right').css('margin-right', '31px');

					$('.brand').css('height', '');

					$('.navbar-social-icons').removeClass('show');

					var navItems = document.getElementsByClassName('nav-item');
					navItems[2].style.background = '';
				} else {
					document.documentElement.setAttribute('class', 'stuck');

					$('nav .nav-link').css('padding', '13px 14px 13px 14px');

					$('.wp').removeClass('d-lg-block');

					$('.navbar-left').addClass('ml-auto');

					$('.navbar-right').css('margin-left', '0');
					$('.navbar-right').css('margin-right', '9px');

					$('.brand').css('height', '27px');

					$('.navbar-social-icons').addClass('show');

					var navItems = document.getElementsByClassName('nav-item');
					navItems[2].style.background = "url('./assets/img/navbar-divider.png') no-repeat right";
				}
			}).observe(document.querySelector('.trigger'));
		}
	});
});

// Footer carousel ayarları
$('#footer-start-m').carousel({
	interval: 10000
});

// Footer carousel öğelerini kontrol et
$('.footer-start-m .carousel .carousel-item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	if (next.next().length > 0) {
		next.next().children(':first-child').clone().appendTo($(this));
	} else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}

	var windowWidth = $(window).width();
	if (windowWidth <= 970) {
		// Footer görsellerinin arkaplanını ayarla
		$('.fs-3').css(
			'background-image',
			'url(./assets/img/info.png), url(./assets/img/divider-footer.png) , url(./assets/img/divider-footer.png)'
		);
		$('.fs-3').css('background-repeat', 'no-repeat, no-repeat, no-repeat');
		$('.fs-3').css('background-position', 'center, center left, center right');
		$('.fs-3').css('background-position-y', '17px, top, top');
		$('.fs-3').css('background-position-x', 'center, left, right');

		$('.fs-4').removeClass('menu-box');
		$('.fs-4').addClass('menu-box-white');

		$('.fs-5').removeClass('menu-box-white');
		$('.fs-5').addClass('menu-box');

		$('.fs-6').removeClass('menu-box');
		$('.fs-6').addClass('menu-box-white');

		$('.fs-6').css(
			'background-image',
			'url(./assets/img/kybs.png), url(./assets/img/divider-footer.png) , url(./assets/img/divider-footer.png)'
		);
		$('.fs-6').css('background-repeat', 'no-repeat, no-repeat, no-repeat');
		$('.fs-6').css('background-position', 'center, center left, center right');
		$('.fs-6').css('background-position-y', '17px, top, top');
		$('.fs-6').css('background-position-x', 'center, left, right');
	}
});

// Footer üst carousel ayarları
$('#footer-top-m').carousel({
	interval: 10000
});

// Footer üst carousel öğelerini kontrol et
$('.footer-top-m .carousel .carousel-item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	if (next.next().length > 0) {
		next.next().children(':first-child').clone().appendTo($(this));
	} else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}

	var windowWidth = $(window).width();
	if (windowWidth <= 970) {
		// Footer görsellerinin arkaplanını ayarla
		$('.ft-3').css(
			'background-image',
			'url(./assets/img/ilangovtr.png), url(./assets/img/divider-footer-2.png) , url(./assets/img/divider-footer-2.png)'
		);
		$('.ft-3').css('background-repeat', 'no-repeat, no-repeat, no-repeat');
		$('.ft-3').css('background-position', 'center, center left, center right');
		$('.ft-3').css('background-position-y', '17px, top, top');
		$('.ft-3').css('background-position-x', 'center, left, right');

		$('.ft-6').css(
			'background-image',
			'url(./assets/img/sayilarla.png), url(./assets/img/divider-footer-2.png) , url(./assets/img/divider-footer-2.png)'
		);
		$('.ft-6').css('background-repeat', 'no-repeat, no-repeat, no-repeat');
		$('.ft-6').css('background-position', 'center, center left, center right');
		$('.ft-6').css('background-position-y', '17px, top, top');
		$('.ft-6').css('background-position-x', 'center, left, right');
	}
});

// Navigasyon menüsünde seçili öğeyi işaretle
$('.nav a').on('click', function () {
	$('.nav').find('.active').removeClass('active');
	$(this).parent().addClass('active');
});

$(window).scroll(function () {
	// Zaman çizelgesi öğelerini görselleştir
	$('.timeline li').each(function (i) {
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		if (bottom_of_window > bottom_of_object) {
			$(this).animate({
				opacity: '1'
			},
				500
			);
		}
	});
});

// Dikey carousel öğelerini kontrol et
$('.carousel .vertical .carousel-item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 1; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});