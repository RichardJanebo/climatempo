//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=43ea21e031c7dab6c62afb65a7df1e4c*/
const apiKey = '43ea21e031c7dab6c62afb65a7df1e4c'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}&lang=pt_br` )
    var data = await response.json()

    console.log(data)

  
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


