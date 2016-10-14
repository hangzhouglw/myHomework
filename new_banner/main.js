/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function () {
    var index = 0;
    var list;
    var timer;
    var rightVal = 15;

    function bgImageView(imagePath,toUrl){
        var bgImageView = document.createElement("a");
        bgImageView.href = toUrl;
        bgImageView.className = "bgImageView";
        var bgImage = document.createElement("img");
        bgImage.src = imagePath;
        bgImageView.appendChild(bgImage);
        return bgImageView;
    }

    function imageShowList(){
        var datas = [{imagePath:"images/11.jpg",toUrl:"http://www.baidu.com"},
            {imagePath:"images/22.jpg",toUrl:"http://www.baidu.com"},
            {imagePath:"images/33.jpg",toUrl:"http://www.baidu.com"},
            {imagePath:"images/44.jpg",toUrl:"http://www.baidu.com"}
            ];
        if(!list){
            list = [];
            for(var i=0;i<datas.length;i++){
                var item = bgImageView(datas[i].imagePath,datas[i].toUrl);
                list.push(item);
            }
        }
        return list;
    }

    function showImage(){
        var item = imageShowList()[index];
        document.getElementById("content").appendChild(item);

        document.getElementById("pre").onclick = function () {
            pre();
        }
        document.getElementById("next").onclick = function () {
            next();
        };
        //创建小圆点
        for(var i=0;i<imageShowList().length;i++){

            var choosers = document.createElement("div");
            choosers.className = "choosers";
            choosers.name = i;
            if(i === 0){
                choosers.id = "selected";
                choosers.style.background = "#666";
            }
            choosers.style.position = "absolute";
            choosers.style.right = rightVal+"%";
            rightVal+= -3;
            document.getElementById("content").appendChild(choosers);

            choosers.onclick = function () {
                index = this.name-1;
                //console.log(index);
                next();
            }

        }

    }

    function pre(){
        index --;
        if(index === -1){
            index = imageShowList().length-1;
        }
        var preItem = document.getElementsByClassName("bgImageView")[0];
        var content = document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageShowList()[index]);
        updateChoosers();
    }

    function next(){
        index ++;
        if(index === imageShowList().length){
            index = 0;
        }
        var preItem = document.getElementsByClassName("bgImageView")[0];
        var content = document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageShowList()[index]);

        updateChoosers();
    }

    function startTimeout(){
        if(timer){
            clearInterval(timer);
        }
        timer = setInterval(next,2000)

    }

    function addMouseEvent(view){
        view.onmousemove = function () {
            clearInterval(timer);
            document.getElementById("next").style.display = "block";
            document.getElementById("pre").style.display = "block";
        }
        view.onmouseout = function () {
            startTimeout();
            document.getElementById("next").style.display = "none";
            document.getElementById("pre").style.display = "none";
        }
    }

    function updateChoosers() {
        var selected = document.getElementById("selected");

        selected.id = " ";
        document.getElementsByClassName("choosers")[index].id = "selected";
        for (var i = 0; i < imageShowList().length; i++) {
            document.getElementsByClassName("choosers")[i].style.background = "#fff";
            //chooser[i].id = "selected";
        }
        document.getElementById("selected").style.background = "#666";
    }

    function innit(){
        showImage();
        startTimeout();
        addMouseEvent(document.getElementById("content"));
    }
    innit();
})();