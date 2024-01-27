import React, { useState } from 'react';
import Layout from '../components/Layout';
import InGameContent from '../components/InGameContent';

const InGame = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(true);

  const VideoPlayer = ({ videoId, startTime, endTime }) => {
    const validateVideoId = (videoId) => {
      // videoId 검증 로직 추가 (예: 길이, 특수문자 등)
      // 유효하지 않은 경우 기본값이나 오류 처리를 수행
      return videoId ? videoId : 'qm6Fe_Dymyc';
    };

    const validatedVideoId = validateVideoId(videoId);

    return (
      <div>
        {isVideoPlaying && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${validatedVideoId}?start=${startTime || 10}&end=${endTime || ''}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  };

  const handleReplayClick = () => {
    setVideoPlaying(true);
  };

  return (
    <Layout RightMainContent={
      <>
        <InGameContent onReplayClick={handleReplayClick} />
        <VideoPlayer videoId="qm6Fe_Dymyc" startTime={96} endTime={150} />
      </>
    } />
  );
};

export default InGame;
