import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={styles.button} type="submit" value="Agregar">
        <IoSearchOutline />
      </button>
    </form>
  );
}
