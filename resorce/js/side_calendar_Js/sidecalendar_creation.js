var datenow = new Date();
var nowYear = datenow.getFullYear();
var nowmanth = datenow.getMonth()+1;
var dateString = nowYear +"年"+nowmanth+ "月";

$ (function(){

        $('.sidesmallfontstyle1').text(dateString);

        /*矢印による月ごとの表示変更に関するイベント処理
            click イベント処理
            月を進める
         */

        $('.YajirushiRightImage').click(function(){
               //翌月の取得
        	   var StartMonth = $('.sidesmallfontstyle1');
               var SrartDateString= StartMonth[0].textContent;
               var IntnowMonth = parseInt(SrartDateString.slice(5), 10);
               var IntnextMonth =  IntnowMonth+1;
               var IntnextYear = parseInt(SrartDateString.substr(0,4));

               if (IntnowMonth == 12 ){
            	   IntnextYear += 1;
            	   IntnextMonth = 1;
               }

               $('.sidesmallfontstyle1').text(String(IntnextYear)+"年"+String(IntnextMonth)+"月");

              //今月来月の最終日取得
             var NowMonthLastDate = getEndOfMonth(IntnextYear,IntnowMonth);
             var NextMonthLastDate = getEndOfMonth(IntnextYear,IntnextMonth);

             //今月の最終曜日を取得
             var date_LastDate= new Date(IntnextYear,IntnowMonth-1,NowMonthLastDate);
             var LastWeekday = date_LastDate.getDay();
             var Next_Weekday = LastWeekday + 1 > 6 ?  0 : LastWeekday + 1;

             var dataCount = Next_Weekday ;
             var Array_tabledata = $('.datafontstyle');
             Array_tabledata.empty();

            for (var i = 1 ; i <= NextMonthLastDate ; i++){
                      Array_tabledata[dataCount].textContent=String( i );
                      dataCount += 1;
            }
        })
        /*矢印による月ごとの表示変更に関するイベント処理
            click イベント処理
            月を進める
         */
        $('.YajirushiLeftImage').click(function(){

               var StartMonth = $('.sidesmallfontstyle1');
               var SrartDateString= StartMonth[0].textContent;
               var IntnowMonth = parseInt(SrartDateString.slice(5), 10);
               var IntnextMonth =  IntnowMonth-1;
               var IntnextYear = parseInt(SrartDateString.substr(0,4));

               if (IntnowMonth == 1 ){
            	   IntnextYear -= 1;
            	   IntnextMonth = 12;
               }

               $('.sidesmallfontstyle1').text(String(IntnextYear)+"年"+String(IntnextMonth)+"月");

             //先月の開始曜日を取得
             var date_BackDate= new Date(IntnextYear,IntnextMonth-1,1);
             var BackWeekday = date_BackDate.getDay();

             //先月の最終日取得
             var NextMonthLastDate = getEndOfMonth(IntnextYear,IntnextMonth);
             var dataCount = BackWeekday ;
             var Array_tabledata = $('.datafontstyle');
             Array_tabledata.empty();

            for (var i = 1 ; i <= NextMonthLastDate ; i++){
                      Array_tabledata[dataCount].textContent=String( i );
                      dataCount += 1;
            }
        })
});

function getEndOfMonth(year,month){
	var endDate = new Date(year,month,0);
	return endDate.getDate();
}

