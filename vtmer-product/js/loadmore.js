$(function() {
				var pull 		= $('#pull');
					menu 		= $('nav ul');
					menuHeight	= menu.height();
				$(pull).on('click', function(e) {
					e.preventDefault();
					menu.slideToggle();
				});
				$(window).resize(function(){
	        		var w = $(window).width();
	        		if(w > 320 && menu.is(':hidden')) {
	        			menu.removeAttr('style');
	        		}
	    		});
			});
			$(function(){
				var liHeight=600;
				var count= $('.control').children().length;
				var allheight=liHeight*count;
				var n=3;
				$('#btnTest').click(function(){

					$('#loader').animate({'opacity':1},200,function(){
						n++;
						h=liHeight*n;
						if(h>=allheight){
							$('#btnTest').hide();
						}
						$('.control').height(h);
						$('#loader').css('opacity',0);
					})
				})
			})