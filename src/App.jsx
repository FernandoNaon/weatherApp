import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import City from "./components/City";

function App() {
  const [cities, setCities] = useState([]);
  const API_KEY = "5ea5fbdf1252ca1e88e6f95a6dc07552";

  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((response_json) => {
        if (response_json.main !== undefined) {
          const city = {
            min: Math.round(response_json.main.temp_min),
            max: Math.round(response_json.main.temp_max),
            img: response_json.weather[0].icon,
            id: response_json.id,
            wind: response_json.wind.speed,
            temp: response_json.main.temp,
            name: response_json.name,
            weather: response_json.weather[0].main,
            clouds: response_json.clouds.all,
            latitud: response_json.coord.lat,
            longitud: response_json.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      })
      .catch((e) => console.log(e));
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.bkg}>
        <div className={styles.container}>
          <Route path={"/"} render={() => <NavBar onSearch={onSearch} />} />
          <div className={styles.citiesContainer}>
            <Route path={"/about"} component={About} />
            <Route
              exact
              path={"/"}
              render={() => <Cards cities={cities} onClose={onClose} />}
            />

            <Route
              exact
              path={"/city/:cityId"}
              render={({ match }) => (
                <City city={onFilter(match.params.cityId)} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
