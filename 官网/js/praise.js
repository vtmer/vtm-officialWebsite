function praiseBox(box) {
	    	var praisesTotal = box.getElementsByClassName('praises-total')[0];
	        var oldTotal = parseInt(praisesTotal.getAttribute('total'));
	        var my=parseInt(praisesTotal.getAttribute('my'));
	        var newTotal;
	        if (my == 0) {
	            newTotal = oldTotal + 1;
	            my+=1;
	            praisesTotal.setAttribute('total', newTotal);
	            praisesTotal.setAttribute('my',my);
	            praisesTotal.innerHTML = newTotal;
	        }
	        else {
	            newTotal = oldTotal - 1;
	            my-=1;
	            praisesTotal.setAttribute('total', newTotal);
	            praisesTotal.setAttribute('my',my);
	            praisesTotal.innerHTML = newTotal;
	        }
	        praisesTotal.style.display = (newTotal == 0) ? 'none' : 'block';}	