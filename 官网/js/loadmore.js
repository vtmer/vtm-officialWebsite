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
				var liHeight=$('#result ul').height()+100;
				var count=$('#result ul').length;
				var dheight=liHeight*2;
				var allheight=liHeight*count;
				var n=1;
				$('#btnTest').click(function(){

					$('#loader').animate({'opacity':1},200,function(){
						n++;//2
						h=dheight*n;
						if(h>allheight-1000){
							$('#btnTest').hide();
						}
						$('#result').height(h);
						$('#loader').css('opacity',0);
					})
				})
			})