function add0(x)
{ 
    return (x>9)?x:"0"+x; 
}
function timeclock()
{
     var temps = new Date();
     document.getElementById("clock").innerHTML = add0(temps.getHours())+":"+add0(temps.getMinutes())+":"+add0(temps.getSeconds());
     setTimeout("timeclock()",1000);
}
