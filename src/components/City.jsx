import React from "react";

const City = ({ city }) => {
  if (!city) {
    alert("la ciudad no existe");
    return <div>La ciudad no existe</div>;
  }
  return (
    <div className="ciudad">
      <div
        className="container"
        style={{
          textAlign: "center",
          width: "70vw",
          marginTop: "-24rem",
          fontSize: "2rem",
        }}
      >
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
};

export default City;
