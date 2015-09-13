$(document).ready(function(){
	$(window).resize(function(){window.location.reload()});
	$(window).scroll( function() {
		if($(document).scrollTop() > 50) {
			$('#nav').animate({top: 0},100);
		} else if($(document).scrollTop() < 50) {
			$('#nav').animate({top: '42px'},10);
		}
	} );
	$('#header').css('marginTop', ($(window).height()-parseInt($('#header').css('height')))/2+'px');
	$('#header').css('marginBottom', ($(window).height()-parseInt($('#header').css('height')))/2+'px');
	$('#header > button').click(function(){
		$('html,body').animate({scrollTop: $('#about_us').offset().top-120}, 500); 
	});
	$('.title').click(function(){
		$('html,body').animate({scrollTop: $(this).offset().top-120}, 300);
	});
});