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
var lastMoving = ["peass black","blk-king-e-8"];
var nowMoving = ["peass white","white-king-d-1"];
var checking = "";
var check = "";
var lastMovedPeas=["",""];
var movinHisrory = "";

function mouseClick(id){
    $("#notification").text("");
    SelectOrMove(id);
}

function SelectOrMove(id) {
    resetBackground();
    if((clicked==null&&$("#" + id).children("img").prop("id") != null&&$("#" + id).children("img").prop("class")==nowMoving[0])||
        (clicked!=null&&$("#" + id).children("img").prop("id") != null&&$("#" + id).children("img").prop("class")==nowMoving[0])||
        checking=="checkKing"/*(clicked==null&&$("#" + id).children("img").prop("id") == null&&$("#" + id).children("img").prop("class")!=nowMoving[0])*/){
        clicked = $("#" + id).children("img").prop("id");
        if (clicked != null&&$("#" + id).children("img").prop("class")==nowMoving[0]) $("#" + id).css("background-color", "rgba(181,255,30,1)");
        switch ($("#" + id).children().prop("id")) {
            case "white-rook-a-1"   :
            case "white-rook-h-1"   :
            case "blk-rook-a-8"     :
            case "blk-rook-h-8"     : gestRook(id); break;
            case "white-knight-b-1" :
            case "white-knight-g-1" :
            case "blk-knight-b-8"   :
            case "blk-knight-g-8"   : gestKnight(id); break;
            case "white-bishop-c-1" :
            case "white-bishop-f-1" :
            case "blk-bishop-c-8"   :
            case "blk-bishop-f-8"   : gestBishop(id); break;
            case "white-king-d-1"   :
            case "blk-king-e-8"     : gestKing(id); break;
            case "white-queen-e-1"  :
            case "blk-queen-d-8"    : gestQueen(id); break;
            case "white-pawn-a-2"   :
            case "white-pawn-b-2"   :
            case "white-pawn-c-2"   :
            case "white-pawn-d-2"   :
            case "white-pawn-e-2"   :
            case "white-pawn-f-2"   :
            case "white-pawn-g-2"   :
            case "white-pawn-h-2"   : gestWhitePawn(id); break;
            case "blk-pawn-a-7"     :
            case "blk-pawn-b-7"     :
            case "blk-pawn-c-7"     :
            case "blk-pawn-d-7"     :
            case "blk-pawn-e-7"     :
            case "blk-pawn-f-7"     :
            case "blk-pawn-g-7"     :
            case "blk-pawn-h-7"     : gestBlackPawn(id); break;
        }
    }else if(clicked!=null&&$("#" + id).children("img").prop("id") == null&&$("#"+clicked).prop("class")==nowMoving[0]){
        var cnt=0;
        for (var x = 0; x < guested.length; x++) {
            if (guested[x]=="#"+id) {
                var peas = $("#" + clicked).clone();
                var oldId = "#" + $("#" + clicked).parent("div").prop("id");
                $("#" + clicked).remove();
                $("#" + id).append(peas);
                for (var y = 0; y < peases.length; y++) {
                    if (peases[y]==oldId) {
                        peases[y] = "#" + id;
                        lastMovedPeas =[oldId,"#"+id];
                        break;
                    }
                }
                movinHisrory+=oldId+" -> #"+id+"  ";
                $("#container-row-3-1-1").text(movinHisrory);
                clicked = null;
                var last = nowMoving[0];
                nowMoving[0] = lastMoving[0];
                lastMoving[0] = last;
                break;
            }else cnt++;
        }
        if(guested.length==cnt) clicked=null;
        guested = [];
        checking = "checkKing";
        // SelectOrMove(id);
        checking = "";
    }else if (clicked!=null&&$("#" + id).children("img").prop("id") != null&&$("#"+clicked).prop("class")==nowMoving[0]&&$("#" + id).children("img").prop("class")==lastMoving[0]) {
        for (var x = 0; x < guested.length; x++) {
            if (guested[x] == "#"+id/*&&($("#"+id).children("img").prop("id")!=nowMoving[1])*/) {
                var peas = $("#"+clicked).clone();
                var oldId = "#"+$("#"+clicked).parent("div").prop("id");
                var removeId = $("#"+id).parent("div").prop("id");
                $("#"+clicked).remove();
                $("#"+id).children("img").remove();
                $("#"+id).append(peas);
                for (var y = 0; y < peases.length; y++) {
                    if (peases[y]==oldId) {
                        peases[y] = "removed";
                        lastMovedPeas =[oldId,"#"+id];
                        break;
                    }
                }
                // $("#container2").css("transform","rotate(180deg)")
                $("#container2").rotate({ animateTo:180});
                clicked = null;
                var last = nowMoving[0];
                nowMoving[0] = lastMoving[0];
                lastMoving[0] = last;;
                break;
            }
        }
        guested = [];
        checking = "checkKing";
        // SelectOrMove(id);
        checking = "";
    }
}

