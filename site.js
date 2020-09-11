const arrival = new Date(2020, 8, 24, 13, 10);
var timeleft = 0;
$(document).ready(function() {
    //timeleft = arrival - new Date();    
    //console.log(convertMS(timeleft))
    window.setInterval(updateTimes, 100);
});

function updateTimes(){
    timelefMS = arrival - new Date();
    timeleft =  convertMS(timelefMS);
    if(timelefMS < 0){
        $('#areWe').html("WE MADE IT").removeClass("no").addClass("yes");
        $('#timeLeft').html("00:00:00:00").removeClass("no").addClass("yes");
        
    }
    else {
        $('#timeLeft').html(timeleft);
    }

}

function convertMS( milliseconds ) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    if(seconds.toString().length < 2){
        seconds = "0" + seconds;
    }
    if(minute.toString().length < 2){
        minute = "0" + minute;
    }
    if(hour.toString().length < 2){
        hour = "0" + hour;
    }
    return day + ":" + hour + ":" + minute+ ":" + seconds;
}