import React from "react";
import styles from "./CardTemp.module.css";

const CardTemp = (props) => {
  return (
    <div className={styles.cardTemp}>
      <label>{props.label}</label>
      <span>{props.value}</span>
    </div>
  );
};

export default CardTemp;
