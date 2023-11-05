import React, { Children } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import HeaderImg from "./components/header/HeaderImg";
import HeaderSearch from "./components/header/HeaderSearch";
import List from "./components/content/List";
import './App.css';


export default function AppWrap(){
  return(
    <div>
      <Navbar>  
        <HeaderSearch />      
        <HeaderImg />        
      </Navbar>
      <Content>
        <List/>
      </Content>
      <Footer>
        <p>footer</p>
      </Footer>      
    </div>
  );
}