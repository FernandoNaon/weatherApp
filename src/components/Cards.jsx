import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}
        />
      ))}
    </div>
  );
}
