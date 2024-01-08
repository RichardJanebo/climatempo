//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=43ea21e031c7dab6c62afb65a7df1e4c*/
const apiKey = '43ea21e031c7dab6c62afb65a7df1e4c'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'

async function checkWeather(){
    const response = await fetch(apiUrl + apiKey)

}