import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="content">
      <div className="banner">
        <h3>Shop With US</h3>
        <p>Best Products, High Quality</p>
      </div>
      <Product />
    </div>
  );
};

export default Home;
