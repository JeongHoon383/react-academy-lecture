import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import ProductAvata from "../components/ProductAvata";

export default function ProductDetail(){
  const {id} = useParams();
  const [product, setProduct] = useState({});
  useEffect(()=>{
    fetch(`/data/product.json`)
    .then((res) => res.json())
    .then((data) => {
      data.filter((product) => {
        if(product.id === id){
          setProduct(product);
        }
      });
    });
  }, []);
  
  return(
    <div className="content">
      <div className ="product_detail">
        <img src={product.image} className="detail_image"/>
      </div>
    </div>
  );
}