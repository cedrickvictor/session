const todayDate = new Date();

var currentHour =   Number(todayDate.getHours());
var currentMinutes =   Number(todayDate.getMinutes());
var currentSec =   Number(todayDate.getSeconds());

var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

hour.innerHTML = FormatTime(currentHour) + '<small>H<small/>';;
min.innerHTML = FormatTime(currentMinutes) + '<small>M<small/>';;
sec.innerHTML = FormatTime(currentSec) + '<small>S<small/>';;

var countId = setInterval(myClock,1000);
function myClock(){
    currentSec++;
    if(currentSec == 60){
        currentSec = 0;
        currentMinutes++;
        if(currentMinutes == 60){
            currentMin = 0;
            currentHour++;
        }
        min.innerHTML = FormatTime(currentMinutes) + '<small>M<small/>';
    }
    sec.innerHTML = FormatTime(currentSec) + '<small>S<small/>'
    if(currentHour == 24){
        currentHour = 0;
    }
    hour.innerHTML = FormatTime(currentHour) + '<small>H<small/>';
}

function FormatTime(time){
    var formatedTime
    if(time < 10){
        formatedTime = "0" + time.toString();
    }
    else{
        formatedTime = time.toString();
    }
    return formatedTime
}