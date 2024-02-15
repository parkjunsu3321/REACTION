import React from 'react';
import MediaQuery from 'react-responsive';
import GameMainSet from '../components/GameMainSet';
import Layout from '../components/Layout';

function JpopSong() {
  const headerContent = (
    <>
      <MediaQuery minWidth={767}>
        <img 
          src="../images/Younha.jpg"
          alt="Header Image" 
          style={{ width: '20%' }}
        />
      </MediaQuery>
      
      <MediaQuery maxWidth={767}>
        <img 
          src="../images/Younha.jpg"
          alt="Header Image" 
          style={{ width: '80%' }}
          />
      </MediaQuery>
    </>
  );

  const textBoxContent =  (
    <div>
      <h1>대중음악 맞추기</h1>
      <p>문제의 난이도는 Easy, Normal, Hard 로 나눠지며 각 단계마다 문제의 개수가 10문항 늘어납니다.</p>
      <p>Easy 난이도에서는 10초, Normal 난이도에서는 5초 Hard 난이도에서는 1초 동안 노래를 들려 드립니다.</p>
    </div>
  );

  const RightMainContent = (
    <>
    <MediaQuery minWidth={767}>
      <GameMainSet headerContent={headerContent} textBoxContent={textBoxContent} />
    </MediaQuery>

    <MediaQuery maxWidth={767}>
        <GameMainSet headerContent={headerContent} textBoxContent={textBoxContent} />
    </MediaQuery>
    </>
  );

  return (
      <Layout RightMainContent={RightMainContent} />
  );
}

export default JpopSong;