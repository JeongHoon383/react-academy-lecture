import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Video from './pages/Video';
import Home from './pages/Home';
import Error from './pages/Error';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';
import './App.css';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>, // 페이지에 들어가는 router를 넣어줘야됨 즉, 맨 처음에 보여지는 화면, 기본 세팅화면, 맨처음에 보여지는 싱글페이지는 있어야됨, 그걸 여기에 넣어줌
    errorElement : <Error/>,
    children : [ // 루트 안에서 이뤄지는 페이지를 이쪽에 넣음
      {index : '/', element : <Home />},
      {path : '/video', element : <Video />},
      {path : '/video/:videoId', element : <VideoDetail />}
    ]
  } //root 파일에 페이지가 기본적으로 출력되고, 그 밑에 children 파일들이 출력됨, root는 navbar 만들때 사용하면 될듯
  
]);

function App() {
  return (
      <div>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
