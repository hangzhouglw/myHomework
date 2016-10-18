/**
 * Created by Administrator on 2016/10/17 0017.
 */
(function () {

    var content = document.getElementById("content");
    for(var i=0;i<69;i++){
        var newDiv = document.createElement("div");
        newDiv.className = "newDiv";
        newDiv.id = i;
        newDiv.style.width = "25px";
        newDiv.style.height = "25px";
        newDiv.style.border = "1px solid #ff8000";
        newDiv.style.float = "left";
        newDiv.style.margin=  "0.82px";
        newDiv.style.borderRadius=  "3px";
        newDiv.style.cursor = "pointer";
        content.appendChild(newDiv);
    }
    $("#0").html("0");
    $("#1").html("1");
    $("#2").html("2");
    $("#3").html("3");
    $("#4").html("4");
    $("#5").html("5");
    $("#6").html("6");
    $("#7").html("7");
    $("#8").html("8");
    $("#9").html("9");
    $("#10").html("a");
    $("#11").html("b");
    $("#12").html("c");
    $("#13").html("d");
    $("#14").html("e");
    $("#15").html("f");
    $("#16").html("g");
    $("#17").html("h");
    $("#18").html("i");
    $("#19").html("j");
    $("#20").html("k");
    $("#21").html("l");
    $("#22").html("m");
    $("#23").html("n");
    $("#24").html("o");
    $("#25").html("p");
    $("#26").html("q");
    $("#27").html("r");
    $("#28").html("s");
    $("#29").html("t");
    $("#30").html("u");
    $("#31").html("v");
    $("#32").html("w");
    $("#33").html("x");
    $("#34").html("y");
    $("#35").html("z");
    $("#36").html(",");
    $("#37").html(".");
    $("#38").html("/");
    $("#39").html("?");

    $("#OK").html("确&nbsp;定");
    $("#OK").css({height:"25px",width:"110px",background:"#d94600",lineHeight:"25px",color:"#fff",position:"absolute",top:"141px",left:"259px"});
    $("#delete").html("删&nbsp;除");
    $("#delete").css({height:"25px",width:"54px",background:"#ff8000",lineHeight:"25px",color:"#fff",position:"absolute",top:"141px",left:"373px"});
    var a="" ;
    $(".newDiv").on("mousemove", function (e) {
       this.style.backgroundColor = "#ff8000";
    });
    $(".newDiv").on("mouseout", function (e) {
        this.style.backgroundColor = "#fff";
    });
    $(".newDiv").on("click", function (e) {
        var txt = $(this).html();
        a = a+txt;
        $("input").val(a);
        $("#OK").on("click", function (e) {
            a="";
        });
        //$("#delete").click(function (e) {
        //    a = "";
        //});
    });
    var changeX = true;
    var change = $("#changeBigOrSmall").on("click", function (e) {

        if(changeX){
            $("#10").html("A");
            $("#11").html("B");
            $("#12").html("C");
            $("#13").html("D");
            $("#14").html("E");
            $("#15").html("F");
            $("#16").html("G");
            $("#17").html("H");
            $("#18").html("I");
            $("#19").html("J");
            $("#20").html("K");
            $("#21").html("L");
            $("#22").html("M");
            $("#23").html("N");
            $("#24").html("O");
            $("#25").html("P");
            $("#26").html("Q");
            $("#27").html("R");
            $("#28").html("S");
            $("#29").html("T");
            $("#30").html("U");
            $("#31").html("V");
            $("#32").html("W");
            $("#33").html("X");
            $("#34").html("Y");
            $("#35").html("Z");
        }else{
            $("#10").html("a");
            $("#11").html("b");
            $("#12").html("c");
            $("#13").html("d");
            $("#14").html("e");
            $("#15").html("f");
            $("#16").html("g");
            $("#17").html("h");
            $("#18").html("i");
            $("#19").html("j");
            $("#20").html("k");
            $("#21").html("l");
            $("#22").html("m");
            $("#23").html("n");
            $("#24").html("o");
            $("#25").html("p");
            $("#26").html("q");
            $("#27").html("r");
            $("#28").html("s");
            $("#29").html("t");
            $("#30").html("u");
            $("#31").html("v");
            $("#32").html("w");
            $("#33").html("x");
            $("#34").html("y");
            $("#35").html("z");
        }
        changeX = !changeX;

    });

    $("#OK").on("click", function (e) {
        $("input").val("");
    });

    $("input").click(function (e) {
        $("#content").show();
    }).keydown(function (e) {
        //console.log(e);
        e.preventDefault();
    });

    $("#hide").click(function (e) {
        $("#content").hide();
    });
    $("#delete").click(function (e) {
        var input = $("input")[0];
        input.value = input.value.substring(0,input.value.length-1);
    });
})();