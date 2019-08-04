function wrapping(){
  const fulldate = new Date();

  var hours = fulldate.getHours();
  var min = fulldate.getMinutes();
  var sec = fulldate.getSeconds();

  if(hours<10){
  hours = "0" +hours;
  }
  if(hours>12){
    hours=hours-12;
  }

  if(min<10){
  min = "0" +min;
  }

  if(sec<10){
  sec = "0" +sec;
  }

  var a = document.getElementById('hour').innerHTML = hours +" :";
  var b = document.getElementById('min').innerHTML = min +" :";
  var c = document.getElementById('sec').innerHTML = sec;

}
setInterval(wrapping,2000);
