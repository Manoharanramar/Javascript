//its follow in form of asynchronisation form
let dateTime=new Date()//Data current date and time

let ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime=new Date();
    let hour=dateTime.getHours()
    let min=padZero(dateTime.getMinutes())
    let sec=padZero(dateTime.getSeconds())
    if(hour>12){//AM AND PM format
        hour=hour-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    document.getElementById('hours').innerHTML=padZero(hour)
    document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=sec
}
function padZero(num){
    return num<10?"0"+num:num//if num is 0->9 add front zero like 01
}
setInterval(displayTime,500);//Time wanted
