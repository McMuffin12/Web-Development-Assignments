// name pulled from api
let cityName = "";

function getCoordinates(cityQuery, countryCode, state) {
  fetch("https://geocoding-api.open-meteo.com/v1/search?name="+ cityQuery + "&count=10&language=en&format=json&countryCode=" + countryCode)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        if (countryCode === "US") {
          if (!state) { // if the user didn't enter a state, throw an error and return
            console.error("State is required for US cities.");
            const output = document.getElementById("output");
            output.textContent = 'State is required for US cities.';
            return;
          }
          for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].admin1.toLowerCase() == state) { // check to see if results matches users requested state
              var lat = data.results[i].latitude;
              var lon = data.results[i].longitude;
              cityName = data.results[i].name;
            }
          }
          if (!lat || !lon) { // if we went through all the results and didn't find a city in the specified state, throw an error and return
            console.error("City not found in the specified state.");
            const output = document.getElementById("output");
            output.textContent = 'City not found in the specified state.';
            return;
          }
        } else { // if not in the US, just take the first result (I don't want to have to deal with multiple cities with the same name in different countries)
          var lat = data.results[0].latitude;
          var lon = data.results[0].longitude;
          cityName = data.results[0].name;
        }
        console.log("Latitude: " + lat + ", Longitude: " + lon);
        console.log(JSON.stringify(data));
        getWeatherData(lat, lon);
      } else { // if there are no results, throw an error and return
        console.error("City not found.");
        const output = document.getElementById("output");
        output.textContent = 'City not found.';
      }
    })
    .catch(err => { // if there was an error with the fetch, log it and display an error message
      console.error(err);
      const output = document.getElementById("output");
      output.textContent = 'Error fetching coordinates.';
    });
}

function getWeatherData(lat, lon) {
  fetch("https://api.open-meteo.com/v1/forecast?latitude="+ lat +"&longitude="+ lon +"&current=relative_humidity_2m,wind_speed_10m,temperature_2m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch")
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById("output");
      output.innerHTML = "";

      // pull relevent data from api response
      const tempF = data.current.temperature_2m;
      const humidity = data.current.relative_humidity_2m + ' %';
      const windSpeed = data.current.wind_speed_10m + ' MPH';
      const condition = getCondition(data.current.weather_code);

      // create html to display inside of output div
      output.innerHTML = `
        <h2>${cityName}</h2>
        <p><strong>Condition:</strong> ${condition}</p>
        <p><strong>Temperature:</strong> ${tempF} °F</p>
        <p><strong>Humidity:</strong> ${humidity}</p>
        <p><strong>Wind speed:</strong> ${windSpeed}</p>
      `;
      console.log(JSON.stringify(data));
    })
    .catch(err => { // if there was an error with the fetch, log it and display an error message
      console.error(err);
      const output = document.getElementById("output");
      output.textContent = 'Error fetching weather data.';
    });
}

// convert weather code from api to condition emoji
function getCondition(c) {
  if (c === 0) return '☀️';
  if ([1, 2, 3].includes(c)) return '☁️';
  if ([45, 48].includes(c)) return '🌫️';
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(c)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(c)) return '❄️';
  if ([95, 96, 99].includes(c)) return '⛈️';
  return 'N/A';
}

// pull data from form and get weather data
document.getElementById('weatherForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // values pulled from form and formatted for incasesensitiveity
  const cityQuery = document.getElementById('city').value.trim().toLowerCase().replaceAll(" ","+");
  const state = document.getElementById('state').value.trim().toLowerCase();
  const countryCode = document.getElementById('country').value.trim().toUpperCase();

  getCoordinates(cityQuery, countryCode, state); // get cords and then weather data
});