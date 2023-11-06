import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Video = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    //text 파라미터를 /video/text 파라미터 전송
    navigate(`/video/${text}`); //send redirect와 비슷한 역할
  }

  return (
    <div>
      <h1>Video Page!!!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='videoId' placeholder='video Id : ' value={text} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Video
