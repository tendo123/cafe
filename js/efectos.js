$(document).ready(function(){

//------- Efecto menu	
	//each aplicar un efecto a cada elemento	
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top':'-200px'
		});


		//  0 seg , 2.5seg  , etc para que vaya cayendo cada elemento
		$(this).animate({
			top:'0'
		}, 1200 + (index * 500));

	});


	if( $(window).width() > 800){
		$('header .textos').css({
			opacity:0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity:1,
			marginTop: '-52px'
		},1600);

	}


// Scroll Elementos Menu

	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top

	$('#btn-acerca-de').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : 400
		},500);
	});

	$('#btn-menu').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : menu
		},500);
	});

	$('#btn-galeria').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : galeria
		},500);
	});

	$('#btn-ubicacion').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : ubicacion
		},500);
	});

});

