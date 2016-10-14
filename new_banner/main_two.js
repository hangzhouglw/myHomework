
(function () {
var timer;
    function showView() {
        var content_two = document.getElementById("content_two");

        var list = [{imagePath: "images/1.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/2.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/3.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/4.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/5.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/6.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/7.jpg", toUrl: "https://www.baidu.com"}];
        for (var i = 0; i < list.length; i++) {
            var img = document.createElement("img");
            img.src = list[i].imagePath;
            img.id = i + 1 ;
            img.className = "imgs";
            content_two.appendChild(img);
        }
        imgStyle();

        //console.log(img.id="aa");
    }


    function imgStyle(){
        var i = document.getElementById("1");
        i.style.position = "absolute";
        i.style.left = "318px";
        i.style.top = 0;
        i.style.zIndex = 10;
        i.style.width = "224px";
        i.style.transition = "all .2s";



        var ii = document.getElementById("2");
        ii.style.position = "absolute";
        ii.style.left = "147px";
        ii.style.top = "11.5px";
        ii.style.zIndex = 8;
        ii.style.width = "200px";
        ii.style.transition = "all .2s";



        var iii = document.getElementById("3");
        iii.style.position = "absolute";
        iii.style.left = "0px";
        iii.style.top = "31px";
        iii.style.zIndex = 6;
        iii.style.width = "176px";
        iii.style.transition = "all .2s";



        var iv = document.getElementById("4");
        iv.style.position = "absolute";
        iv.style.left = "683px";
        iv.style.top = "31px";
        iv.style.zIndex = 6;
        iv.style.width = "176px";
        iv.style.transition = "all .2s";



        var v = document.getElementById("5");
        v.style.position = "absolute";
        v.style.left = "513px";
        v.style.top = "11.5px";
        v.style.zIndex = 8;
        v.style.width = "200px";
        v.style.transition = "all .2s";


        var vi = document.getElementById("6");
        vi.style.position = "absolute";
        vi.style.left = "513px";
        vi.style.top = "31px";
        vi.style.zIndex = 4;
        vi.style.width = "176px";
        vi.style.transition = "all .2s";

        var vii = document.getElementById("7");
        vii.style.position = "absolute";
        vii.style.left = "318px";
        vii.style.top = "31px";
        vii.style.zIndex = 4;
        vii.style.width = "176px";
        vii.style.transition = "all .2s";


        var black_left = document.getElementById("black_left");
        var black_right = document.getElementById("black_right");

        function startTimeOut(){
            //imgStyle();
             timer = setTimeout(function () {
                i.id = "2";
                ii.id = "3";
                iii.id = "6";
                iv.id = "5";
                v.id = "1";
                vi.id = "7";
                 vii.id = "4";
                imgStyle();
                //this.style.transition="all 1s";
            },2500);
        }
        //console.log(i);
        startTimeOut();

        function twoPre(){
            var two_pre = document.getElementById("two_pre");
            two_pre.onmousemove = function(){
                clearTimeout(timer);
                this.style.fontWeight = "bold";
                this.style.border = "3px solid";
            }
            two_pre.onclick = function(){
                i.id = "5";
                ii.id = "1";
                iii.id = "2";
                iv.id = "7";
                v.id = "4";
                vi.id = "3";
                vii.id = "6";
                imgStyle();
            }
            two_pre.onmouseout = function () {
                startTimeOut();
                this.style.fontWeight = "normal";
                this.style.border = "1px solid";
            }
        }
        twoPre();

        function twoNext(){
            var two_next = document.getElementById("two_next");
            two_next.onmousemove = function(){
                clearTimeout(timer);
                this.style.fontWeight = "bold";
                this.style.border = "3px solid";
            };
            two_next.onclick = function(){
                i.id = "2";
                ii.id = "3";
                iii.id = "6";
                iv.id = "5";
                v.id = "1";
                vi.id = "7";
                vii.id = "4";
                imgStyle();
            };
            two_next.onmouseout = function () {
                startTimeOut();
                this.style.fontWeight = "normal";
                this.style.border = "1px solid";
            }
        }
        twoNext();

    }



    showView();
})();
