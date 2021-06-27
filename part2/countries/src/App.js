import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [newCheck, setNewCheck] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);
  console.log(allCountries);

  const handleNameCheck = (event) => {
    setNewCheck(event.target.value);

    const countriesToShow = allCountries.filter((country) =>
      country.name.toLowerCase().includes(newCheck.toLowerCase())
    );
    setCountries(countriesToShow);
  };

  const handleShow = (event) => {
    const countriesToShow = allCountries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCountries(countriesToShow);
    console.log(countries);
  };
  return (
    <div>
      <Search handleNameCheck={(event) => handleNameCheck(event, "newCheck")} />

      <Display
        countriesToShow={countries}
        handleShow={(event) => handleShow(event)}
      />
    </div>
  );
};

export default App;
