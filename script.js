const Daysel = document.getElementById("days")
const Hoursel = document.getElementById("hours")
const Minutesel = document.getElementById("minutes")
const Secondsel = document.getElementById("seconds")

const newYers = " 1 jan 2023";

function countdow() {

    const newYersDate = new Date(newYers);
    const currentDate = new Date();

    const totalSeconds = (newYersDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    Daysel.innerHTML = days;
    Hoursel.innerHTML = formaTime(hours);
    Minutesel.innerHTML = formaTime(minutes);
    Secondsel.innerHTML = formaTime(seconds);

   
}

function formaTime(time) {
    return time > 10 ? `${time}` : time;
}

countdow();

setInterval(countdow, 1000);

