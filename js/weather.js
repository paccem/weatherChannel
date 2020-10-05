// function theMap(){
//     var mapproperty = {
//         center:new google.maps.LatLng(6.4474, 3.3903),
//         zoom:5
//     };
//     var map = new google.maps.map(document.getElementById("googleMap").mapproperty)
// }





function searchWeather(){
    var location = document.getElementById("searchBox").value;
    if (location == ""){
        alert("please enter a location") 

    }else{
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=26add34f37c34eb2f17bcd8faa787292" )
        .then(response =>{
            return response.json()
        })
        .then(result =>{
            weatherDisplay = "<p>"
            currentweather = result.weather[0]
            todayweather = currentweather.main
            weatherDescript = currentweather. description
            weathericon = currentweather.icon
            iconUrl = "http://openweathermap.org/img/w/" + weathericon + ".png";
            let icon = `<img src=${iconUrl}>`
            temp = result.main.temp
            temp = Math.floor(temp - 273.15);
            windSpeed = result.wind.speed
            humid = result.main.humidity



            
            weatherDisplay += location + "<br>" + todayweather + "<br>" + weatherDescript + "<br>"
             + temp + "<sup>o</sup>C" +"<br>" + windSpeed + "m/s" + "<br>" + humid + "%"
            weatherDisplay += "</p>"
            document.getElementById("weatherforcast").innerHTML= weatherDisplay;

            var iconImg = "<div class=iconImg>"
            iconImg += icon
            iconImg += "</div>"
            document.getElementById("weatherIcon").innerHTML = iconImg;
            
        })
        .catch(error => {
            console.log(error);
        })
    }

}