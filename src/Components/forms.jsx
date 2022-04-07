import React, { useState } from 'react'
import { useHttp } from './../hooks/http.hook'
let API_KEY = '8c4b79047d3ee6e058c53a3a6931e1a6'
export const Form = () => {
	const { loading, request } = useHttp()
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({
		name: '',
		main: {
			temp: '',
			humidity: '',
			pressure: '',
		},
		weather: [
			{
				main: '',
				icon: '',
			},
		],
	})
	// const [состояние, назначитьСостояние] = useState(начальноеСостояние)

	const changeHandler = (event) => {
		setCity(event.target.value)
	}

	const getWeather = (event) => {
		event.preventDefault()

		if (city === '') {
			alert('Enter a city!')

		}else{

		request(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		).then((response) => {
			setWeather(response)
		})
		console.log(weather)
	}
}

	return (
		<div className="form">
			<form className="form_main">
				<input
					type="text"
					placeholder="Enter a city..."
					onChange={changeHandler}
				/>
				<button onClick={getWeather}>Search</button>
			</form>
			{loading === true ? (
				<div className="loading"></div>
			) : (
				<div className="form_result">
					<h2>{weather.name} </h2>
					{weather.name === '' ? (
						<ul></ul>
					) : 
					weather.cod === '404' ? <h2>Not found!</h2>:
					(
						<ul>
							<li> Temperature: {weather.main.temp} &#8451;</li>
							<li> Humidity: {weather.main.humidity} % </li>
							<li> Pressure {weather.main.pressure} hPa </li>
							<li>
								{' '}
								weather: {weather.weather[0].main}
								<img
									src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
									alt="weather"
								/>
							</li>
						</ul>
					)}
				</div>
			)}
		</div>
	)
}
