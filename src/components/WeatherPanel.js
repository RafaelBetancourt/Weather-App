import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';


//const apiKey = 'bdabc7a421ea67caab5aea13676dc74b';

const WeatherPanel = () => {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=bdabc7a421ea67caab5aea13676dc74b&lang=es';
    let cityUrl = '&q=';

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=bdabc7a421ea67caab5aea13676dc74b&lang=es';

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather += cityUrl + loc;

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {
            
            setWeather(weatherData);
        }).catch(error => {
          
            setLoading(false);
            setShow(false);
        });

        // to Forecast

        urlForecast += cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
       
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
          
            setLoading(false);
            setShow(false);
        });
    }

    return (
        
        <React.Fragment>

            <Form 
                newLocation = {getLocation}
            />
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />

        </React.Fragment>
    );
}




export default WeatherPanel;