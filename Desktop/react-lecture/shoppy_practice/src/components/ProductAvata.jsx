import React from "react";

const ProductAvata = ({ image }) => {
  return (
    <div className="productAvata">
      <img className="productAvata_image" src={image} alt="" />
    </div>
  );
};

export default ProductAvata;
