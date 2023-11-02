import React, { useState } from 'react'
import './App.css';
import Product from './components/Product';

const AppToggle = () => {
  const [showProduct, setShowProduct] = useState(false); //false를 주는 이유 : product가 처음에 보이면 안되기 때문
  const handleClick = () => setShowProduct(!showProduct)

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {showProduct && <Product />}
    </div>
  )
}

export default AppToggle
