var timerStart = true;

function myTimer(d0)
{
   var d=(new Date()).valueOf();
   var diff = d-d0;
   var minutes = Math.floor(diff/1000/60);
   var seconds = Math.floor(diff/1000)-minutes*60;
   var myVar = null;
   minutes = minutes.toString();
   if (minutes.length == 1){
      minutes = "0"+minutes;
   }
   seconds = seconds.toString();
   if (seconds.length == 1){
      seconds = "0"+seconds;
   }
   postMessage(minutes+":"+seconds);
}
               
if (timerStart){
   var d0=(new Date()).valueOf();
   myVar=setInterval(function(){myTimer(d0)},100);
   timerStart = false;
}