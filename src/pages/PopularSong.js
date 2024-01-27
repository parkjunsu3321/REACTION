import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import GameMainSet from '../components/GameMainSet';
import Layout from '../components/Layout';

const PopularSong = () => {
  const headerContent = (
    <img 
      src="../images/younha.jpg"
      alt="Header Image" 
      style={{ width: '20%' }}
    />
  );

  const textBoxContent = (
    <div>
      <h1>대중가요 맞추기</h1>
      <p>문제의 난이도는 Easy, Normal, Hard 로 나눠지며 각 단계마다 문제의 개수가 10문항 늘어납니다.</p>
      <p>Easy 난이도에서는 10초, Normal 난이도에서는 5초 Hard 난이도에서는 1초 동안 노래를 들려 드립니다.</p>
    </div>
  );

  const onPlayerReady: YouTubeProps['onReady'] = event => {
    event.target.playVideo();
  };
  
  const onPlayerStateChange: YouTubeProps['onStateChange'] = event => {
    if (!event.data) { 
      const player = event.target;
      player.seekTo(5);
      player.playVideo();
    }
  };
  
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      start: 5,
      end: 10,
      controls: 0,
      rel: 0, 
    },
  };
  

  const RightMainContent = (
    <GameMainSet headerContent={headerContent} textBoxContent={textBoxContent}>
      <YouTube
        videoId="6Af6b_wyiwI"
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
      />
    </GameMainSet>
  );

  return (
    <Layout RightMainContent={RightMainContent} />
  );
};

export default PopularSong;