function gestWhitePawn(ev1){
    var ev=idBreaker(ev1);
    var uni= ev[0];
    var num = ev[1];
    var g=0, tg=0, rb=0; tempGuested =[]; rodBlck =[]; guested = [];
    var cnt = 0;
    var noCnt = num;
    if(num==2) cnt=num+2; else cnt=num+1;
    while(noCnt++!=cnt){
        var gustId = "#"+String.fromCharCode(uni)+"-"+ noCnt;
        for(var i=0;i<peases.length;i++){
            if(peases[i]!="removed") {
                var peas = idBreaker(peases[i]);
                if (peas[0]==uni&&rodBlck[0]==null&&peas[1]==noCnt) rodBlck[0] = peases[i];
                else if (peas[0]==uni&&rodBlck[0]!=null&&peas[1]==noCnt) {
                    var tempRB = idBreaker(rodBlck[0]);
                    if (tempRB[num] > peas[num]) rodBlck[0] = peases[i];
                }
                if ((peas[0]==uni-1&&peas[1]==num+1)||(peas[0]==uni+1&&peas[1]==num+1)) tempGuested[tg++] = peases[i];
            }
        }
        tempGuested[tg++] = gustId;
    }
    for(var i=0;i<rodBlck.length;i++){
        for(var j=0;j<tempGuested.length;j++){
            var rdBlk=idBreaker(rodBlck[i]);
            var tempGust=idBreaker(tempGuested[j]);
            if((tempGust[1]<rdBlk[1]||tempGust[0]==uni-1||tempGust[0]==uni+1)&&($(tempGuested[j]).children("img").prop("class")!=nowMoving[0]||checking=="checkKing")) guested[g++]=tempGuested[j];
        }
    }
    if(rodBlck[0]==null) guested = tempGuested;
    selectAllMovedSqrs(ev1);
}

function gestBlackPawn(ev1){
    var ev=idBreaker(ev1);
    var uni= ev[0];
    var num = ev[1];
    var g=0, tg=0; tempGuested =[]; rodBlck =[]; guested = [];
    var cnt = 0;
    var noCnt = num;
    if(num==7) cnt=num-2; else cnt=num-1;
    while(noCnt--!=cnt){
        var gustId = "#"+String.fromCharCode(uni)+"-"+ noCnt;
        for(var i=0;i<peases.length;i++){
            if(peases[i]!="removed") {
                var peas = idBreaker(peases[i]);
                if (peas[0]==uni&&rodBlck[0]==null&&peas[1]==noCnt) rodBlck[0] = peases[i];
                else if (peas[0]==uni&&rodBlck[0]!=null&&peas[1]==noCnt) {
                    var tempRB = idBreaker(rodBlck[0]);
                    if (tempRB[num]<peas[num]) rodBlck[0] = peases[i];}
                if ((peas[0]==uni+1&&peas[1]==num-1)||(peas[0]==uni-1&&peas[1]==num-1)) tempGuested[tg++] = peases[i];
            }
        }
        tempGuested[tg++] = gustId;
    }
    for(var i=0;i<rodBlck.length;i++){
        for(var j=0;j<tempGuested.length;j++){
            var rdBlk=idBreaker(rodBlck[i]);
            var tempGust=idBreaker(tempGuested[j]);
            if(tempGust[1]>rdBlk[1]||tempGust[0]==uni-1||tempGust[0]==uni+1&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++]=tempGuested[j];
        }
    }
    if(rodBlck[0]==null) guested = tempGuested;
    selectAllMovedSqrs(ev1);
}

