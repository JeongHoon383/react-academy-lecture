import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import ProductAvata from './ProductAvata';

const Product = ({filename}) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`data/product.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <ProductList>
        {productList.map((product) => 
          <div key={product.pid}>
            <Link to = {`/products/${product.id}`}>
              <ProductAvata image={product.image} />
            </Link>
          </div>
        )}
      </ProductList>
    </div>
  )
}

export default Product
