import React from "react";
import Product from "../components/Product";
import { AiTwotoneSkin } from "react-icons/ai";

const AllProducts = () => {
  return (
    <div className="content">
      <p className="font_title">
        <AiTwotoneSkin /> All Products
      </p>
      <Product />
    </div>
  );
};

export default AllProducts;
