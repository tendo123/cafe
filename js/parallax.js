$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if(windowWidth > 800){
			//calcular la posicion de la barra 
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});


//---- Regresar a su posicion original ----- 
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800){
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});
});