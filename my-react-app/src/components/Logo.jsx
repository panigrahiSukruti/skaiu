import "../components/Logo.css";
import Link from "react-router-dom";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <img src="../assets/assets/directright.png" alt="logo" />
      <span>LAMA.</span>
    </Link>
  );
};

export default Logo;