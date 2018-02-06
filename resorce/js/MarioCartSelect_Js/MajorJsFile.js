var arrayPlayerData=[];

$ (function(){
        $('.MajorFile').append('<table class ="table table-hover" id = "playerTableHead"><thead><tr><th>Number</th><th>PlayerName</th></tr></thead>');
        $('.MajorFile').append('</table>');
        $('#playerTableHead').append('<tbody id = "playerTableBody"></tbody>');
        $('.MajorFile').append('<form><div class="form-group"><label class="labelstyle1">PlayerNameを入力してください。</label><input type="text" class="form-control" id="textbox1" placeholder="PlayerName"></div>');
        $('.MajyorFile').append('</form>')
        $('.MajorFile').append('<div class="btn-group btn-groupstyle1"><button type="button" id="PlayerAddButton" class="btn btn-default btn-style1">追加</button><button type="button" id="PlayerRemoveButton" class="btn btn-default btn-style1">削除</button></div>');

        $('#PlayerAddButton').click(function(){
            $("#playerTableBody").empty();
            var textData = $('#textbox1');
            arrayPlayerData.push([textData[0].value]);
            $.each(arrayPlayerData,function(index, textdata) {
                      $('#playerTableBody').append('<tr class ="tableDataRow"><th>' + (index+1) + '</th>' + '<td>' + textdata + '</td></tr>');
             });
        })

        $('#PlayerRemoveButton').click(function(){
            var textData = $('.tableDataRow');
            console.log(textData);
        })


         $(".tableDataRow").click(function(){
               console.log(1);
         });


});
