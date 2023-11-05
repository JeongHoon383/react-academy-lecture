const Product_view = ({image, name, price, event}) => {
  return (
    <div className='view'>
      <img src={image}/>
      <p>{name}</p>
      <p>{price}</p>
      <p>{event}</p>
    </div>
  )
}

export default Product_view
