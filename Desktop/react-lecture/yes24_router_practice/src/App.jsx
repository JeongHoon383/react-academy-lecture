import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import BestSeller from './pages/BestSeller';
import RealTimeBestSeller from './pages/RealTimeBestSeller';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    children : [
      {index : '/', element : <BestSeller/>},
      {path : '/realtime', element : <RealTimeBestSeller/>}
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
