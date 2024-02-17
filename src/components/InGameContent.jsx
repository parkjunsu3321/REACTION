import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import popularSongs from "../song/PopularSong.json";
import axios from 'axios';

const Frame = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.textarea`
  width: 20%;
  height: 3%;
  margin-top: 2%;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const BtnArea = styled.div`
  width: 50%;
  height: 10%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ReplayBtn = styled.button`
  width: 20%;
  height: 100%;
  margin-top: 2%;
  border-radius: 20px;
  background-color: salmon;
  font-size: 30px;
  cursor: pointer;
`;

const CorrectBtn = styled.button`
  width: 10%;
  height: 100%;
  margin-top: 2%;
  margin-left: 2%;
  border-radius: 20px;
  background-color: orange;
  font-size: 30px;
  cursor: pointer;
`;

const PassBtn = styled.button`
  width: 10%;
  height: 100%;
  margin-top: 2%;
  margin-left: 2%;
  border-radius: 20px;
  background-color: lightblue;
  font-size: 30px;
  cursor: pointer;
`;

const ScoreDisplay = styled.div`
  margin-top: 20px;
  font-size: 24px;
`;

/* 여기서부터 모바일 컴포넌트임 */

const MobileFrame = styled.div`
	width: 100%;
	height: 100%;
	background-color: red;
`
const MobileHeader = styled.div`
	width: 100%;
	height: 70%;
	background-color: white;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
`

const MobileMain = styled.div`
	height: 10%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`

const MobileTextBox = styled.input`
	width: 60%;
	height: 70%;
	font-size: 20px;
	font-weight: bold;
	padding: 0px;
	margin: 0px;
	border-radius: 20px 0px 0px 20px;
	border: 1px solid black;
	box-sizing: border-box;
	text-align: center;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
`

const MobileCorrectBtn = styled.button`
	width: 20%;
	height: 70%;
	border-radius: 0px 20px 20px 0px;
	background-color: yellow;
	font-weight: bold;
	font-size: 20px;
	padding: 0px;
	margin: 0px;
	border: 1px solid black;
	box-sizing: border-box;
	cursor: pointer;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
`

const MobileFooter = styled.div`
	height: 20%;
	background-color: white;
	display: flex;
  flex-direction: row;
	align-items: center;
	justify-content: center;
`

const MobilePassBtn = styled.button`
  width: 30%;
  height: 30%;
  background-color: orange;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
`

const MobileReplayBtn = styled.button`
	width: 30%;
	height: 30%;
	background-color: salmon;
	font-size: 20px;
	font-weight: bold;
	border-radius: 20px;
	border: 1px solid black;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
`

// 상태관리 창들입니당 ....

const InGameContent = () => {
  const [currentIndex, setCurrentIndex] = useState(null); // json파일의 목차 상태를 관리
  const [videoCode, setVideoCode] = useState(""); // 비디오 코드의 상태를 관리
  const [inputText, setInputText] = useState(""); // 텍스트박스 상태 관리
  const [isPlaying, setIsPlaying] = useState(true); // 재생되고있는지 상태 관리
  const [score, setScore] = useState(0); // 점수 상태 관리
  const [answer, setAnswer] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * popularSongs.length);
    setCurrentIndex(randomIndex);
  }, []);

  useEffect(() => {
    if (currentIndex !== null) {
      setVideoCode(popularSongs[currentIndex].code);
      setAnswer(popularSongs[currentIndex].answer);
    }
  }, [currentIndex]);

  const handleCorrectClick = () => {
    const currentSong = popularSongs[currentIndex];
    var tag  = "hiphop";
    var time = 2.0;
    const flaskUrl = 'https://port-0-flask-9zxht12blqjml81v.sel4.cloudtype.app/embedding';
    // GET 요청을 보낼 쿼리 파라미터 설정
    console.log("Current answer:", answer);
    axios.get(flaskUrl, {
  params: {
    answer: answer,
    user_answer: inputText,
    tag: tag,
    time: time
  }
})
.then(response => {
  // 서버에서 받은 응답을 처리합니다.
  console.log("성공");
})
.catch(error => {
  // 오류가 발생한 경우 처리합니다.
  console.error('Error:', error);
});

  };

  const handlePassClick = () => {
    const nextIndex = (currentIndex + 1) % popularSongs.length;
    setCurrentIndex(nextIndex);
    setInputText("");
  };

  const handleReady = (event) => {
    const currentSong = popularSongs[currentIndex];
    event.target.setVolume(30);
    event.target.seekTo(currentSong.start);
    playerRef.current = event.target;
  };

  const handlePlayPauseToggle = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    const volume = parseInt(event.target.value);
    if (playerRef.current) {
      playerRef.current.setVolume(volume);
    }
  };

  return (
    <>
      <MediaQuery minWidth={767}>
        <Frame>
          <h1>현재까지 당신의 점수는 {score}점입니다!</h1> 
          <img
            src="./images/discospaghetti.gif"
            style={{ width: "50%", height: "50%" }}
          ></img>
          {videoCode && (
            <YouTube
              videoId={videoCode}
              opts={{
                width: "0px",
                height: "0px",
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  loop: 1,
                  playlist: videoCode,
                },
              }}
              onReady={handleReady}
            />
          )}
          <TextBox
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="정답을 입력하세요"
          />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="30"
            onChange={handleVolumeChange}
          />
          <BtnArea>
            <ReplayBtn onClick={handlePlayPauseToggle}>
              {isPlaying ? "일시정지" : "재생"}
            </ReplayBtn>
            <CorrectBtn onClick={handleCorrectClick}>정답</CorrectBtn>
            <PassBtn onClick={handlePassClick}>패스</PassBtn> {/* 패스 버튼 추가 */}
          </BtnArea>
        </Frame>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <MobileFrame>
          <MobileHeader>
            <h4>현재까지 당신의 점수는 {score}점입니다!</h4> 
            <img
              src="./images/discospaghetti.gif"
              style={{ width: "120%", height: "80%" }}
            ></img>
            {videoCode && (
              <YouTube
                videoId={videoCode}
                opts={{
                  width: "0px",
                  height: "0px",
                  playerVars: {
                    autoplay: 1,
                    playsinline: 1,
                    modestbranding: 1,
                    loop: 1,
                    playlist: videoCode,
                  },
                }}
                onReady={handleReady}
              />
            )}
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="30"
              onChange={handleVolumeChange}
            />
          </MobileHeader>
          <MobileMain>
            <MobileTextBox
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="정답을 입력하세요"
            />
            <MobileCorrectBtn onClick={handleCorrectClick}>
              정답
            </MobileCorrectBtn>
          </MobileMain>
          <MobileFooter>
            <MobilePassBtn onClick={handlePassClick}>패스</MobilePassBtn> {/* 패스 버튼 추가 */}
            <MobileReplayBtn onClick={handlePlayPauseToggle} style={{ marginLeft:"5%" }}>{isPlaying ? "일시정지" : "재생"}</MobileReplayBtn>
          </MobileFooter>
        </MobileFrame>
      </MediaQuery>
    </>
  );
};

export default InGameContent;
