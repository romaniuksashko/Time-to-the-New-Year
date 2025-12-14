const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

const targetDate = new Date("2026-1-1 00:00:00");

const intervalId = setInterval(() => {
  const dateNow = new Date();
  const time = targetDate - dateNow;



  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, "0");
  // console.log(days, hours, mins, secs);
  
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;

    if (time <= 0) {
    clearInterval(intervalId);
    daysRef.textContent = "00";
    hoursRef.textContent = "00";
    minsRef.textContent = "00";
    secsRef.textContent = "00";
    // document.body.style.backgroundColor = ;
  }  

}, 1000)
