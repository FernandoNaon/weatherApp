import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { WiDayCloudy } from "react-icons/wi";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.navBar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className={styles.navEl}>
          Weather App
          <WiDayCloudy />
        </span>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <span className={styles.navEl}>About</span>
      </Link>
      <span className={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </span>
    </div>
  );
};

export default NavBar;
