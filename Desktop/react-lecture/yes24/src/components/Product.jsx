import React, { useEffect, useState } from "react";

const Product = () => {
  //products.json --> fetch 사용
  const [products, setProducts] = useState([]); // 0 으로 주면 숫자 변수가 됨. []을 넣는 이유 : 배열 형태의 데이터를 넣어야 되기 때문
  const [checked, setChecked] = useState(false); // 체크박스 이벤트상태 저장
  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    fetch(`data/${checked? 'sale_': ''}products.json`) // 무한루프로 실행!! 조심할 것, fetch 먼저 사용할시 
    .then((res) => res.json()) //스트링 형태로 넘어오는 데이터를 json 객체로 바꿔주는 문법
    .then((data) => {
      setProducts(data);
    })
    .catch(() => {
      console.log('error');
    });

    return (() => {
      console.log('패치 후 정리해야 하는 청소작업 진행!!');
    })
  }, [checked]);
  // useEffect() -> fetch를 관리해주는 메서드 : 최초에 한번만 fetch를 실행, 무한루프를 막는 것
  // useEffect(a, b) -> a = 최초의 fetch, 
  // useEffect(() => {}, [])
  
  return (
    <div>
      <h1>show Product!!</h1>
      <input type="checkbox" id="checkbox" onChange={handleChange}/>
      <label htmlFor="checkbox">Show only sale!!</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>name : {product.name}</h3>
            <h3>price : {product.price}</h3>
            <h3>id : {product.id}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
