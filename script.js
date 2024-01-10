//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=43ea21e031c7dab6c62afb65a7df1e4c*/
const apiKey = '43ea21e031c7dab6c62afb65a7df1e4c'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}&lang=pt_br` )
    var data = await response.json()

    console.log(data)

  
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "imagens/clouds.png"

    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "imagens/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "imagens/drizzle.png"
    }else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "imagens/humidity.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "imagens/mist.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "imagens/rain.png"
    }else if (data.weather[0].main == "Search"){
        weatherIcon.src = "imagens/search.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "imagens/snow.png"
    }else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "imagens/Wind.png"
    }
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


