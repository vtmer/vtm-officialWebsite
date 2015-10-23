$(document).ready(function(){
	$(window).resize(function(){window.location.reload()});
	$('#header').css('marginTop', ($(window).height()-parseInt($('#header').css('height')))/2+'px');
	$('#header').css('marginBottom', ($(window).height()-parseInt($('#header').css('height')))/2+'px');
	$('#header > button').click(function(){
		$('html,body').animate({scrollTop: $('#about_us').offset().top-120}, 500); 
	});
	$('.title').click(function(){
		$('html,body').animate({scrollTop: $(this).offset().top-120}, 300);
	});
	window.onscroll = function() {
		var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
		if(scrollTop > 42) {
			document.getElementById('nav').style.top = 0;
		} else {
			document.getElementById('nav').style.top = 42-scrollTop+'px';
		}
	}
});