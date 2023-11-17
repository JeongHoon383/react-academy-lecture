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
        <ul className ="product_info">
          <li className ="detail_font_bigger">{product.name}</li>
          <li className ="detail_font_bigger">{product.price}</li>
          <li className ="detail_font_small">{product.info}</li>
          <li>
              <span className ="detail_font_small">옵션 : </span>
              <select className ="detail_select">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
          </li>
          <li><button className ="detail_button">장바구니 추가</button></li>
        </ul>        
      </div>
    </div>
  );
}