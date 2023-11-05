import { useEffect, useState } from 'react';
import '../../Content.css';
import ProductView from './ProductView';

export default function List(){
  const [list, setList] = useState([]);
  useEffect(()=>{
    fetch('data/olive_products.json')
    .then((res)=> res.json())
    .then((data) => setList(data));
  }, []);

  return(
    <div className="plist">
      {list.map((product, index)=> (        
        <ProductView 
          image= {product.image}
          name={product.name}
          title={product.title}
          price={product.price}
        />
      ))}
      {/* <ProductView 
        image='https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019046602ko.jpg?l=ko'
        name='비타민세럼'
        title='[인씨 PICK] 코스알엑스 더 비타민C23 세럼 더블기획 (+펩타이드세럼1.5ml*4ea)'
        price='46000'
        />
        <ProductView 
        image='https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018663307ko.jpg?l=ko'
        name='에스쁘아'
        title='[세레나데 재출시/NEW컬러]에스쁘아 꾸뛰르 립틴트 블러벨벳 5.5g'
        price='22000'
        />
        <ProductView 
        image='https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019237414ko.jpg?l=ko'
        name='에스쁘아'
        title='[세레나데 재출시/NEW컬러]에스쁘아 꾸뛰르 립틴트 블러벨벳 5.5g'
        price='22000'
        />
        <ProductView 
        image='https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018956806ko.jpg?l=ko'
        name='에스쁘아'
        title='[세레나데 재출시/NEW컬러]에스쁘아 꾸뛰르 립틴트 블러벨벳 5.5g'
        price='22000'
        /> */}
    </div>
  );
}