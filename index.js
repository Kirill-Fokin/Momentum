function currentTime() {
  let date = new Date(); /* создаем объект класса Date() */
  let hour = date.getHours();
  let  min = date.getMinutes();
  let sec = date.getSeconds();
  
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector(".time").textContent = hour + ":" + min + ":" + sec; /* adding time to the div */
  var t = setTimeout(function(){ currentTime() }, 1000); /* настраиваем таймер */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* вызываем функцию currentTime() */
/*===============================================================Time=====================================*/

function getDate () {
  let date = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thurstday', 'Friday', 'Saturday'];
let dayOfWeek = days[date.getDay()];
 let day = date.getDate();
  document.querySelector('.date').textContent =`${dayOfWeek} , ${monthNames[date.getMonth()]} ${day}`
  var t = setTimeout(function(){ getDate() }, 1000);
}

getDate ();

/*================================================================Date=====================================*/

function getHours () {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours)
   return hours 
  }
 

  function getTimeOfDay() { 
   let result =  getHours ()

  }

/*
  function showGreeting() {
    var timeOfDay = '';
    let greetingPlace = querySelector('.greeting-container')
    console.log('greeting')
  }







/*===============================================================Greeting=====================================*/