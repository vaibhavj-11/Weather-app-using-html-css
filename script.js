// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9cef207860msh1ba8d46a5a0c7cap151f77jsn686ea7cdf2d7',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const getWeather = (city)=>{
// 	cityname.innerHTML=city
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		const data = JSON.parse(result)
// 		console.log(result);
// 		cloud_pct.innerHTML =  data.cloud_pct
// 		temp.innerHTML =  data.temp
// 		feels_like.innerHTML =  data.feels_like
// 		humidity.innerHTML =  data.humidity
// 		min_temp.innerHTML =  data.min_temp
// 		max_temp.innerHTML =  data.max_temp
// 		wind_speed.innerHTML =  data.wind_speed
// 		wind_degrees.innerHTML =  data.wind_degrees
// 		sunrise.innerHTML =  data.sunrise
// 		sunset.innerHTML =  data.sunset

// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// Submit.addEventListener("click", (e)=>{
// 	getWeather(city.value)
// })

// getWeather("Delhi")

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
  method: 'GET',
  headers: {
	'X-RapidAPI-Key': '9cef207860msh1ba8d46a5a0c7cap151f77jsn686ea7cdf2d7',
	'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

const getWeather = async (city) => {
  const citynameElement = document.getElementById("cityname");
//   const cloud_pctElement = document.getElementById("cloud_pct");
  const tempElement = document.getElementById("temp");
  const feels_likeElement = document.getElementById("feels_like");
  const humidityElement = document.getElementById("humidity");
  const min_tempElement = document.getElementById("min_temp");
  const max_tempElement = document.getElementById("max_temp");
  const wind_speedElement = document.getElementById("wind_speed");
  const wind_degreesElement = document.getElementById("wind_degrees");
  const sunriseElement = document.getElementById("sunrise");
  const sunsetElement = document.getElementById("sunset");

  try {
	const response = await fetch(`${url}?city=${city}`, options);
	const result = await response.text();
	const data = JSON.parse(result);
	console.log(data);

	citynameElement.innerHTML = city;
	// cloud_pctElement.innerHTML = data.cloud_pct;
	tempElement.innerHTML = data.temp;
	feels_likeElement.innerHTML = data.feels_like;
	humidityElement.innerHTML = data.humidity;
	min_tempElement.innerHTML = data.min_temp;
	max_tempElement.innerHTML = data.max_temp;
	wind_speedElement.innerHTML = data.wind_speed;
	wind_degreesElement.innerHTML = data.wind_degrees;
	sunriseElement.innerHTML = data.sunrise;
	sunsetElement.innerHTML = data.sunset;
  } catch (error) {
	console.error(error);
  }
};

document.getElementById("Submit").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  e.preventDefault()
  getWeather(city);
});
document.getElementById("Odisha").addEventListener("click", (e) => {
	e.preventDefault()
	getWeather("Odisha");
});
document.getElementById("Delhi").addEventListener("click", (e) => {
	e.preventDefault()
	getWeather("Delhi");
});
document.getElementById("Chennai").addEventListener("click", (e) => {
	e.preventDefault()
	getWeather("Chennai");
});

// Initially fetch weather for a default city (Delhi)
getWeather("Delhi");