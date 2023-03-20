const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

function spitOutFahrenheit(kelvin) {
    fahrenheit = Math.round(1.8 * (kelvin - 273)
        + 32);
    return fahrenheit;
}

const isDayTime = (icon) => {
    if(icon.includes('d')){
        return true
    } else {
        return false;
    }
}
updateWeatherApp = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name;
    cardBody.innerHTML = `
    <div class="card-mid row">
    <div class="col-8 text-center temp">
        <span>${spitOutFahrenheit(city.main.temp)}&deg;F</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0].description}</p>
        <p class="high">${spitOutFahrenheit(city.main.temp_max)}&deg;F</p>
        <p class="low">${spitOutFahrenheit(city.main.temp_min)}&deg;F</p>
    </div>
</div>
<div class="icon-container shadow mx-auto text-center">
    <img src="${iconSrc}" alt=""/>
</div>
<div class="card-bottom px-5 py-4 row">
    <div class="col text-center">
        <p>${spitOutFahrenheit(city.main.feels_like)}&deg;F</p>
        <span>Feels Like</span>
    </div>
    <div class="col text-center">
        <p>${Math.round(city.wind.speed)} MPH</p>
        <span>Wind Speed</span>
    </div>
</div>
`;

if (isDayTime(imageName)) {
    console.log('day');
    timeImage.setAttribute('src', 'img/dayimage.svg');
    if(cityName.classList.contains('text-white')){
        cityName.classList.remove('text-white');
    } else {
        cityName.classList.add('text-black');
    }
 } else {
    console.log('night')
    timeImage.setAttribute('src', 'img/night.svg');
    if(cityName.classList.contains('text-black')){
        cityName.classList.remove('text-black');
    } else {
        cityName.classList.add('text-white');
    }
    
 }

 cardInfo.classList.remove('d-none');

}




// add an event listener to the form 
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
    .then((data) => {
        updateWeatherApp(data);
    })
    .catch((error) => {console.log(error)})

})