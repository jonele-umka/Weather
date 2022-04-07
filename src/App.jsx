import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Form } from './Components/forms';
import Weather from './images/weather_bg.jpg';
import './Components/media.css';

// class App extends React.Component {

// }

// function App () {

// }

export const App = () => {
	return (
		<div className="app">
			<div className="container">
				<div className="app_block">
					<img src={Weather} alt="weather" />
					<Form />
					
				</div>
			</div>
		</div>
	);
};
