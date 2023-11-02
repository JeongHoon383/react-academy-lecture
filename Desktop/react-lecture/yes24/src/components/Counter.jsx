import React, {useState} from 'react';

const Counter = ({onClick, totalCount}) => { //{} 들어가는 이유 : json 객체로 넘어오기 때문에 
  // let number = 0;
  const [count, setCount] = useState(0)

  // const increment = (event) => {
  //   setCount(count + 1);

  function increment(){
    setCount(count => count + 1)
    // setCount(count => count + 1);
  }

  return (
    <div>
      <span className='number'>{count}/<span className='total'>{totalCount}</span></span>
      {/* <button className='Add-btn' onClick={() => {
        increment();
        increment();
        increment();
      }}>Add +3</button> */}
      <button className='Add-btn' onClick={() => {
        setCount(count +1)
        onClick();
        // increment();
      }}>Add +1</button>
    </div>
  )
}

export default Counter;
