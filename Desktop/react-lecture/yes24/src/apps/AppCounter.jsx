import "./App.css";
import Counter from "../components/Counter";
import React, { useState } from "react";

function App() {
  const [totalCount, setTotalCount] = useState(0)
  const handleClick = (event) => setTotalCount((count) => count + 1);
  //리턴시 반드시 하나의 태그만 출력한다!!
  return (
    <>
      <div className="container">
        <div className="banner">Total : {totalCount}</div>
        <Counter onClick={handleClick} totalCount={totalCount}/> {/* 컴포넌트에 들어간 onClick은 probs의 매개인자로 넘어감 - 부모 counter에 probs로 넘어감 */}
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
      </div>
    </>
  );
}

export default App;
