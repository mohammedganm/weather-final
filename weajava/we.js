// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=ab51dd14a2f4070d46322dc73e357000"
let tempDev = document.querySelector(".temp");
let weather = {
  appkey: "ab51dd14a2f4070d46322dc73e357000",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        weather.appkey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayweather(data));
  },
  displayweather: function (data) {
    const { name } = data;
    const { icons, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(data.weather[0]);
    console.log(name, icons, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "weather in " + name;
    // document.querySelector(".icons").innerText = "weather in " + name;
    document.querySelector(".description").innerText = description;
    tempDev.innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    weather.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
      console.log("hello");
    }
  });

// const fetching = async () => {
//   const response = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q" +
//       city +
//       "&units=metric&appid=ab51dd14a2f4070d46322dc73e357000"
//   );
//   let data = await response.json();
//   console.log(data);
// };

// fetching();
