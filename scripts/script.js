//elements
//let date=new Date()
const dateEl=document.getElementById('date')
const dayEl=document.getElementById('day')
const timeEl=document.getElementById('time')
const noOfDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


function gettingDate(){
    var date=new Date();

    var dates=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    dateEl.innerText=`${dates} : ${month} :${year}`
}
gettingDate()

function gettingDay(){
    var date=new Date();
    var today=date.getDay();
    var day=noOfDays[today];
    dayEl.innerText=day;
}
gettingDay();


function gettingTime(){
    var date=new Date();
    var hours=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    timeEl.innerText=`${hours}:${min}:${sec}`;


    setTimeout(gettingTime,1000)
}
gettingTime()