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

$ (function(){
        //Playerに関するHTMLタグの追加
        $('.MajorFile').append('<table class ="table table-hover" id = "playerTableHead"><thead><tr><th>Number</th><th>PlayerName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#playerTableHead').append('<tbody id = "playerTableBody"></tbody>');
        $('.MajorFile').append('<form><div class="form-group positionstyle1"><label class="labelstyle1">PlayerNameを入力してください。</label><input type="text" class="form-control" id="textbox1" placeholder="PlayerName"></div>');
        $('.MajyorFile').append('</form>')
        $('.MajorFile').append('<div class="btn-group btn-groupstyle1"><button type="button" id="PlayerAddButton" class="btn btn-default btn-style1">PlayerAdd</button><button type="button" id="PlayerRemoveButton" class="btn btn-default btn-style1">PlayerDelete</button></div>');
        //使用キャラに関するHTMLタグの追加
        $('.MajorFile').append('<table class ="table table-hover" id = "charactorTableHead"><thead><tr><th>Number</th><th>CharactorName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#charactorTableHead').append('<tbody id = "charactorTableBody"></tbody>');
        $.each(arrayNormalCharactor,function(index, charadata) {
            $('#charactorTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + charadata + '</td></tr>');
        });
        arrayCharactorCurrent = arrayNormalCharactor.slice();
        $('.MajorFile').append('<form><div class="form-group positionstyle2"><label class="labelstyle1">CharactorNameを入力してください。</label><input type="text" class="form-control" id="textbox2" placeholder="CharactorName"></div>');
        $('.MajyorFile').append('</form>')
        $('.MajorFile').append('<div class="btn-group btn-groupstyle2"><button type="button" id="CharactorAddButton" class="btn btn-default btn-style1">CharactorAdd</button>'+
        '<button type="button" id="CharactorRemoveButton" class="btn btn-default btn-style1">CharactorDelete</button>'+
        '<button type="button" id="AllCharactorButton" class="btn btn-default btn-style1">AllCharactor</button>'+
        '<button type="button" id="NormalCharactorButton" class="btn btn-default btn-style1">NormalCharactor</button></div>');
        //結果出力
        $('.MajorFile').append('<table class ="table table-hover" id = "PlayerAndcharactorTableHead"><thead><tr><th>PlayerName</th><th>CharactorName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#PlayerAndcharactorTableHead').append('<tbody id = "PlayerAndcharactorTableBody"></tbody>');
        $('.MajorFile').append('<label class="labelstyle1 positionstyle3">OutPutボタンをクリックし、使用キャラクターをランダムに確定します。</label>');
        $('.MajorFile').append('<div class="btn-group btn-groupstyle3"><button type="button" id="OutPutButton" class="btn btn-default btn-style1">OutPut</button></div>');

        //プレイヤー追加
        $('#PlayerAddButton').click(function(){
            var textData = $('#textbox1');
            if (textData[0].value != ""){
                         $("#playerTableBody").empty();
                         arrayPlayerData.push([textData[0].value]);
                         $.each(arrayPlayerData,function(index, textdata) {
                                      $('#playerTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + textdata + '</td></tr>');
                         });
            }
        });
        //キャラクター追加
        $('#CharactorAddButton').click(function(){
            var textData = $('#textbox2');
                   if (textData[0].value != ""){
                         $("#charactorTableBody").empty();
                         arrayCharactorCurrent.push([textData[0].value]);
                         $.each(arrayCharactorCurrent,function(index, charadata) {
                                    $('#charactorTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + charadata + '</td></tr>');
                         });
                  }
        });
        //全ての登場キャラクター表示
        $('#AllCharactorButton').click(function(){
            $("#charactorTableBody").empty();
            arrayCharactorCurrent = arrayAllCharactor.slice();
            $.each(arrayAllCharactor,function(index, charactor) {
                      $('#charactorTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + charactor + '</td></tr>');
             });
        });
        //通常キャラクター表示
        $('#NormalCharactorButton').click(function(){
            $("#charactorTableBody").empty();
            arrayCharactorCurrent = arrayNormalCharactor.slice();
            $.each(arrayNormalCharactor,function(index, charactor) {
                      $('#charactorTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + charactor + '</td></tr>');
             });
        });
        //出力
        $('#OutPutButton').click(function(){
            $("#PlayerAndcharactorTableBody").empty();
            var arrayCharactorSelected = arrayCharactorCurrent.slice();
            var arrayNumRand;
            var associationKeyPlayValCharactor = {};
            var MatchNameNum = 2

            $.each(arrayPlayerData,function(index, player) {
                 arrayNumRand = Math.floor(Math.random()*arrayCharactorSelected.length);
                 console.log(player in associationKeyPlayValCharactor);
                 if (player in associationKeyPlayValCharactor) {
                       associationKeyPlayValCharactor[player+'※'+MatchNameNum+'人目']=arrayCharactorSelected[arrayNumRand];
                       MatchNameNum += 1
                }else{
                       associationKeyPlayValCharactor[player]=arrayCharactorSelected[arrayNumRand];
                }
                 arrayCharactorSelected.splice(arrayNumRand, 1);
            });

            MatchNameNum = 0
            $.each(associationKeyPlayValCharactor,function(player, charactor) {
                 $('#PlayerAndcharactorTableBody').append('<tr class ="tableDataRow"><th>' + player + '</th>' + '<td>' + charactor + '</td></tr>');
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
        //登場キャラクターの削除
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
                         $('#charactorTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + charactor + '</td></tr>');
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
                         $('#playerTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + player + '</td></tr>');
             });
            arrayPlayerChange = Array.apply(null, Array(60)).map(function () {return true });
        });

});
