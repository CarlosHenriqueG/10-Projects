let days = document.getElementById("days"),
hours = document.getElementById("hours"),
minutes = document.getElementById("minutes"),
seconds = document.getElementById("seconds");

const date = "1 jan 2024"

function count() {


  const newYears = new Date(date)
  let currentNewYear = new Date();

  let currentTime = (newYears - currentNewYear) / 1000;
  

  let daysText = Math.floor(currentTime / (3600 * 24));
  let hoursText  = Math.floor(currentTime / (3600) % 24)
  let minutesText = Math.floor(currentTime / 60 % 60)
  let secondsText = Math.floor((currentTime) % 60)


  days.innerHTML = formatTime(daysText)
  hours.innerHTML = formatTime(hoursText)
  minutes.innerHTML = formatTime(minutesText)
  seconds.innerHTML = formatTime(secondsText)


}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}


count()
setInterval(count, 1000)