function gestRook(ev1){
    var ev=idBreaker(ev1);
    var uni= ev[0];
    var num = ev[1];
    var g = 0,trb = 0;
    var tempRodBlk =[]; tempGuested =[];
    rodBlck =["#"+String.fromCharCode(uni)+"-8","#a-"+num,"#"+String.fromCharCode(uni)+"-1","#h-"+num];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id = (i==uni || j==num ? ("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[x]!="removed"&&peases[x] == id && id != "#" + String.fromCharCode(uni) + "-" + num) {
                        tempRodBlk[trb++] = id;
                    }
                }
                if(id!="#"+String.fromCharCode(uni)+"-"+num) tempGuested[g++] = id;
            }
        }
    }
    for(var i=0;i<tempRodBlk.length;i++){
        var tempRdBlk=idBreaker(tempRodBlk[i]);
        var topRdBlk=idBreaker(rodBlck[0]);
        var leftRdBlk=idBreaker(rodBlck[1]);
        var botmRdBlk=idBreaker(rodBlck[2]);
        var rightRdBlk=idBreaker(rodBlck[3]);
        if(tempRdBlk[0]==uni&&tempRdBlk[1]>num&&tempRdBlk[1]<topRdBlk[1]) rodBlck[0]=tempRodBlk[i];
        if(tempRdBlk[0]<uni&&tempRdBlk[1]==num&&tempRdBlk[0]>leftRdBlk[0]) rodBlck[1]=tempRodBlk[i];
        if(tempRdBlk[0]==uni&&tempRdBlk[1]<num&&tempRdBlk[1]>botmRdBlk[1]) rodBlck[2]=tempRodBlk[i];
        if(tempRdBlk[0]>uni&&tempRdBlk[1]==num&&tempRdBlk[0]<rightRdBlk[0]) rodBlck[3]=tempRodBlk[i];
    }
    gestRookMoved("#"+String.fromCharCode(uni)+"-"+num);
    selectAllMovedSqrs(ev1);
}

function gestBishop(ev1){
    var ev=idBreaker(ev1);
    var uni= ev[0];
    var num = ev[1];
    var g = 0,trb = 0;
    var tempRodBlk =[]; tempGuested =[];
    rodBlck =[
        (uni!=num+96?uni>num+96?("#h-"+(104-uni+num)):("#"+String.fromCharCode(8-num+uni)+"-8"):"#h-8"),
        (uni!=105-num?uni<105-num?("#a-"+(uni-97+num)):("#"+String.fromCharCode(uni+num-8)+"-8"):"#a-8"),
        (uni!=num+96?uni<num+96?("#a-"+(num-uni+97)):("#"+String.fromCharCode(uni-num+1)+"-1"):"#a-1"),
        (uni!=105-num?uni>105-num?("#h-"+(num+uni-104)):("#"+String.fromCharCode(uni+num-1)+"-1"):"#h-1")];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id =((uni-i==num-j)||(uni-i==-(num-j))? ("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[x]!="removed"&&peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num){
                        tempRodBlk[trb++] = id;
                    }
                }
                if(id!="#"+String.fromCharCode(uni)+"-"+num) tempGuested[g++] = id;
            }
        }
    }
    for(var i=0;i<tempRodBlk.length;i++){
        var tempRdBlk=idBreaker(tempRodBlk[i]);
        var writeTopPart=idBreaker(rodBlck[0]);
        var lefttopPart=idBreaker(rodBlck[1]);
        var leftBtomPart=idBreaker(rodBlck[2]);
        var rightBtmPart=idBreaker(rodBlck[3]);
        if(tempRdBlk[0]>=uni&&tempRdBlk[1]>=num&&tempRdBlk[0]<=writeTopPart[0]&&tempRdBlk[1]<=writeTopPart[1]) rodBlck[0]=tempRodBlk[i];
        if(tempRdBlk[0]<=uni&&tempRdBlk[1]>=num&&tempRdBlk[0]>=lefttopPart[0]&&tempRdBlk[1]<=lefttopPart[1]) rodBlck[1]=tempRodBlk[i];
        if(tempRdBlk[0]<=uni&&tempRdBlk[1]<=num&&tempRdBlk[0]>=leftBtomPart[0]&&tempRdBlk[1]>=leftBtomPart[1]) rodBlck[2]=tempRodBlk[i];
        if(tempRdBlk[0]>=uni&&tempRdBlk[1]<=num&&tempRdBlk[0]<=rightBtmPart[0]&&tempRdBlk[1]>=rightBtmPart[1]) rodBlck[3]=tempRodBlk[i];
    }
    gestBishopMoved("#"+String.fromCharCode(uni)+"-"+num);
    selectAllMovedSqrs(ev1);
}

