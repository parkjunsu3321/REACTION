import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const App = ({ videoId }) => {
  const [key, setKey] = useState(0); // 상태를 변경하여 강제로 컴포넌트를 다시 렌더링
  const validateVideoId = (videoId) => {
    // videoId validation logic (e.g., length, special characters)
    // Perform default value or error handling if invalid
    return videoId ? videoId : '8dlA7MKi06k';
  };

  const onEndHandler = (event) => {
    // Video end handler logic
    event.target.stopVideo(0);
  };

  const validatedVideoId = validateVideoId(videoId);

  useEffect(() => {
    // 페이지가 로드될 때마다 key 값을 변경하여 강제로 다시 렌더링
    setKey((prevKey) => prevKey + 1);
  }, [videoId]); // videoId가 변경될 때만 useEffect 실행

  return (
    <div style={{ position: 'absolute', left: '-9999px' }}>
      <YouTube
        key={key} // key 값이 변경될 때마다 YouTube 컴포넌트가 새로 생성됨
        videoId={validatedVideoId}
        opts={{
          width: '300',
          height: '300',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            start: 0,
            end: 5,
          },
        }}
        onEnd={onEndHandler}
      />
    </div>
  );
};

export default App;
