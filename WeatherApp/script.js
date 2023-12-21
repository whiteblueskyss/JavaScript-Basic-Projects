const key = "7a8c8d391a755ee4799089a7d606ef33";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherImg = document.querySelector('.weather-img');
const weather = document.querySelector('.weather');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${key}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none";
    }
    else{
        
    var data = await response.json();

    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'° C';
    document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
    document.querySelector('.wind').innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="images/drizzle.png";
    }
    
    else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png";
    }

    
    else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/rain.png";
    }
    
    else if(data.weather[0].main=="Snow"){
        weatherImg.src="images/Snow.png";
    }

    weather.style.display= "block";
    document.querySelector(".error").style.display = "none";


    }

    console.log(data);
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
