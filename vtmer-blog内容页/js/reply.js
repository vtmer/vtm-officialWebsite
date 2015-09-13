		
function textArea(area) {
		var textArea = document.getElementById(area);


        //评论获取焦点
        textArea.onfocus = function () {
            this.value = this.value == '说点什么吧......' ? '' : this.value;
        }

        //评论失去焦点
        textArea.onblur = function () {
            var me = this;
            var val = me.value;
            if (val == '') {
                timer = setTimeout(function () {
                    me.value = '说点什么吧......';
                }, 200);
            }
        }
}