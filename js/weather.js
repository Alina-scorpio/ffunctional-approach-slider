(function(){
  const temp = document.querySelector('.weather-temperature');
  const weatherIcon = document.querySelector('.weather-icon img')
  const urlApiKey = 'https://api.openweathermap.org/data/2.5/weather?&q=%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F&units=metric&appid=b38f2145c7623e32e4c0b009af29f278'

    
  /* Темпрература та стан неба в Запоріжжі*/
    async function weather () {
      await fetch (urlApiKey)
        .then(function (response) {
      return response.json()
  })
  .then(function (data) {
  temp.innerHTML = '+ ' + Math.floor(data.main.temp) + ' &deg C';
  let weatherDescription = data.weather[0].main;
  switch (weatherDescription){
    case  'Clouds':
      weatherIcon.src = 'assets/icons/weather_icon/clouds.png';
      weatherIcon.alt = 'clouds'
        break;
        case  'Rain':
        weatherIcon.src = 'assets/icons/weather_icon/rain.png';
        weatherIcon.alt = 'rain'
        break;
    }
    })
  }
  weather()
}())