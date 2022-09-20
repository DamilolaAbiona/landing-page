const dayysEl = document.querySelector(".days"),
 hoursEl = document.querySelector(".hours"),
 minutesEl = document.querySelector(".minutes"),
secondsEl = document.querySelector(".seconds");

const countTo = "31 December 2022";
const C = setInterval(() => {
const currentDate = new  Date ()
const endDate = new Date(countTo)
const totalSeconds = (endDate - currentDate)/1000;

const days = Math.floor(totalSeconds / 3600 /24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const minutes = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;



dayysEl.innerHTML = `${days}`;
hoursEl.innerHTML = `${format(hours)}`
minutesEl.innerHTML = `${format(minutes)}`
secondsEl.innerHTML = `${format(seconds)}`



});
function format (count) {
    return count < 10? `0${count}` : count;
}