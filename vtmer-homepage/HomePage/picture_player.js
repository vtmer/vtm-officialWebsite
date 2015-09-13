window.onload = function() {

	var picList = $('.list');
	var mark = $('.click_mark');
	var oBtnLeft = document.getElementById('btn_left');
	var oBtnRight = document.getElementById('btn_right');
	var iThis = 1;		//当前图片索引值
	var next = 0;		//当前图片的下一张，用于循环计数
	var zIndex = 5;		//层级
	var timer = null; //定时器

	function resetAttr() {	//没每个list都保存其width, height, left, top, opacity属性，动画完成时重新载入属性值
		for(var i = 0; i<picList.length; i++) {
			picList[i].width = picList[i].offsetWidth;
			picList[i].height = picList[i].offsetHeight;
			picList[i].left = picList[i].offsetLeft;
			picList[i].top = picList[i].offsetTop;
			picList[i].opacity = $(picList[i].getElementsByTagName('div')[0]).css('opacity');
		}
		oBtnLeft.onclick = function() {run("right")};
		oBtnRight.onclick = function() {run("left")};
		mark[0].onclick = function() {run("right")};
		mark[1].onclick = function() {run("left")};
	}

	resetAttr();
	function run(direction) {	//传入方向参数：left/right
		mark[0].onclick = mark[1].onclick = oBtnLeft.onclick = oBtnRight.onclick = null;	//	当动画正在进行时取消button的click事件
		iThis = (direction == "left")?((iThis == 2)?0:iThis+1):((iThis == 0)?2:iThis-1);
		picList[iThis].style.zIndex = zIndex;
		mark[0].style.zIndex = mark[1].style.zIndex = zIndex;
		for(var i = 0; i<picList.length; i++) {
			next = (direction == "left")?((i == 0)?2:i-1):((i == 2)?0:i+1);
			$(picList[i].getElementsByTagName('div')[0]).animate({opacity:picList[next].opacity}, 400)
			$(picList[i]).animate({ top: picList[next].top,
									left: picList[next].left,
									width: picList[next].width,
									height: picList[next].height}, 400, resetAttr);
		}
		zIndex++;
	}
	timer = setInterval(function(){run("left")}, 2000);
	document.getElementById('player').onmouseover = function() {
		clearInterval(timer);
	}
	document.getElementById('player').onmouseout = function() {
		timer = setInterval(function(){run("left")}, 2000);
	}
}