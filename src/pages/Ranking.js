import React from 'react';
import Layout from '../components/Layout';

const Ranking = ( RightMainContent ) => {

  const RankingContent = () => (
    <h1>업데이트 예정</h1>
  )

  return (
    <Layout RightMainContent={<RankingContent />}/>
  );
};

export default Ranking;
