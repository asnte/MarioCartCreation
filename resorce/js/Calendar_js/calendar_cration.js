var StartDate = new Date(2018,0,28);
var StopDate = new Date(2018,1,3);;

calendarcreate(StartDate.toLocaleDateString(),StopDate.toLocaleDateString());

$ (function(){
        $.CalendarCreatFunction= function(StartDate,StopDate){
        }
});

function calendarcreate(StartDate,StopDate){
    console.log(StartDate);
    console.log(StopDate);
}