//convert the number from 1 to 9 in the format 01, 02, 03, ...09 
function add0(x)
{ 
    return (x>9)?x:"0"+x; 
}

//Print time every 1s in format HH:MM:SS in the html element "clock"
function timeclock()
{
     var temps = new Date();
     document.getElementById("clock").innerHTML = add0(temps.getHours())+":"+add0(temps.getMinutes())+":"+add0(temps.getSeconds());
     setTimeout("timeclock()",1000);
}
