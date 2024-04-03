const BaseUrl="http://api.weatherapi.com/v1/current.json?key=d4ab15d9ba9f401b86d172652241603&q=";

//http://api.weatherapi.com/v1/current.json?key=d4ab15d9ba9f401b86d172652241603&q=London&aqi=no
let btn=document.querySelector("#btn");
let City=document.querySelector("#search");
//let City=document.querySelector("#sbox");


btn.addEventListener("click", async () => {
    const cityName = City.value.trim();
    if (cityName !== "") {
        const url = `${BaseUrl}${cityName}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                let icon=document.querySelector("#icon");
                //icon.setAttribute=(,data.current.condition.icon);

                if (icon) {
                    icon.onload = function() {
                        icon.classList.remove("hidden"); // Show the image once loaded
                    };
                    icon.src="https:"+data.current.condition.icon;// Set the image source
                }
                //icon.src="https:"+data.current.condition.icon;

                let cityname=document.querySelector("#name");
                cityname.innerHTML=data.location.name;

                let temp=document.querySelector("#temp");
                temp.innerHTML="Temp : "+data.current.temp_c+" °C";

                let humid=document.querySelector("#humid");
                humid.innerHTML="Humid : "+data.current.humidity;

                let wind=document.querySelector("#wind");
                wind.innerHTML="Wind : "+data.current.wind_kph+" kph";

                let cond=document.querySelector("#cond");
                cond.innerHTML="Weather : "+data.current.condition.text;

                console.log(data);
                console.log(icon);
                console.log(cityname);
                console.log(cond);
                console.log(temp);
                console.log(humid);
                console.log(wind);
               

            } else {
                console.log("City not found or API request failed.");

            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    } else {
        console.log("Please enter a valid city name.");
    }
});
