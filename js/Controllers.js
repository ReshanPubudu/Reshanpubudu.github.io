/**
 * Created by Reshan Pubudu on 9/11/2017.
 */
var peases=["#a-1","#b-1","#c-1","#d-1","#e-1","#f-1","#g-1","#h-1",
    "#a-2","#b-2","#c-2","#d-2","#e-2","#f-2","#g-2","#h-2",
    "#a-7","#b-7","#c-7","#d-7","#e-7","#f-7","#g-7","#h-7",
    "#a-8","#b-8","#c-8","#d-8","#e-8","#f-8","#g-8","#h-8"];

var guested =[];
var rodBlck =[];
var clicked = null;

function gestWhitePawn(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    if(num==2){
        $("#"+String.fromCharCode(uni)+"-"+ ++num).css("background-color","rgba(181,255,30,0.67)");
        guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
        $("#"+String.fromCharCode(uni)+"-"+ ++num).css("background-color","rgba(181,255,30,0.67)");
        guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
    }else{
        $("#"+String.fromCharCode(uni)+"-"+ ++num).css("background-color","rgba(181,255,30,0.67)");
        guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
    }
}

function gestBlackPawn(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    if(num==7) {
        while(num--!=5){
            $("#"+String.fromCharCode(uni)+"-"+ num).css("background-color","rgba(181,255,30,0.67)");
            guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
        }
//                guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
//                $("#"+String.fromCharCode(uni)+"-"+ --num).css("background-color","rgba(181,255,30,0.67)");
//                guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
    }else{
        $("#"+String.fromCharCode(uni)+"-"+ --num).css("background-color","rgba(181,255,30,0.67)");
        guested[g++] = "#"+String.fromCharCode(uni)+"-"+ num ;
    }
}

function gestRook(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id = (i==uni || j==num ? ("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num){
                        rodBlck[rb++] = id;
                        continue L1;
                    }
                }
                $(id).css("background-color","rgba(181,255,30,0.67)");
                if(id!="#"+String.fromCharCode(uni)+"-"+num) guested[g++] = id;
            }
        }
    }
}

function gestKnight(ev){
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id =((i==uni+2&&j==num+1)||(i==uni+1&&j==num+2)||(i==uni+2&&j==num-1)||(i==uni+1&&j==num-2)||(i==uni-2&&j==num+1)||(i==uni-1&&j==num+2)||(i==uni-2&&j==num-1)||(i==uni-1&&j==num-2)||("#"+String.fromCharCode(i)+"-"+j=="#"+String.fromCharCode(uni)+"-"+num)?("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num){
                        rodBlck[rb++] = id;
                        continue L1;
                    }
                }
                $(id).css("background-color","rgba(181,255,30,0.67)");
                if(id!="#"+String.fromCharCode(uni)+"-"+num) guested[g++] = id;
            }
        }
    }
}

function gestBishop(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id =((uni-i==num-j)||(uni-i==-(num-j))? ("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num){
                        rodBlck[rb++] = id;
                        continue L1;
                    }
                }
                $(id).css("background-color","rgba(181,255,30,0.67)");
                if(id!="#"+String.fromCharCode(uni)+"-"+num) guested[g++] = id;
            }
        }
    }
}

function gestQueen(ev){
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    for(var i=97;i<105;i++) {
        L1:for (var j = 1; j < 9; j++) {
            var id = (i==uni||j==num||(uni-i==num-j)||(uni-i==-(num-j))?("#"+String.fromCharCode(i)+"-"+j):null);
            if (id != null) {
                for (var x = 0; x < peases.length; x++) {
                    if(peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num){
                        rodBlck[rb++] = id;
                        continue L1;
                    }
                }
                $(id).css("background-color", "rgba(181,255,30,0.67)");
                if (id != "#" + String.fromCharCode(uni) + "-" + num) guested[g++] = id;
            }
        }
    }
}

function gestKing(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; guested =[]; rodBlck =[];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id = ((num-j==1||num-j==-1||num==j)&&(uni-i==1||uni-i==-1||uni==i)? ("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num){
                        rodBlck[rb++] = id;
                        continue L1;
                    }
                }
                $(id).css("background-color","rgba(181,255,30,0.67)");
                if(id!="#"+String.fromCharCode(uni)+"-"+num) guested[g++] = id;
            }
        }
    }
}

function resetBackground(){
    $(".sqr-white").css("background-color","whitesmoke");
    $(".sqr-white").css("box-shadow","inset 0 0 1em rgba(39,210,99,0.67)");
    $(".sqr-black").css("background-color","rgba(196,146,15,0.67)");
    $(".sqr-black").css("box-shadow","inset 0 0 1em rgba(112,32,4,0.67)");
}

function mouseClick(ev) {
    resetBackground();
    if(clicked==null || $("#"+ev.id).children("img").prop("id")!=null){
        clicked = $("#"+ev.id).children("img").prop("id");
        var id = $("#"+ev.id).prop('id');
        var string= id.match(/[A-z]/g).join("");
        var uni = parseInt(string.charCodeAt(0));
        var num= parseInt(id.match(/\d/g));
        $(id).css("background-color","rgba(181,255,30,0.67)");
        var arr = [uni,num];
        switch ($("#"+ev.id).children().prop("id")) {
            case "white-rook-a-1"   :
            case "white-rook-h-1"   :
            case "blk-rook-a-8"     :
            case "blk-rook-h-8"     : gestRook(arr); break;
            case "white-knight-b-1" :
            case "white-knight-g-1" :
            case "blk-knight-b-8"   :
            case "blk-knight-g-8"   : gestKnight(arr); break;
            case "white-bishop-c-1" :
            case "white-bishop-f-1" :
            case "blk-bishop-c-8"   :
            case "blk-bishop-f-8"   : gestBishop(arr); break;
            case "white-king-d-1"   :
            case "blk-king-e-8"     : gestKing(arr); break;
            case "white-queen-e-1"  :
            case "blk-queen-d-8"    : gestQueen(arr); break;
            case "white-pawn-a-2"   :
            case "white-pawn-b-2"   :
            case "white-pawn-c-2"   :
            case "white-pawn-d-2"   :
            case "white-pawn-e-2"   :
            case "white-pawn-f-2"   :
            case "white-pawn-g-2"   :
            case "white-pawn-h-2"   : gestWhitePawn(arr); break;
            case "blk-pawn-a-7"     :
            case "blk-pawn-b-7"     :
            case "blk-pawn-c-7"     :
            case "blk-pawn-d-7"     :
            case "blk-pawn-e-7"     :
            case "blk-pawn-f-7"     :
            case "blk-pawn-g-7"     :
            case "blk-pawn-h-7"     : gestBlackPawn(arr); break;
        }
    }else{
        for(var x =0;x<guested.length;x++) {
            if(guested[x]=="#" + ev.id){
                var peas = $("#" + clicked).clone();
                var oldId = "#"+$("#"+clicked).parent("div").prop("id");
                $("#"+clicked).remove();
                $("#"+ev.id).append(peas);
                for(var y=0;y<peases.length;y++){
                    if(peases[y]==oldId) {
                        peases[y] = "#"+ev.id;
                        break;
                    }
                }
                clicked = null;
                break;
            }
        }
    }
}
