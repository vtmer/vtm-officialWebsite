            function toolbar(el,v) {
                el=document.getElementById(el);
                v=document.getElementById(v);
                var elTop = el.offsetTop;
                var sTop = 0;
                window.onscroll = function () {
                    sTop= document.body.scrollTop || document.documentElement.scrollTop;
                    if (sTop > elTop) {
                        el.style.top = "0";
                        el.style.position = "fixed";
                        el.style.backgroundColor="#18232F";
                        v.style.backgroundColor="#18232F";
                    } else {
                        el.style.top = elTop + 'px';
                        el.style.position = "absolute";
                        el.style.backgroundColor="#1C2836";
                        v.style.backgroundColor="#1C2836";
                    }
                }
            }
