var weather = document.querySelector('.weather')
var content = document.querySelector('.content')
var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('short-desc')
var visibility =  document.querySelector('.visibility span')

var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')

var modal = document.querySelector('.modal')
var icon = document.querySelector('.icon')

async function changeWeather (){
   let capitalSearch=  search.value.trim( )
    let APi = ` https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=acfdbac8333939c8633285e021654416`
    let data = await  fetch(APi).then(res=> res.json ())
    console.log(data)
    if (data.cod == 200){
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        value.innerText =  Math.fround(data.main.temp - 273.15 ) 
        if (value < 20   ){
           weather.classList.add('cold')
          }

        time.innerText = new Date().toLocaleDateString('vi')
    } else{
       content.style.visibility = ' hidden'
       modal.style.visibility = 'visible'
    }
}



search.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		changeWeather(e.target.value)
	}
})

icon.addEventListener('click', function (){
    modal.style.visibility = 'hidden'
})
