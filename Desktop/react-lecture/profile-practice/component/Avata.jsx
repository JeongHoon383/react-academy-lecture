const Avata = ({image, isNew}) => {
  return (
    <div>
      <img src={image} className="img"/>
      {isNew && <span className="new">New</span>}      
    </div>
  )
}

export default Avata
