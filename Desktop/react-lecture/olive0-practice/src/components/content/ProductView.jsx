export default function ProductView({image, name, title, price}){
  return (
    <div className="view">
      <img className="vimage"src={image} />
      <p className="vname">{name}</p>
      <p className="vtitle">{title}</p>
      <p className="vprice">{price}</p>
    </div>
  );
}

