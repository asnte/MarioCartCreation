var arrayPlayerData=[];
var arrayCharactorCurrent = [];
var arrayAllCharactor=["キノピオ","ノコノコ","ヘイホー","ベビィマリオ","べビィルイージ","ベビィピーチ","ベビィデイジー","ジュゲム","キノピコ","ベビィロゼッタ","レミー","ラリー","ウェンディ",
"マリオ","ルイージ","ピーチ","デイジー","ヨッシー","イギー","ルドウィッグ",
"クッパ","ドンキーコング","ワリオ","ワルイージ","ロゼッタ","メタルマリオ","ピンクゴールドピーチ","ロイ","モートン"];
var arrayNormalCharactor = ["キノピオ","ノコノコ","ヘイホー","ベビィマリオ","べビィルイージ","ベビィピーチ","ベビィデイジー",
"マリオ","ルイージ","ピーチ","デイジー","ヨッシー",
"クッパ","ドンキーコング","ワリオ","ワルイージ",];
var arrayPlayerChange = Array.apply(null, Array(60)).map(function () {return true });
var arrayCharactorChange = Array.apply(null, Array(60)).map(function () {return true });
var arrayHideComand = [38,38,40,40,37,39,37,39,66,65];
var arrayCurrentComand =[];
var ComandPushTime ;

