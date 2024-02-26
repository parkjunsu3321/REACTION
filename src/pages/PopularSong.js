import React from 'react';
import MediaQuery from 'react-responsive';
import GameMainSet from '../components/GameMainSet';
import Layout from '../components/Layout';

function PopularSong() {
  const headerContent = (
    <>
      <MediaQuery minWidth={767}>
        <img
          src="../images/younha.jpg"
          alt="Header Image" 
          style={{ width: '20%' }}
        />
      </MediaQuery>
      
      <MediaQuery maxWidth={767}>
        <img 
          src="../images/younha.jpg"
          alt="Header Image" 
          style={{ width: '80%' }}
          />
      </MediaQuery>
    </>
  );

  const textBoxContent =  (
    <div>
      <h2 style={{marginTop:"0px"}}>대중음악 맞추기</h2>
      <h8 stlye={{marginTop:"0px"}}>문제의 난이도는 Easy, Normal, Hard 로 나눠지며 각 단계마다 문제의 개수가 10문항 늘어납니다.</h8>
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

export default PopularSong;