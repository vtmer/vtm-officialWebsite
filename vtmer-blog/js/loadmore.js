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
				var liHeight=$('#result ul').height()+10;
				var count=$('#result ul').length;
				var allheight=liHeight*(count-1);
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