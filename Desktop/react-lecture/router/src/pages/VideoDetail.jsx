import React from 'react'
import { useParams } from 'react-router-dom'

const VideoDetail = () => {
  const {videoId} = useParams(); // 앞에서 파라미터로 넘어오는 모든 것을 출력해줌
  console.log(videoId);
  return (
    <div>
      <h2>VideoDetail Page!!!</h2>
      <div>Video ID : {videoId}</div>
    </div>
  )
}

export default VideoDetail
