import React from 'react';
import YouTube from 'react-youtube';

const App = ({ videoId }) => {
  const validateVideoId = (videoId) => {

    return videoId ? videoId : 'qm6Fe_Dymyc';
  };

  const onEndHandler = (event) => {

    event.target.stopVideo(0);
  };

  const validatedVideoId = validateVideoId(videoId);

  return (
    <div style={{ position: 'absolute', left: '-9999px' }}>
      <YouTube
        videoId={validatedVideoId}
        opts={{
          width: '0',
          height: '0',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            start: 30,
            end: 40,
          },
        }}
        onEnd={onEndHandler}
      />
    </div>
  );
};

export default App;