import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import BestSeller from './pages/BestSeller';
import RealTimeBestSeller from './pages/RealTimeBestSeller';
import DayBestSeller from './pages/DayBestSeller';
import MonthWeekBestSeller from './pages/MonthWeekBestSeller';
import HotPriceBestSeller from './pages/HotPriceBestSeller';
import SteadySeller from './pages/SteadySeller';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    children : [
      {index : '/', element : <BestSeller/>},
      {path : '/realtime', element : <RealTimeBestSeller/>},
      {path : '/day', element : <DayBestSeller/>},
      {path : '/monthWeek', element : <MonthWeekBestSeller/>},
      {path : '/hot', element : <HotPriceBestSeller/>},
      {path : '/steady', element : <SteadySeller/>}
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
