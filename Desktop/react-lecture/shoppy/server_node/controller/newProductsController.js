

export async function insertProduct(req, res){
  const {image,name,price,info} = req.body;
  console.log({image,name,price,info});
}