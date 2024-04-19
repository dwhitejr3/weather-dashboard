console.log('connected');
const searchBtn = $('.btn-primary');
const cityList = $('.city-list');
const cityInput = $('#city-input');
const searchList = $('.search-list');
const bigCard = $('.main-card');


function createList(forecastData) {
    const newCity = $('<li>');
    newCity.addClass('col-2').css('color', 'white').css('background-color' , 'gray').css('border', '5px').css('border-radius', '10px').css('text-align', 'center').css('padding', '3px 10px').css('margin', '10px 10px').text(forecastData.city.name);

    searchList.append(newCity)
}

function weatherCards() {
    const newCard = $('<div>');
    newCard.addClass('card col-1').css('background-image, linear-gradient (to righ')
}

function mainCard(forecastData) {
    const cardHeader = $('<h3>');
    const today = dayjs().format('MM/DD/YYYY');
    cardHeader.addClass('card-text').text(`${forecastData.city.name} ${today}`).css('color', 'white').css('font-weight', 'bold');
    const cardBody = $('<ul>')
    const temp = forecastData.list[0].main.temp;
    cardBody.addClass('body-text').text(`Temp: ${temp}`).css('color', 'white').css('font-size', '20px').css('margin', '10px');

    cardHeader.append(cardBody);
    bigCard.append(cardHeader);

}



searchBtn.on('click', function (event) {
    event.preventDefault();
    // console.log(event);
    getWeatherData();
    // createList(event);
    
})



function getWeatherData() { 
    const weatherSearch = cityInput.val();
    const searchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherSearch}&appid=7a6b8b2f85df6181c14b05b32039d3a5`

    fetch(searchUrl)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();

    })

    .then(function (forecastData) {
        console.log(forecastData);
        console.log(forecastData.city.name);
        createList(forecastData);
        mainCard(forecastData);

})};





