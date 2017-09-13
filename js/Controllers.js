/**
 * Created by Reshan Pubudu on 9/11/2017.
 */
var peases=["#a-1","#b-1","#c-1","#d-1","#e-1","#f-1","#g-1","#h-1",
    "#a-2","#b-2","#c-2","#d-2","#e-2","#f-2","#g-2","#h-2",
    "#a-7","#b-7","#c-7","#d-7","#e-7","#f-7","#g-7","#h-7",
    "#a-8","#b-8","#c-8","#d-8","#e-8","#f-8","#g-8","#h-8"];

var tempGuested =[];
var guested = [];
var rodBlck =[];
var clicked = null;

function gestWhitePawn(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
    var cnt = 0;
    $("#"+String.fromCharCode(uni)+"-"+ num).css("background-color","rgba(181,255,30,0.67)");
    if(num==2) cnt=num+2; else cnt=num+1;
    L1:while(num++!=cnt){
        var id = "#"+String.fromCharCode(uni)+"-"+ num;
        for(var x =0;x<peases.length;x++){
            if(peases[x]==id){
                rodBlck[rb++] = id;
                continue L1;
            }
        }
        $(id).css("background-color","rgba(181,255,30,0.67)");
        tempGuested[g++] = id;
    }guested = tempGuested;
}

function gestBlackPawn(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
    var cnt = 0;
    $("#"+String.fromCharCode(uni)+"-"+ num).css("background-color","rgba(181,255,30,0.67)");
    if(num==7) cnt=num-2; else cnt=num-1;
    L1:while(num--!=cnt){
        var id = "#"+String.fromCharCode(uni)+"-"+ num;
        for(var x =0;x<peases.length;x++){
            if(peases[x]==id){
                rodBlck[rb++] = id;
                continue L1;
            }
        }
        $(id).css("background-color","rgba(181,255,30,0.67)");
        tempGuested[g++] = id;
    }guested = tempGuested;
}

function gestRook(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
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
                if(id!="#"+String.fromCharCode(uni)+"-"+num) tempGuested[g++] = id;
            }
        }
    }
    gestRookMoved("#"+String.fromCharCode(uni)+"-"+num);
}

function gestKnight(ev){
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
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
                if(id!="#"+String.fromCharCode(uni)+"-"+num) tempGuested[g++] = id;
            }
        }
    }guested = tempGuested;
}

function gestBishop(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
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
                // $(id).css("background-color", "rgba(181,255,30,0.67)");
                if(id!="#"+String.fromCharCode(uni)+"-"+num) tempGuested[g++] = id;
            }
        }
    }
    // guested = tempGuested;
    gestBishopMoved("#"+String.fromCharCode(uni)+"-"+num);
}
console
function gestQueen(ev){
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
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
                if (id != "#" + String.fromCharCode(uni) + "-" + num) tempGuested[g++] = id;
            }
        }
    }guested = tempGuested;
}

function gestKing(ev) {
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
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
                if(id!="#"+String.fromCharCode(uni)+"-"+num) tempGuested[g++] = id;
            }
        }
    }
    guested = tempGuested;
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
        var arr = idBreaker("#"+ev.id);
        $("#"+ev.id).css("background-color","rgba(181,255,30,0.67)");
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
        guested= [];
    }
}

function idBreaker(ev){
    var string= ev.match(/[A-z]/g).join("");
    var uni = parseInt(string.charCodeAt(0));
    var num= parseInt(ev.match(/\d/g));
    return [uni,num];
}

function gestRookMoved(ev) {
    var id = idBreaker(ev);
    var topBlk = 9, botmBlk= 0, left = 96,right = 105, g =0; guested = [];
    for(var i=0;i<rodBlck.length;i++) {
        var blckId = idBreaker(rodBlck[i]);
        if (id[1] < blckId[1] && topBlk >= blckId[1]) topBlk = blckId[1];
        if (id[1] > blckId[1] && botmBlk <= blckId[1]) botmBlk = blckId[1];
        if (id[0] > blckId[0] && left <= blckId[0]) left = blckId[0];
        if (id[0] < blckId[0] && right >= blckId[0]) right = blckId[0];
    }
    for(var j=0;j<tempGuested.length;j++){
        var tempId = idBreaker(tempGuested[j]);
        if((id[0]==tempId[0])&&(tempId[1]<topBlk&&tempId[1]>botmBlk)) guested[g++]=tempGuested[j];
        else if((id[1]==tempId[1])&&(tempId[0]<right&&tempId[0]>left)) guested[g++]=tempGuested[j];
    }
    selectAllMovedSqrs();
}

function gestBishopMoved(ev) {
    var id=idBreaker(ev);
    var g =0; guested = [];
    for(var i=0;i<rodBlck.length;i++){
        var rdBlk=idBreaker(rodBlck[i]);
        for(var j=0;j<tempGuested.length;j++){
            var tempId = idBreaker(tempGuested[j]);
            if(rdBlk[0]>id[0]&&rdBlk[1]>id[1]&&tempId[0]<rdBlk[0]&&tempId[1]<rdBlk[1]&&tempId[0]>id[0]&&tempId[1]>id[1]) guested[g++]=tempGuested[j];
            else if(rdBlk[0]<id[0]&&rdBlk[1]>id[1]&&tempId[0]>rdBlk[0]&&tempId[1]<rdBlk[1]&&tempId[0]<id[0]&&tempId[1]>id[1]) guested[g++]=tempGuested[j];
            else if(rdBlk[0]<id[0]&&rdBlk[1]<id[1]&&tempId[0]>rdBlk[0]&&tempId[1]>rdBlk[1]&&tempId[0]<id[0]&&tempId[1]<id[1]) guested[g++]=tempGuested[j];
            else if(rdBlk[0]>id[0]&&rdBlk[1]<id[1]&&tempId[0]<rdBlk[0]&&tempId[1]>rdBlk[1]&&tempId[0]>id[0]&&tempId[1]<id[1]) guested[g++]=tempGuested[j];
            else if((tempId[0]>id[0]&&tempId[1]>id[1])&&(rdBlk[0]>id[0]&&rdBlk[1]>id[1]))/*||(tempId[0]<id[0]&&tempId[1]>id[1])||(tempId[0]<id[0]&&tempId[1]<id[1])||(tempId[0]>id[0]&&tempId[1]<id[1]))*/ guested[g++]=tempGuested[j];
        }
    }
    selectAllMovedSqrs();
    console.log("select "+guested);
}

function selectAllMovedSqrs() {
    for(var i=0;i<guested.length;i++){
        $(guested[i]).css("background-color","rgba(181,255,30,0.67)");
    }
}
