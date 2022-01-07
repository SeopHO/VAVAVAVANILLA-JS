const day = document.getElementById('time1');
const time = document.getElementById('time2');
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function viewMin(num)
{
    if(num<10)
    {
        return `0${num}`;
    }
    else
    {
        return num;
    }
}

function init()
{
    const now = new Date();
    const weekday = days[now.getDay()];
    const hour = now.getHours();
    const min = now.getMinutes();
    day.innerText = weekday;
    time.innerText = hour + ':' + viewMin(min);
}
setInterval(init,1000);