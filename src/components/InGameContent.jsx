import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ReactPlayer from "react-player";
import MediaQuery from "react-responsive";
import PopularSong from "../song/PopularSong.json";
import button from "../audio/button.mp3";
import correct from "../audio/correct.mp3";
import wrong from "../audio/wrong.mp3";
import axios from "axios";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
`;
const MobileHeader = styled.div`
	width: 100%;
	height: 70%;
	background-color: white;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const MobileMain = styled.div`
	height: 10%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

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
`;

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
`;

const MobileFooter = styled.div`
    height: 20%;
    background-color: white;
    display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobileFooterA = styled.div`
    height: 30%;
  width: 100%;
    background-color: white;
    display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MoblieQuestion = styled.div`
  width: 100%;
  height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
  font-weight: bold;
`;

const MobileFooterB = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const MobilePassBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 50%;
  background-color: orange;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  border: 1px solid black;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`;

const MobileReplayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
    width: 30%;
    height: 50%;
    background-color: salmon;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
  margin-left: 20px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 80%;
  height: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 30px;
  padding: 0px;
`;

const Modal2 = styled.div`
  position: fixed;
  width: 100%;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent2 = styled.div`
  margin-top: 20%;
  width: 100%;
  height: 60%;
  background-color: white;
  padding: 20px;
  height: 100%;
`;

const ModalMain2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  background-color: white;
`;

const ModalMainBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
`;

const ModalFooter2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 20%;
  background-color: white;
`;

const CloseButton2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50%;
  background-color: orange;
  border-radius: 15px;
  border: 1px solid gray;
  font-weight: 600;
`;

