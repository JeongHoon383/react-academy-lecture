import React, { Children } from 'react';
import Navbar from './component/Navbar';
import HeaderImg from './component/header/HeaderImg';
import HeaderSearch from './component/header/HeaderSearch';
import Content from './component/Content';
import List from './component/content/List';
import './App.css';

function App() {
  return (
    <div>
      <Navbar>
        <HeaderImg/>
        <HeaderSearch/>
      </Navbar>
      <Content>
        <List/>
      </Content>
    </div>
  );
}

export default App;
