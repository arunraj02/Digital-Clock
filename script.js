function updateTime() {
    var now = new Date();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    document.getElementById('day').innerHTML = days[now.getDay()];
    document.getElementById('month').innerHTML = months[now.getMonth()];
    document.getElementById('datenum').innerHTML = now.getDate();
    document.getElementById('year').innerHTML = now.getFullYear();

    var hours = now.getHours()<10 ? '0' + now.getHours() : now.getHours();
    var minutes = now.getMinutes()<10 ? '0' + now.getMinutes() : now.getMinutes();
    var seconds = now.getSeconds()<10 ? '0' + now.getSeconds() : now.getSeconds();
    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('period').innerHTML = period;

}

setInterval(updateTime,1000);

updateTime();