function gestQueen(ev1){
    var ev=idBreaker(ev1);
    gestRook(ev1);
    var guest1=guested;
    gestBishop(ev1);
    var guest2=guested;
    var g=0; guested = [];
    for(var i=0;i<guest1.length;i++){
        guested[g++]=guest1[i];
    }
    for(var i=0;i<guest2.length;i++){
        guested[g++]=guest2[i];
    }
}

function gestKnight(ev1){
    var ev=idBreaker(ev1);
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0;
    var tempRodBlk =[]; tempGuested =[];
    rodBlck =[];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id =((i==uni+2&&j==num+1)||(i==uni+1&&j==num+2)||(i==uni+2&&j==num-1)||(i==uni+1&&j==num-2)||(i==uni-2&&j==num+1)||(i==uni-1&&j==num+2)||(i==uni-2&&j==num-1)||(i==uni-1&&j==num-2)||("#"+String.fromCharCode(i)+"-"+j=="#"+String.fromCharCode(uni)+"-"+num)?("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if (peases[x]!="removed"&&peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num) {
                        rodBlck[rb++] = id;
                    }
                }
                if(id!="#"+String.fromCharCode(uni)+"-"+num&&$(id).children("img").prop("class")!=nowMoving[0]) tempGuested[g++] = id;
            }
        }
    }
    guested = tempGuested;
    selectAllMovedSqrs(ev1);
}

function gestKing(ev1){
    var ev=idBreaker(ev1);
    var uni= ev[0];
    var num = ev[1];
    var g = 0,rb = 0; tempGuested =[]; rodBlck =[];
    for(var i=97;i<105;i++){
        L1:for(var j=1;j<9;j++){
            var id = ((num-j==1||num-j==-1||num==j)&&(uni-i==1||uni-i==-1||uni==i)? ("#"+String.fromCharCode(i)+"-"+j):null);
            if(id!=null){
                for(var x =0;x<peases.length;x++){
                    if(peases[i]!="removed"&&peases[x]==id&&id!="#"+String.fromCharCode(uni)+"-"+num) rodBlck[rb++] = id;
                }
                if(id!="#"+String.fromCharCode(uni)+"-"+num&&$(id).children("img").prop("class")!=nowMoving[0]) tempGuested[g++] = id;
            }
        }
    }
    guested = tempGuested;
    selectAllMovedSqrs(ev1);
}

function resetBackground(){
    $(".sqr-white").css("background-color","whitesmoke");
    $(".sqr-white").css("box-shadow","inset 0 0 1em rgba(39,210,99,0.67)");
    $(".sqr-black").css("background-color","rgba(196,146,15,0.3)");
    $(".sqr-black").css("box-shadow","inset 0 0 1em rgba(112,32,4,0.67)");
}

