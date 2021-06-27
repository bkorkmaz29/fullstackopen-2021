import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = (props) => {
  return (
    <li>
      {props.country.name}{" "}
      <button value={props.country.name} onClick={props.handleShow}>
        show
      </button>
    </li>
  );
};

const Showcase = (props) => {
  const [weather, setWeather] = useState([]);

  console.log(weather);
  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: props.country.capital,
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
        console.log(
          `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
        );
        setWeather([apiResponse]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (weather.length > 0) {
    const currentWeather = weather[0].current;
    return (
      <>
        <h1>{props.country.name}</h1>
        capital: {props.country.capital}
        <br />
        population: {props.country.population}
        <br />
        <h1>Languages</h1>
        {props.country.languages.map((languages) => (
          <li key={languages.iso639_1}>{languages.name}</li>
        ))}
        <img height="100px" src={props.country.flag} alt="flag" />
        <h2>Weather in {props.country.capital}</h2>
        <p>temperature: {currentWeather.temperature}° Celcius</p>
        <p>
          wind: {currentWeather.wind_speed} mph direction{" "}
          {currentWeather.wind_dir}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1>{props.country.name}</h1>
        capital: {props.country.capital}
        <br />
        population: {props.country.population}
        <br />
        <h1>Languages</h1>
        {props.country.languages.map((languages) => (
          <li key={languages.iso639_1}>{languages.name}</li>
        ))}
        <img height="100px" src={props.country.flag} alt="flag" />
      </>
    );
  }
};

const Display = (props) => {
  if (props.countriesToShow.length > 1 && props.countriesToShow.length <= 10) {
    return (
      <ul>
        {props.countriesToShow.map((country) => (
          <Country
            key={country.alpha3Code}
            country={country}
            handleShow={props.handleShow}
          />
        ))}
      </ul>
    );
  } else if (props.countriesToShow.length === 1) {
    return (
      <div>
        {props.countriesToShow.map((country) => (
          <Showcase key={country.alpha3Code} country={country} />
        ))}
      </div>
    );
  } else if (props.countriesToShow.length === 0) {
    return <div>There are no countries</div>;
  } else {
    return <div>There are too many countries</div>;
  }
};

export default Display;
