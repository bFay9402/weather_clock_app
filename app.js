// weather api - https://api.openweathermap.org/data/2.5/

let loc = document.querySelector('.location');
let time = document.querySelector('.time');
let dateWeather = document.querySelector('.date-weather');

// LOCATION
fetch('https://freegeoip.app/json/')
  .then(response => response.json())
  .then(locationData => loc.innerText = `${locationData.city}, ${locationData.region_name}`);

// MAKING THE TIME
function makeTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridian = 'AM';
  let displayTime = document.querySelector('.time');
  let greeting = document.querySelector('.greeting');

  if(hours === 0) {
    hours = 12;
  } else if(hours > 12) {
    hours -= 12;
    meridian = 'PM';
  }

  // change greeting depending on the time
  // greeting times 4am - 12 morning | 12 - 5 afternoon | 5 - 4am evening
  if(hours === 4 || hours < 12 && meridian === 'AM') {
    greeting.innerHTML = 'Good Morning';
  } else if(hours === 12 || hours <= 5 && meridian === 'PM') {
    greeting.innerHTML = 'Good Afternoon';
  } else {
    greeting.innerHTML = 'Good Evening';
  }

  minutes = (minutes < 10) ? '0' + minutes : minutes;

  let time = `${hours}:${minutes}<span class="small">${meridian}</span>`;
  
  displayTime.innerHTML = time;

  setTimeout(makeTime, 1000);
}

makeTime();

// MAKE THE DATE
function makeDate() {
  let date = new Date();
  let month = date.getMonth();
  let dayOfWeek = date.getDay();
  let dayOfMonth = date.getDate();

  let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  month = monthsArr[month];
  dayOfWeek = daysArr[dayOfWeek];

  dateWeather.innerHTML = `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

makeDate();

// GET THE WEATHER
