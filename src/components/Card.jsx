import React from "react";
import CardTemp from "./CardTemp";
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <span className={styles.name}>
        <Link to={`/city/${props.id}`}>{props.name}</Link>
        <button className={styles.button} onClick={props.onClose}>
          <IoCloseCircleOutline />
        </button>
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="Weather icon"
      />
      <div className={styles.temps}>
        <CardTemp label="Min" value={props.min} />
        <CardTemp label="Max" value={props.max} />
      </div>
    </div>
  );
}
