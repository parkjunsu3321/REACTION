import { useState } from "react";
import Layout from "../components/Layout";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobileFrame = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/ResultBack.png');
  background-size: cover;
`;

const MobileContainer = styled.div`
  width: 90%;
  height: 95%;
  background-color: rgba(255, 255, 255, 0.5);
  border: 3px solid black;
`;

const MobileHeaderFrame = styled.div`
  width: 100%;
  height: 10%;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileMainTFrame = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
`;

const MobileMainBFrame = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
`;

const ScoreBox = styled.div`
  width: 60%;
  height: 50%;
  margin-top: 5%;
  background-color: white;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScoreBoxL = styled.div`
  width: 45%
  height: 80%;
`;

const ScoreBoxM = styled.div`
  width: 10%
  height: 80%;
`;

const ScoreBoxR = styled.div`
  width: 45%
  height: 80%;
`;

const MobileFooterFrame = styled.div`
  width: 100%;
  height: 15%;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnArea = styled.div`
  width: 80%;
  height: 100%;
  background-color: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const StyleBtn1 = styled.button`
  width: 40%;
  height: 50%;
  border: 3px solid black;
  font-weight: bold;
  font-size: 20px;
  background-color: white;

`;

const Space = styled.div`
  width: 20%;
  height: 50%;
`;

const StyleBtn2 = styled.button`
  width: 40%;
  height: 50%;
  border: 3px solid black;
  font-weight: bold;
  font-size: 20px;
  background-color: white;

`;

const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
};

//여기서부터 모달 창 컴포넌트.
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ChoiceFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  width: 260px;
  margin-bottom: 15px;
`;

const Choice = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 15px;
`;

const ChoiceBox1 = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 12px;
  width: 80%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  background-color: #ff5f67;
`;

const ChoiceRank1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 20%;
`;

const ChoiceRankText1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80%;
`;

const ChoiceBox2 = styled.div`
  display: flex; 
  align-items: center;
  border-radius: 15px;
  padding: 12px;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  background-color: #5a9d7f;
`;

const ChoiceRank2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 25%;
`;

const ChoiceRankText2 = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 75%;
`;

const ChoiceBox3 = styled.div`
  display: flex; 
  align-items: center;
  border-radius: 15px;
  padding: 12px;
  width: 60%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  background-color: #f0bb6b;
`;

const ChoiceRank3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 30%;
`;

const ChoiceRankText3 = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 70%;
`;

const DBChoiceFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  width: 260px;
`;

const DBChoice = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 15px;
`;

const DBChoiceBox1 = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 12px;
  width: 80%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  background-color: #ff5f67;
`;

const DBChoiceRank1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 20%;
`;

const DBChoiceRankText1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80%;
`;

const DBChoiceBox2 = styled.div`
  display: flex; 
  align-items: center;
  border-radius: 15px;
  padding: 12px;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  background-color: #5a9d7f;
`;

const DBChoiceRank2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 25%;
`;

const DBChoiceRankText2 = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 75%;
`;

const DBChoiceBox3 = styled.div`
  display: flex; 
  align-items: center;
  border-radius: 15px;
  padding: 12px;
  width: 60%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  background-color: #f0bb6b;
`;

const DBChoiceRank3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 30%;
`;

const DBChoiceRankText3 = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 70%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20%;
  height: 3.5%;
  background-color: orange;
  border-radius: 15px;
  border: 1px solid gray;
  font-weight: 600;
`;

const GameResult = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const location = useLocation();
  const { score } = location.state;

  const GameResult = (
    <MobileFrame>
      <MobileContainer>
        <MobileHeaderFrame>
          <TitleBox>
            <h1>게임결과</h1>
          </TitleBox>
        </MobileHeaderFrame>

        <MobileMainTFrame>
          <h1 style={{ marginTop: "5px", marginBottom: "5px" }}>Score</h1>
          <ScoreBox>
            <ScoreBoxL>
              <h1 style={{ color: "red" }}>{score}</h1>
            </ScoreBoxL>
            <ScoreBoxM>
              <h1>/</h1>
            </ScoreBoxM>
            <ScoreBoxR>
              <h1>100</h1>
            </ScoreBoxR>
          </ScoreBox>
        </MobileMainTFrame>

        <MobileMainBFrame>
          <h1 style={{ marginTop: "5px", marginBottom: "5px" }}>High Combo</h1>
          <ScoreBox>
            <h1 style={{ color: "red" }}>null</h1><h1>Combo</h1>
          </ScoreBox>
        </MobileMainBFrame>

        <MobileFooterFrame>
          <BtnArea>
          <StyleBtn1>
            <Link to="/" style={LinkStyle}>
              홈으로
            </Link>
            </StyleBtn1>
            <Space/>
            <StyleBtn2 onClick={handleOpenModal}>통계 확인</StyleBtn2>
          </BtnArea>
        </MobileFooterFrame>
      </MobileContainer>

       {/* 모달 컴포넌트 */}
       {isModalOpen &&
              <ModalWrapper>
                <ModalContent>
                  <ChoiceFrame>
                  <Choice>당신이 선택한 장르 우선순위</Choice>
                  <ChoiceBox1>
                  <ChoiceRank1>1순위</ChoiceRank1>
                  <ChoiceRankText1>이승훈</ChoiceRankText1>
                  </ChoiceBox1>
                  
                  <ChoiceBox2>
                  <ChoiceRank2>2순위</ChoiceRank2>
                  <ChoiceRankText2>박준수</ChoiceRankText2>
                  </ChoiceBox2>
                  
                  <ChoiceBox3>
                  <ChoiceRank3>3순위</ChoiceRank3>
                  <ChoiceRankText3>조우주</ChoiceRankText3>
                  </ChoiceBox3>
                  </ChoiceFrame>
                  
                  <DBChoiceFrame>
                  <DBChoice>이번판 장르 순위</DBChoice>
                  <DBChoiceBox1>
                  <DBChoiceRank1>1순위</DBChoiceRank1>
                  <DBChoiceRankText1>이승훈</DBChoiceRankText1>
                  </DBChoiceBox1>
                  
                  <DBChoiceBox2>
                  <DBChoiceRank2>2순위</DBChoiceRank2>
                  <DBChoiceRankText2>박준수</DBChoiceRankText2>
                  </DBChoiceBox2>
                  
                  <DBChoiceBox3>
                  <DBChoiceRank3>3순위</DBChoiceRank3>
                  <DBChoiceRankText3>조우주</DBChoiceRankText3>
                  </DBChoiceBox3>
                  </DBChoiceFrame>
                  <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
                </ModalContent>
              </ModalWrapper>
            }
    </MobileFrame>
  )

  return (
    <Layout RightMainContent={GameResult} />
  )
}

export default GameResult;