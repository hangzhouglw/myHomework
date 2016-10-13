/**
 * Created by Administrator on 2016/10/13 0013.
 */
(function () {
var timer;
    function showView() {
        var content = document.getElementById("content");

        var list = [{imagePath: "images/1.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/2.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/3.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/4.jpg", toUrl: "https://www.baidu.com"},
            {imagePath: "images/5.jpg", toUrl: "https://www.baidu.com"}];
        for (var i = 0; i < list.length; i++) {
            var img = document.createElement("img");
            var img_div = document.createElement("div");
            img.src = list[i].imagePath;
            img.id = i + 1 ;
            img_div.id = i + 1+"div" ;
            img.className = "imgs";
            content.appendChild(img);
            content.appendChild(img_div);
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

        var div_ii = document.getElementById("2div");
        div_ii.style.position = "absolute";
        div_ii.style.left = "147px";
        div_ii.style.top = "11.5px";
        div_ii.style.zIndex = 9;
        div_ii.style.width = "200px";
        div_ii.style.height = "257.14px";
        div_ii.style.background = "#000";
        div_ii.style.opacity = .6;

        var ii = document.getElementById("2");
        ii.style.position = "absolute";
        ii.style.left = "147px";
        ii.style.top = "11.5px";
        ii.style.zIndex = 8;
        ii.style.width = "200px";

        var div_iii = document.getElementById("3div");
        div_iii.style.position = "absolute";
        div_iii.style.left = "0px";
        div_iii.style.top = "31px";
        div_iii.style.zIndex = 7;
        div_iii.style.width = "176px";
        div_iii.style.height = "226.28px";
        div_iii.style.background = "#000";
        div_iii.style.opacity = .6;

        var iii = document.getElementById("3");
        iii.style.position = "absolute";
        iii.style.left = "0px";
        iii.style.top = "31px";
        iii.style.zIndex = 6;
        iii.style.width = "176px";

        var div_iv = document.getElementById("4div");
        div_iv.style.position = "absolute";
        div_iv.style.left = "713px";
        div_iv.style.top = "31px";
        div_iv.style.zIndex = 7;
        div_iv.style.width = "176px";
        div_iv.style.height = "226.28px";
        div_iv.style.background = "#000";
        div_iv.style.opacity = .6;

        var iv = document.getElementById("4");
        iv.style.position = "absolute";
        iv.style.left = "713px";
        iv.style.top = "31px";
        iv.style.zIndex = 6;
        iv.style.width = "176px";

        var div_v = document.getElementById("5div");
        div_v.style.position = "absolute";
        div_v.style.left = "513px";
        div_v.style.top = "11.5px";
        div_v.style.zIndex = 9;
        div_v.style.width = "200px";
        div_v.style.height = "257.14px";
        div_v.style.background = "#000";
        div_v.style.opacity = .6;

        var v = document.getElementById("5");
        v.style.position = "absolute";
        v.style.left = "513px";
        v.style.top = "11.5px";
        v.style.zIndex = 8;
        v.style.width = "200px";
        function startTimeOut(){
            //imgStyle();
             timer = setTimeout(function () {
                i.id = "2";
                ii.id = "3";
                iii.id = "4";
                iv.id = "5";
                v.id = "1";
                imgStyle();
                //this.style.transition="all 1s";
            },2500);
        }
        //console.log(i);
        startTimeOut();

        function pre(){
            var pre = document.getElementById("pre");
            pre.onmousemove = function(){
                clearTimeout(timer);
            }
            pre.onclick = function(){
                i.id = "5";
                ii.id = "1";
                iii.id = "2";
                iv.id = "3";
                v.id = "4";
                imgStyle();
            }
            pre.onmouseout = function () {
                startTimeOut();
            }
        }
        pre();

        function next(){
            var next = document.getElementById("next");
            next.onmousemove = function(){
                clearTimeout(timer);
            };
            next.onclick = function(){
                i.id = "2";
                ii.id = "3";
                iii.id = "4";
                iv.id = "5";
                v.id = "1";
                imgStyle();
            };
            next.onmouseout = function () {
                startTimeOut();
            }
        }
        next();

    }



    showView();
})();
