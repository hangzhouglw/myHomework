/**
 * Created by Administrator on 2016/10/10 0010.
 */

(function () {
    //封装轮播视图的方法
    /*
    * imageView 封装轮播视图中 单个视图的方法
    * imagePath 图片路径
    * toUrl 链接地址
    * */
    var list;
    var index = 0;
    var timer;

    function imageView(imagePath,toUrl){
        //创建一个背景图（a）  承载图片
        var backgroundImageView = document.createElement("a");
        backgroundImageView.href = toUrl;
        var image = document.createElement("img");
        image.src = imagePath;
        backgroundImageView.appendChild(image);
        backgroundImageView.className = "imageView";
        return backgroundImageView;
    }

    //装载 所有轮播视图的数组
    function imageViewList(){
        //图片资源的数组
        var datas = [{imagePath:"images/1.jpg",toUrl:"https://www.baidu.com"},
            {imagePath:"images/2.jpg", toUrl:"https://www.baidu.com"},
            {imagePath:"images/3.jpg",toUrl:"https://www.baidu.com"},
            {imagePath:"images/4.jpg", toUrl:"https://www.baidu.com"},
            {imagePath:"images/5.jpg", toUrl:"https://www.baidu.com"},
            {imagePath:"images/6.jpg", toUrl:"https://www.baidu.com"},
            {imagePath:"images/7.jpg", toUrl:"https://www.baidu.com"}];
        //图片视图的数组
        if(!list){
            //如果数组不存在，初始化数组
            list = [];
            for(var i=0;i<datas.length;i++){
                //创建图片视图  包含数据的元素
                var item = imageView(datas[i].imagePath,datas[i].toUrl);
                list.push(item);
            }
        }

        return list;
    }

    //默认显示的界面
    function showImageView(){
        var item = imageViewList()[index];

        document.getElementById("carouselContent").appendChild(item);

        //创建小圆点
        for(var i=0;i<imageViewList().length;i++){
            var choosers = document.createElement("button");
            var chooser = document.getElementById("chooser");

            choosers.className = "choosers";
            choosers.textContent = i+1;
            chooser.appendChild(choosers);
            if(i === 0){
                choosers.id = "selected";
                choosers.style.background = "#666";
            }
            addMouseEvent(choosers);
            choosers.onclick = function () {
                index = this.textContent-2;
                next();
            };
        }


        document.getElementById("nextButton").onclick = function () {
            next();
        }
        document.getElementById("preButton").onclick = function () {
            pre();
        }
    }

    function pre(){
        index--;
        if(index === -1){
            index =imageViewList().length-1;
        }
        var preItem = document.getElementsByClassName("imageView")[0];
        var content = document.getElementById("carouselContent");
        content.removeChild(preItem);
        content.appendChild(imageViewList()[index]);

        updateChooses();
    }

    function next(){
        //点击下一页 让图片数组的下标自加  就可以找到下一个元素
        index++;
        //如果下标和图片数组个数相同 就表示没有下个元素
        if(index === imageViewList().length){
            //让下标回到第一个元素
            index = 0;
        }
        //移除添加到图片视图内容上的元素
        var preItem = document.getElementsByClassName("imageView")[0];
        var content = document.getElementById("carouselContent");
        content.removeChild(preItem);
        //把新的视图放到容器里面
        content.appendChild(imageViewList()[index]);

        updateChooses();
    }

    document.getElementById("nextButton").onclick = function () {
        next();
    }

    function startTimer(){
        if(timer){
            clearInterval(timer);
        }
        timer = setInterval(next,1500);
    }

    function addMouseEvent(view){
        view.onmouseenter = function(){
            clearInterval(timer);
        }
        view.onmouseout = function(){
            startTimer();
        }
    }
    addMouseEvent(document.getElementById("preButton"));
    addMouseEvent(document.getElementById("nextButton"));
    addMouseEvent(document.getElementById("carouselContent"));


    function updateChooses(){
        var a = document.getElementById("selected");
        a.id = "";
        document.getElementsByClassName("choosers")[index].id="selected";

        for(var i=0;i<imageViewList().length;i++){
            document.getElementsByClassName("choosers")[i].style.background = "#fff";
        }
        document.getElementById("selected").style.background = "#666";
    }



    function init(){
        showImageView();
        startTimer();
    }
    init();
})();