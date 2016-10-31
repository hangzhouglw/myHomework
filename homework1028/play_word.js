/**
 * Created by Administrator on 2016/10/29 0029.
 */
(function(){
    function inplay(list){
        "use strict";
        // console.log(list);
        var k=0;
        var indiv=document.getElementById("inChinese");
        var inplayer=document.getElementById("player");
        var list_time;
        var inlist=list;

        for(var key in inlist){
            console.log(inlist[key].time);
        }
        //console.log(inlist);
        setInterval(function(){
            var now_time=inplayer.currentTime;
            // console.log(now_time);
            // console.log(inlist.length);
            if(k<inlist.length) {
                // console.log(k);
                //console.log(list_time);
                var s=parseInt(inlist[k].time.substr(3,2));
                var m=parseInt(inlist[k].time.substr(0,2));
                console.log(s,"+",m);
                list_time=s+m*60;
                if (now_time > list_time) {
                    indiv.innerHTML=inlist[k].song;
                    k++;
                }
            }
        },1000);
}

window.inplay=inplay;

})();