// 상태관리 창들입니당 ....
const InGameContent = () => {
  const [showModal, setShowModal] = useState(true); // 모달을 표시하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달2를 표시하는 상태
  const [currentSongName, setCurrentSongName] = useState(""); // 노래 정답 공개했을때 노래제목 나오게하는거
  const [currentQuestion, setCurrentQuestion] = useState(1); // 몇문제 남았는지 체크하는 상태
  const [playing, setPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [inputText, setInputText] = useState(""); // 텍스트박스 상태 관리
  const [score, setScore] = useState(0); // 점수 상태 관리
  const [playedIndexes, setPlayedIndexes] = useState([]); // 이미 재생된 인덱스 체크
  const [playedSongs, setPlayedSongs] = useState([]); // 이미 재생된 노래를 추적하기 위한 상태
  const [modalPlaying, setModalPlaying] = useState(false); // 모달 창의 노래 제어 상태

  const navigate = useNavigate();

  const closeModal = () => {  //  모달 닫는 함수
    chooseRandomSong(); // 현재 곡을 랜덤으로 선택
    setShowModal(false);
    console.log("모달창 닫기 작동")
  };

  const handleOpenModal = () => { // 모달2 여는 함수
    setPlaying(false); // 현재 비디오 일시 정지
    setModalPlaying(true); // 모달이 열리면 노래 자동 재생
    setIsModalOpen(true);
    setCurrentSongName(getCurrentSongName()); // 모달이 열릴 때 현재 노래 이름을 설정
  };

  const handleCloseModal = () => { // 모달2 닫는 함수
    setIsModalOpen(false);
    console.log("모달창2 닫기 작동")
  };

  const handleCloseAndPassClick = () => {
    handleCloseModal();
    handleNextBtn();
  };

  const getCurrentSongName = () => {
    if (currentVideoIndex !== null && PopularSong[currentVideoIndex]) {
      return PopularSong[currentVideoIndex].name;
    }
    return "";
  };
  
  const chooseRandomSong = () => {
    if (playedIndexes.length === PopularSong.length) {
      navigate('/GameResult', { state: { score } });
      return;
    }
  
    // 이미 재생된 노래를 제외하고 랜덤하게 노래 선택
    const availableIndexes = PopularSong.reduce((acc, _, index) => {
      if (!playedIndexes.includes(index)) {
        acc.push(index);
      }
      return acc;
    }, []);
  
    // 이전에 재생된 노래를 확인하여 중복 재생을 방지
    let randomIndex = Math.floor(Math.random() * availableIndexes.length);
    while (playedSongs.includes(availableIndexes[randomIndex])) {
      randomIndex = Math.floor(Math.random() * availableIndexes.length);
    }
  
    const selectedSongIndex = availableIndexes[randomIndex];
  
    // 선택된 노래의 인덱스를 설정
    setCurrentVideoIndex(selectedSongIndex);
  
    // 선택된 노래의 인덱스와 제목을 재생목록에 추가
    setPlayedIndexes([...playedIndexes, selectedSongIndex]);
    setPlayedSongs([...playedSongs, selectedSongIndex]);
  };

  // 버튼 클릭음 재생 함수
  const playButtonClickSound = () => {
    const audio = new Audio(button);
    audio.volume = 0.2; // 볼륨을 절반으로 설정
    audio.play();
  };

  // 정답일시 사운드 재생 함수
  const playCorrectSound = () => {
    const audio = new Audio(correct);
    audio.volume = 0.2; // 볼륨을 절반으로 설정
    audio.play();
  }

  // 오답일시 사운드 재생 함수
  const playWrongSound = () => {
    const audio = new Audio(wrong);
    audio.volume = 0.2; // 볼륨을 절반으로 설정
    audio.play();
  }

  // 정답 안적을 시 사운드 재생 함수
  const playEmptySound = () => {
    const audio = new Audio(wrong);
    audio.volume = 0.2; // 볼륨을 절반으로 설정
    audio.play();
  }
    
  const handlePlayBtn = () => {
    playButtonClickSound(); // 버튼 클릭음 재생
    setPlaying(!playing);
    console.log("재생버튼 클릭");
  };

  const handleNextBtn = () => {
    // 다음 비디오의 인덱스를 설정
    chooseRandomSong();
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  
    // 재생 시작
    setPlayedIndexes([...playedIndexes, currentVideoIndex]);
    setTimeout(() => {
      setPlaying(true);
    }, 300); // 0.3초 뒤에 재생 시작
  }

  const handleAnswerCheck = () => {
    // 입력값이 비어 있는지 확인하고, 비어 있다면 함수 종료
    if (inputText.trim() === "") {
      toast.error("정답을 입력하세요.",{ autoClose: 1000 }); // 토스트 메시지로 변경
      playEmptySound();
      return;
    }
  
    const currentSong = PopularSong[currentVideoIndex];
    if (currentSong.answer.includes(inputText.trim().toLowerCase())) {
      playCorrectSound();
      setInputText("");
      toast.success("정답입니다.",{ autoClose: 1000 }); // 토스트 메시지로 변경
      setScore(score + 1); // 맞췄을 때 점수 증가
  
      // 다음 곡으로 이동
      handleNextBtn();
    } else {
      toast.error("틀렸습니다. 다시 시도해주세요.",{ autoClose: 1000 }); // 토스트 메시지로 변경
      playWrongSound();
    }
  };

  const currentVideoUrl = `https://www.youtube.com/watch?v=${PopularSong[currentVideoIndex].code}`;

  const musicList = localStorage.getItem("revalue");

  const dataArray = musicList.split(',').reduce((acc, cur, index) => {
    const rowIndex = Math.floor(index / 10); // 행 인덱스 계산
    const colIndex = index % 10; // 열 인덱스 계산
    if (!acc[rowIndex]) {
        acc[rowIndex] = []; // 새로운 행 생성
    }
    acc[rowIndex][colIndex] = cur; // 데이터 삽입
    return acc;
}, []);

  console.log(dataArray[0][0]);
  console.log(dataArray[5][1]);

  return (
    <>
      <MediaQuery minWidth={767}>
        <Frame>
        {showModal && (
          <Modal>
            <ModalContent>
              <h3 style={{marginTop:"20%"}}>버튼을 클릭하면 시작합니다!</h3>
                <img
                  src="./images/playButton.png"
                  style={{width: "20%", height: "50%"}}
                  onClick={() => { closeModal(); handlePlayBtn(); }}
                />
              <h1>Click!!</h1>
            </ModalContent>
          </Modal>
          )}

            {isModalOpen &&
            <Modal2>
              <ModalContent2>
                <ModalMain2>
                  <ReactPlayer
                    url={currentVideoUrl}
                    width='30%'
                    height='100%'
                    controls={true}
                    playing={modalPlaying}
                    light={false}
                    pip={true}
                    playsinline={true} // playsinline 속성 추가
                  />
                </ModalMain2>
                <ModalMainBottom>
                  {currentSongName}
                </ModalMainBottom>
                <ModalFooter2>
                  <CloseButton2 onClick={handleCloseAndPassClick}>다음</CloseButton2>
                </ModalFooter2>
              </ModalContent2>
            </Modal2>
          }
          <h1>현재까지 당신의 점수는 {score} 점입니다!</h1> 
          <img
            src="./images/discospaghetti.gif"
            style={{ width: "50%", height: "50%" }}
          />
            <ReactPlayer
              url={currentVideoUrl}
              width='0%'
              height='0%'
              controls={true}
              playing={playing}
              light={false}
              pip={true}
              playsinline={true} // playsinline 속성 추가
            />
            <TextBox
              value={inputText.toLowerCase()} // 입력된 텍스트를 화면에 출력할 때 소문자로 변환하여 보여줌
              onChange={(e) => setInputText(e.target.value)} // 입력된 값은 원본 그대로 유지
              placeholder="정답을 입력하세요"
            />
          <BtnArea>
            <CorrectBtn onClick={handlePlayBtn}>{playing ? '일시 정지' : '재생'}</CorrectBtn>
            <PassBtn onClick={handleOpenModal}>정답공개</PassBtn> {/* 패스 버튼 추가 */}
          </BtnArea>
        </Frame>
      </MediaQuery>

      {/*여기부터 모바일 환경*/}
      <MediaQuery maxWidth={767}>
      <ToastContainer />
        <MobileFrame>
          {showModal && (
          <Modal>
            <ModalContent>
              <h3 style={{marginTop:"20%"}}>버튼을 클릭하면 시작합니다!</h3>
              <img
                src="./images/playButton.png"
                style={{width: "40%", height: "30%", marginTop:"10%" }}
                onClick={() => { closeModal(); handlePlayBtn(); }}
              />
              <h1>Click!!</h1>
            </ModalContent>
          </Modal>
          )}

            {isModalOpen &&
            <Modal2>
              <ModalContent2>
                <ModalMain2>
                  <ReactPlayer
                    url={currentVideoUrl}
                    width='100%'
                    height='100%'
                    controls={true}
                    playing={modalPlaying}
                    light={false}
                    pip={true}
                    playsinline={true} // playsinline 속성 추가
                  />
                </ModalMain2>
                <ModalMainBottom>
                  {currentSongName}
                </ModalMainBottom>
                <ModalFooter2>
                  <CloseButton2 onClick={handleCloseAndPassClick}>다음</CloseButton2>
                </ModalFooter2>
              </ModalContent2>
            </Modal2>
          }

          <MobileHeader>
            <h4>현재까지 당신의 점수는 {score} 점입니다!</h4> 
            <ReactPlayer
              url={currentVideoUrl}
              width='1px'
              height='1px'
              controls={true}
              playing={playing}
              light={false}
              pip={true}
              playsinline={true} // playsinline 속성 추가
            />
            <img
              src="./images/discospaghetti.gif"
              style={{ width: "120%", height: "80%" }}
            ></img>

          </MobileHeader>
          <MobileMain>
            <MobileTextBox
              value={inputText.toLowerCase()} // 입력된 텍스트를 화면에 출력할 때 소문자로 변환하여 보여줌
              onChange={(e) => setInputText(e.target.value)} // 입력된 값은 원본 그대로 유지
              placeholder="정답을 입력하세요"
            />
            <MobileCorrectBtn onClick={handleAnswerCheck}>
              정답
            </MobileCorrectBtn>
          </MobileMain>
          <MobileFooter>
            <MobileFooterA>
              <MoblieQuestion>{currentQuestion}/{PopularSong.length}</MoblieQuestion>
            </MobileFooterA>
            <MobileFooterB>
              <MobilePassBtn onClick={handlePlayBtn}>{playing ? '일시 정지' : '재생'}</MobilePassBtn>
              <MobilePassBtn onClick={handleOpenModal}>정답공개</MobilePassBtn> 
            </MobileFooterB>
          </MobileFooter>
        </MobileFrame>
      </MediaQuery>
    </>
  );
};

export default InGameContent;
