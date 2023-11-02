import './App.css';
import Dwitters from './component/Dwitters';
import { useEffect, useState } from 'react';

function App() {
  const [dwitters, setDwitters] = useState([]);
  useEffect(() => {
    fetch('data/dwitter.json')
    .then((res) => res.json())
    .then((data) => setDwitters(data));
  }, []);

  return (
    <div>
      <h1>Dwitter</h1>
      <ul>
        <li>All Dwitter</li>
        <li>My Dwitter</li>
        <li>Login / Sign</li>
      </ul>
      {
        dwitters.map((dwitter) => (
          <Dwitters
          image = {dwitter.image}
          name = {dwitter.name}
          id = {dwitter.id}
          date = {dwitter.date}
          content = {dwitter.content}
          />    
        ))
      }
    </div>
  );
}

export default App;
