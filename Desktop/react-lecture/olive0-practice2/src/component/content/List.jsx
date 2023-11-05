import {useState, useEffect} from 'react'
import '../../content.css'
import Product_view from './Product_view'

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('data/olive0_product.json')
    .then((res) => res.json())
    .then((data) => setList(data));
  }, []);

  return (
    <div className='plist'>
      {list.map((product, index) => {
        <Product_view 
          image = {product.image}
          name = {product.name}
          price = {product.price}
          event={product.event}
        />
      })}
    </div>
  );
}

export default List
