import React from 'react'

const Quanity = () => {
  let [number, setNumber] = useState(1);

  const handleClickMinus = (e) => {
    // 조건식 ? true : false
    number > 1 ? setNumber(--number) : alert('최소 수량은 1개 입니다.')
  }

  const handleClickPlus = (e) => {
    number < 10 ? setNumber(++number) : alert('최대 수량은 10개 입니다.')
  }

    function quantityCheck(checkFlag, e){
      if(checkFlag === 'minus') { //minus
        number > 1 ? setNumber(--number) : alert('최소 수량은 1개 입니다.')
      }else{
        number < 10 ? setNumber(++number) : alert('최대 수량은 10개 입니다.')
      }
    }

  return (
    <div className='quanity'>
      <input type="checkbox"/>
      <span><button>-</button></span>
      <span>1</span>
      <span><button>+</button></span>
    </div>
  )
}

export default Quanity
