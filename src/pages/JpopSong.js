import GameMainSet from '../components/GameMainSet';
import Layout from '../components/Layout';

function JpopSong() {
    const headerContent = (
        <img 
        src="../images/TaylorSwift.jpg"
        alt="Header Image" 
        style={{ width: '20%' }}
        />
    );

    const textBoxContent =   
<div>
  <h1>Jpop 맞추기</h1>
  <p>문제의 난이도는 Easy, Normal, Hard 로 나눠지며 각 단계마다 문제의 개수가 10문항 늘어납니다.</p>
  <p>Easy 난이도에서는 10초, Normal 난이도에서는 5초 Hard 난이도에서는 1초 동안 노래를 들려 드립니다.</p>
</div>

    const RightMainContent = (
        <GameMainSet headerContent={headerContent} textBoxContent={textBoxContent} />
    );

    return (
        <Layout RightMainContent={RightMainContent} />
    );
}

export default JpopSong;