$ (function(){
        //Playerに関するHTMLタグの追加
        $('.MajorFile').append('<table class ="table table-hover" id = "playerTableHead"><thead class = "theadfont1"><tr><th>Number</th><th id = "NumColumn">PlayerName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#playerTableHead').append('<tbody id = "playerTableBody"></tbody>');
        $('.MajorFile').append('<form><div class="form-group positionstyle1"><label class="labelstyle1">PlayerNameを入力してください。</label><input type="text" class="form-control" id="textbox1" placeholder="PlayerName"></div>');
        $('.MajyorFile').append('</form>')
        $('.MajorFile').append('<div class="btn-group btn-groupstyle1"><button type="button" id="PlayerAddButton" class="btn btn-default btn-style1">PlayerAdd</button><button type="button" id="PlayerRemoveButton" class="btn btn-default btn-style1">PlayerDelete</button></div>');
        //使用キャラに関するHTMLタグの追加
        $('.MajorFile').append('<table class ="table table-hover" id = "charactorTableHead"><thead class = "theadfont1"><tr><th>Number</th><th id = "NumColumn">CharactorName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#charactorTableHead').append('<tbody id = "charactorTableBody"></tbody>');
        $.each(arrayNormalCharactor,function(index, charadata) {
            $('#charactorTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + charadata + '</td></tr>');
        });
        arrayCharactorCurrent = arrayNormalCharactor.slice();
        $('.MajorFile').append('<form><div class="form-group positionstyle2"><label class="labelstyle1">CharactorNameを入力してください。</label><input type="text" class="form-control" id="textbox2" placeholder="CharactorName"></div>');
        $('.MajyorFile').append('</form>')
        $('.MajorFile').append('<div class="btn-group btn-groupstyle2"><button type="button" id="CharactorAddButton" class="btn btn-default btn-style1">CharactorAdd</button>'+
        '<button type="button" id="CharactorRemoveButton" class="btn btn-default btn-style1">CharactorDelete</button>'+
        '<button type="button" id="AllCharactorButton" class="btn btn-default btn-style1">AllCharactor</button>'+
        '<button type="button" id="NormalCharactorButton" class="btn btn-default btn-style1">NormalCharactor</button></div>');
        //結果出力
        $('.MajorFile').append('<table class ="table table-hover" id = "PlayerAndcharactorTableHead"><thead class = "theadfont1"><tr><th>PlayerName</th><th>CharactorName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#PlayerAndcharactorTableHead').append('<tbody id = "PlayerAndcharactorTableBody"></tbody>');
        $('.MajorFile').append('<label class="labelstyle1 positionstyle3">OutPutボタンをクリックし、使用キャラクターをランダムに確定します。</label>');
        $('.MajorFile').append('<div class="btn-group btn-groupstyle3"><button type="button" id="OutPutButton" class="btn btn-default btn-style1">OutPut</button><button type="button" id="PurgeButton" class="btn btn-default btn-style1">Purge</button></div>');

        //プレイヤー追加
        $('#PlayerAddButton').click(function(){
            var textData = $('#textbox1');
            if (textData[0].value != ""){
                         $("#playerTableBody").empty();
                         arrayPlayerData.push([textData[0].value]);
                         $.each(arrayPlayerData,function(index, textdata) {
                                      $('#playerTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + textdata + '</td></tr>');
                         });
            }else{
                         alert('プレイヤー名を入力してください。');
            }
            textData[0].value = ""
        });

        $('#textbox1').on("keydown", function(e) {
            if(e.keyCode === 13) {
                $('#PlayerAddButton').trigger("click");
                return false;
            }
        });

        //キャラクター追加
        $('#CharactorAddButton').click(function(){
            var textData = $('#textbox2');
                   if (textData[0].value != ""){
                         $("#charactorTableBody").empty();
                         arrayCharactorCurrent.push([textData[0].value]);
                         $.each(arrayCharactorCurrent,function(index, charadata) {
                                    $('#charactorTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + charadata + '</td></tr>');
                         });
                  }else{
                         alert('キャラクター名を入力してください。');
                  }
             textData[0].value = ""
        });

        $('#textbox2').on("keydown", function(e) {
            if(e.keyCode === 13) {
                $('#CharactorAddButton').trigger("click");
                return false;
            }
        });

        //全ての登場キャラクター表示
        $('#AllCharactorButton').click(function(){
            $("#charactorTableBody").empty();
            arrayCharactorCurrent = arrayAllCharactor.slice();
            $.each(arrayAllCharactor,function(index, charactor) {
                      $('#charactorTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + charactor + '</td></tr>');
             });
        });
        //通常キャラクター表示
        $('#NormalCharactorButton').click(function(){
            $("#charactorTableBody").empty();
            arrayCharactorCurrent = arrayNormalCharactor.slice();
            $.each(arrayNormalCharactor,function(index, charactor) {
                      $('#charactorTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + charactor + '</td></tr>');
             });
        });
        //出力
        $('#OutPutButton').click(function(){
            $("#PlayerAndcharactorTableBody").empty();
            var arrayCharactorSelected = arrayCharactorCurrent.slice();
            var arrayNumRand;
            var associationKeyPlayValCharactor = {};
            var matchNameNum = 2

            $.each(arrayPlayerData,function(index, player) {
                 arrayNumRand = Math.floor(Math.random()*arrayCharactorSelected.length);
                 if (player in associationKeyPlayValCharactor) {
                       associationKeyPlayValCharactor[player+'※'+matchNameNum+'人目']=arrayCharactorSelected[arrayNumRand];
                       matchNameNum += 1
                }else{
                       associationKeyPlayValCharactor[player]=arrayCharactorSelected[arrayNumRand];
                }
                 arrayCharactorSelected.splice(arrayNumRand, 1);
            });

            matchNameNum = 0;
            console.log(arrayPlayerChange.indexOf(false));
            console.log(arrayPlayerChange);

            $.each(associationKeyPlayValCharactor,function(player, charactor) {
                 if (arrayPlayerChange.indexOf(false) == -1){
                        $('#PlayerAndcharactorTableBody').append('<tr class ="tableDataRow"><th  class ="tdatafont1">' + player + '</th>' + '<td class ="tdatafont1">' + charactor + '</td></tr>');
                 }else{
                        if (arrayPlayerChange[matchNameNum] == false){
                                $('#PlayerAndcharactorTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + player + '</th>' + '<td class ="tdatafont1">' + charactor + '</td></tr>');
                        }
                        matchNameNum += 1;
                 }
           });
        });
        //登場キャラクターの選択
        $(document).on("click", "#charactorTableBody > .tableDataRow", function(){
            var clickRowHtmlData = $(this, ".tableDataRow");
            var clickRowNum = clickRowHtmlData[0].rowIndex-1;
            if (arrayCharactorChange[clickRowNum] === true){
                   $('#charactorTableBody > .tableDataRow').eq(clickRowNum).css({'background-color': '#cccccc'});
                   arrayCharactorChange[clickRowNum]=false;
            }else{
                  $('#charactorTableBody > .tableDataRow').eq(clickRowNum).css({'background-color': 'transparent'});
                  arrayCharactorChange[clickRowNum]=true;
            }
        });
        //プレイヤ名選択
        $(document).on("click", "#playerTableBody > .tableDataRow", function(){
            var clickRowHtmlData = $(this, ".tableDataRow");
            var clickRowNum = clickRowHtmlData[0].rowIndex-1;
            if (arrayPlayerChange[clickRowNum] === true){
                   $('#playerTableBody > .tableDataRow').eq(clickRowNum).css({'background-color': '#cccccc'});
                   arrayPlayerChange[clickRowNum]=false;
            }else{
                  $('#playerTableBody > .tableDataRow').eq(clickRowNum).css({'background-color': 'transparent'});
                  arrayPlayerChange[clickRowNum]=true;
            }
        });
        //キャラクターの削除
        $('#CharactorRemoveButton').click(function(){
            $("#charactorTableBody").empty();
            var deleteCount = 0;
            $.each(arrayCharactorChange,function(index, charactorChange) {
                   if (charactorChange === false){
                         arrayCharactorCurrent.splice( index-deleteCount, 1 )
                         deleteCount +=1
                   }
            });
            $.each( arrayCharactorCurrent,function(index, charactor) {
                         $('#charactorTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + charactor + '</td></tr>');
             });
            arrayCharactorChange = Array.apply(null, Array(60)).map(function () {return true });
        });
        //プレイヤーの削除
        $('#PlayerRemoveButton').click(function(){
            $("#playerTableBody").empty();
            var deleteCount = 0;
            $.each(arrayPlayerChange,function(index, playerChange) {
                   if (playerChange === false){
                         arrayPlayerData.splice( index-deleteCount, 1 )
                         deleteCount +=1
                   }
            });
            $.each( arrayPlayerData,function(index, player) {
                         $('#playerTableBody').append('<tr class ="tableDataRow"><th class ="tdatafont1">' + (index+1) + '</th>' + '<td class ="tdatafont1">' + player + '</td></tr>');
             });
            arrayPlayerChange = Array.apply(null, Array(60)).map(function () {return true });
        });
        //コマンド
        $(window).keyup( function( event ) {
              if (arrayCurrentComand.length == 0 && event.keyCode == 38){
                   ComandPushTime = new Date();
              }
              arrayCurrentComand.push(event.keyCode);
              var ComandPushEndTime = new Date();
              if ((ComandPushEndTime - ComandPushTime) > 3000) {
                   arrayCurrentComand =[];
                   ComandPushTime = null;
              }
              if (arrayHideComand.toString() == arrayCurrentComand.toString()) {
                    alert("隠しコマンド実行");
                    var point = CarvePoint();
                    $('.MajorFile').append('<div class="damy1"><img src="../image/jyugemu.png" class="img-circle jyugemuimage"></div>');
                    $('.MajorFile').append('<div class="damy2"><img src="../image/CorseImage.jpg" class="img-circle corseimage"></div>');
                    $('.damy1').css({ left: 0 }).animate({ left: 1 }, {duration: 2000,
                        step: function(current) {
                        var point = CarvePoint(current, -100, 1000, 50, -400, 200, 50);
                        $('.jyugemuimage').css({ left: point[0], top: point[1] });
                     }});
                    $('#PurgeButton').css({'visibility': 'visible'});
                    arrayCurrentComand =[];
                    ComandPushTime = null;
              }
        });
        //コマンド後の戻し
        $('#PurgeButton').click(function(){
               $('.corseimage').remove();
               $('.jyugemuimage').remove();
               $('#PurgeButton').css({'visibility': 'hidden'});
        });
});

function CarvePoint(current,startx1,starty1,cpointx2,cpointy2,stopx3,stopy3) {
  var revcurrent = 1 - current;
      x = current * current * stopx3 + 2 * current * revcurrent * cpointx2 + revcurrent * revcurrent * startx1;
      y = current * current * stopy3 + 2 * current * revcurrent * cpointy2 + revcurrent * revcurrent * starty1;
  return [x,y];
}