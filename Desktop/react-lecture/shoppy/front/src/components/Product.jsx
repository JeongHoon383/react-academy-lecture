import React from "react";
import ProductAvata from "./ProductAvata";
import ProductList from "./ProductList";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Product({filename}){
const [productList, setProductList] = useState([]);
useEffect(()=>{
  fetch(`data/product.json`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setProductList(data);
  });
}, []);

  return(
    <ProductList>      
      {productList.map((product)=> 
        <div key={product.pid}>
          <Link to = {`/products/${product.id}`}>
            <ProductAvata image={product.image}/>
          </Link>
        </div>
      )}      
    </ProductList>
  );
}