
const monthDayCounter = document.querySelector(".monthDayCounter");
const timeCounter = document.querySelector(".timeCounter");


function changeHtml(month, day, hour, min, sec) {
  let timeArr = [hour, min, sec];
  
   // when number is lesser than 10, make it with 0. i.e. 01,09. *its STRING.
  timeArr = timeArr.map(i => (i < 10 ? `0${i}` : i));

  monthDayCounter.innerHTML = `${month} Months ${day} Days`;
  timeCounter.innerHTML = `
   ${timeArr[0]}h
   ${timeArr[1]}m
   ${timeArr[2]}s..`;
}

function getGap(xmasDay, currentTime, gap){
  const monGap = xmasDay.getMonth() - currentTime.getMonth();
  const dayGap = xmasDay.getDate() - currentTime.getDate();
  const hourGap = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minGap = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const secGap = Math.floor((gap % (1000 * 60)) / 1000);
  changeHtml(monGap, dayGap, hourGap, minGap, secGap);
}

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const currentTime = new Date();
  const gap = xmasDay - currentTime;
  getGap(xmasDay, currentTime, gap);
}

function init() {
  setInterval(getTime, 1000);
}
init();