function idBreaker(ev){
    if(ev!="") {
        var string = ev.match(/[A-z]/g).join("");
        var uni = parseInt(string.charCodeAt(0));
        var num = parseInt(ev.match(/\d/g));
        return [uni, num];
    }else return [96, 0];
}

function gestRookMoved(ev) {
    var id = idBreaker(ev);
    var g =0; guested = [];
    for(var i=0;i<rodBlck.length;i++) {
        var rdBlk = idBreaker(rodBlck[i]);
        for(var j=0;j<tempGuested.length;j++){
            var tempId = idBreaker(tempGuested[j]);
            if(i==0&&rdBlk[1]>=tempId[1]&&tempId[1]>id[1]&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
            else if(i==1&&rdBlk[0]<=tempId[0]&&tempId[0]<id[0]&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
            else if(i==2&&rdBlk[1]<=tempId[1]&&tempId[1]<id[1]&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
            else if(i==3&&rdBlk[0]>=tempId[0]&&tempId[0]>id[0]&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
        }
    }
}

function gestBishopMoved(ev) {
    var id=idBreaker(ev);
    var g =0; guested = [];
    for(var i=0;i<rodBlck.length;i++){
        var rdBlk=idBreaker(rodBlck[i]);
        for(var j=0;j<tempGuested.length;j++){
            var tempId = idBreaker(tempGuested[j]);
            if(i==0&&(tempId[0]<=rdBlk[0]&&tempId[1]<=rdBlk[1]&&tempId[0]>id[0]&&tempId[1]>id[1])&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
            else if(i==1&&(tempId[0]>=rdBlk[0]&&tempId[1]<=rdBlk[1]&&tempId[0]<id[0]&&tempId[1]>id[1])&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
            else if(i==2&&(tempId[0]>=rdBlk[0]&&tempId[1]>=rdBlk[1]&&tempId[0]<id[0]&&tempId[1]<id[1])&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
            else if(i==3&&(tempId[0]<=rdBlk[0]&&tempId[1]>=rdBlk[1]&&tempId[0]>id[0]&&tempId[1]<id[1])&&$(tempGuested[j]).children("img").prop("class")!=nowMoving[0]) guested[g++] = tempGuested[j];
        }
    }
}

function selectAllMovedSqrs(ev) {
    L1:for (var i = 0; i < guested.length; i++) {
        for (var j = 0; j < peases.length; j++) {
            if (peases[j] != "removed" && peases[j] == guested[i] && $("#" + clicked).prop("class") == nowMoving[0] && $(guested[i]).children("img").prop("class") == lastMoving[0]) {
                $(guested[i]).css("box-shadow", "inset 0 0 4em rgba(255,108,78,1)");
                $(guested[i]).css("background-color", "rgba(255,250,6,1)");
                continue L1;
            }
            else if (peases[j] != "removed" && peases[j] == guested[i] && $("#" + clicked).prop("class") == nowMoving[0] && $(guested[i]).children("img").prop("class") != lastMoving[0]) continue L1;
        }
        if(checking != "checkKing") $(guested[i]).css("background-color", "rgba(181,255,30,1)");
    }
    // if(checking == "checkKing"&&check != "Checked"){
    //     var king = lastMoving[0] == "peass black" ? "white-king-d-1" : "blk-king-e-8";
    //     var i = lastMoving[0] == "peass black" ? 0 : 16;
    //     var e = lastMoving[0] == "peass black" ? 16 : 32;
    //     var k = lastMoving[0] == "peass black" ? 16 : 0;
    //     var l = lastMoving[0] == "peass black" ? 32 : 16;
    //     var possion = "";
    //     for(i;i<e;i++){
    //         if($(peases[i]).children("img").prop("id")==king) possion=peases[i];
    //     }
    //     for(var j=0;j<rodBlck.length;j++){
    //         if(rodBlck[j]==possion){
    //             check = "Checked";
    //             console.log(rodBlck[j]);
    //             break;
    //         }
    //         else check = "";
    //     }
    //     console.log(check);
    // }
}