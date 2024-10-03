const APIKey = "e9d3f837cdafd44bb50a8eef4449d85f" ; 
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric";


const cityName = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathertype = document.querySelector(".weatherIcon");


searchbtn.addEventListener("click",() =>{
   checkWeather(cityName.value);
});

async function checkWeather(city){
    const response = await fetch(`${API}&appid=${APIKey}&q=${city}`);
    const jsondata = await response.json();
    console.log(jsondata); 
    if(jsondata.message == "city not found"){
        alert(jsondata.message);
        document.querySelector(".weather").style.display = "none";

    }else{
        document.querySelector(".cityname").innerHTML = jsondata.name;
        document.querySelector(".temp").innerHTML = Math.round(jsondata.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = jsondata.main.humidity+"%";
        document.querySelector(".windspeed").innerHTML = jsondata.wind.speed+" km/h";
        document.querySelector(".wethr").innerHTML = jsondata.weather[0].description;
    
        const wethr = jsondata.weather[0].main;
        console.log(wethr);
        weatherIconinc(wethr);
        document.querySelector(".weather").style.display = "block";
    }
    
}

function weatherIconinc(wethr){
            if(wethr == "Clouds"){
                weathertype.src = "./weather_icons/cloudy.png";
            } else if(wethr == "Haze"){
                weathertype.src = "./weather_icons/haze.png";
            }else if(wethr == "Clear"){
                weathertype.src = "./weather_icons/sun.png";
            }else if(wethr == "Rain"){
                weathertype.src = "./weather_icons/rainy.png";
            }else if(wethr == "Sunny"){
                weathertype.src = "./weather_icons/sun.png";
            }else{
                weathertype.src = "./weather_icons/cloudy.png";
            }
}
