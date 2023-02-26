alert('Добрый день, если не сложно, проверьте работу в последний день')
function currentTime() {
  let date = new Date(); 
  let hour = date.getHours();
  let  min = date.getMinutes();
  let sec = date.getSeconds();
  
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector(".time").textContent = hour + ":" + min + ":" + sec;
  var t = setTimeout(function(){ currentTime() }, 1000); 
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); 
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
  console.log(result)
    if ((result >= 5 && result < 12)) {
      console.log('Morning')
      return 'Morning'
    }
    else if ((result >= 12 && result < 18)) {
      console.log('Afternoon')
      return 'Afternoon'
    }
    else if ((result >= 18 && result < 22)) {
      console.log('Evening')
      return 'Evening'
    }
    else  {
      console.log('Night')
      return 'Night'
    }
  }
  

  function showGreeting() {
    const greetingPlace = document.querySelector('.greeting')
    const timeOfDay = getTimeOfDay();
    console.log(timeOfDay)
    const greetingText = `Good ${timeOfDay}`;
    greetingPlace.textContent = greetingText
    var k = setTimeout(function(){ getDate() }, 1000);
    
  }
  showGreeting() 





/*===============================================================Greeting=====================================*/



let nameInput  = document.querySelector('.name');


function setLocalStorage() {
 
  localStorage.setItem('nameInput', nameInput.value);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
  if(localStorage.getItem('nameInput')) {
    nameInput.value = localStorage.getItem('nameInput');
  }
}
window.addEventListener('load', getLocalStorage)




/*================================================================Greeting-part2=====================================*/
function getRandomNum() {
 let min = Math.ceil(1);
 let  max = Math.floor(20);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}





/*function setBg () {
 let Body  = Document.body
  querySe
  Document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/13.jpg')"
}
setBg ()
/*================================================================BackgroundChange=====================================*/



async function getWeather() {  
       const weatherIcon = document.querySelector('.weather-icon');
      const temperature = document.querySelector('.temperature');
      const weatherDescription = document.querySelector('.weather-description');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
        const res = await fetch(url);
        const data = await res.json(); 
        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        

        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
      }
      getWeather()


      /*================================================================Weather=====================================*/

    
       
      async function getQuotes() {  
        const quotes = 'data.json';
        const res = await fetch(quotes);
        const data = await res.json(); 
        
        let quote = querySelector('.quote')
      console.log(quotes['members'])

      }
      getQuotes();

      

      /*================================================================QuotesOfTheDay=====================================*/