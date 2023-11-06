import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <div>
      <Navbar /> {/* 메뉴바 생성 */}
      <Outlet /> {/* 고정된 부분 밑에 보여지는 부분, 메뉴바에서 클릭되는 메뉴를 outlet에서 보여줌, 둘이 세트라고 이해하면 됨. */}
    </div>
  )
}

export default Root
