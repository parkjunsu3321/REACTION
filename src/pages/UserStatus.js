 import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { Chart as ChartJS } from 'chart.js/auto';
import { FiActivity } from "react-icons/fi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FcExpand } from "react-icons/fc";
import axios from 'axios';

const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/images/background.jpg');
  background-size: 100% 100%;
`

const MobileFrame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(128,128,128,0.7);
`;


const MobileHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: orange;
`;

const MobileMainA = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextArea = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileMainB = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChartFrame = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* 이미지의 절대 위치를 설정하기 위해 필요 */
  z-index: 1;
`;

const ImageInDonut = styled.img`
  position: absolute; /* ChartFrame에 상대적으로 절대 위치 설정 */
  top: 50%; /* 부모 요소 중앙에서 이미지를 수직 정렬 */
  left: 50%; /* 부모 요소 중앙에서 이미지를 수평 정렬 */
  transform: translate(-50%, -50%); /* 이미지의 중심을 부모 요소의 중심으로 이동 */
  width: 80%; /* 내부 이미지의 크기 조절 */
  height: auto;
  z-index: -1; /* 이미지가 차트 위에 올라오도록 함 */
  border-radius: 50%
`;

const MobileFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: none;
  color: orange;
`;

const CategoryArea = styled.div`
  width: 100%;
  height: 20%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  color: orange;
`

const CategoryName = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const CategoryGage = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
`;

const MaxGage = styled.div`
  width: 90%;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
`

const GageFill = styled.div`
  height: 100%;
  border-radius: 20px;
  animation: fillAnimation 1s ease-in-out forwards;

  @keyframes fillAnimation {
    from {
      width: 0%;
    }
    to {
      width: ${props => props.width};
    }
  }
`;

const StyledButton = styled.button`
  width: 20%;
  height: auto;
  background-color: orange;
  border-radius: 15px;
  border: 1px solid gray;
`;

const StyledButton2 = styled.button`
  width: 40%;
  height: 5%;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: ${({ disabled }) => (disabled ? '#dadada' : 'lightsalmon')};
`;

// 모달을 위한 스타일드 컴포넌트
const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  width: 70%;
  height: 60%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ModalBoxArea = styled.div`
  width: 100%;
  height: 40%;
  padding: 0px;
  box-sizing: border-box;
`;

const DropdownArea = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: borderbox;
  display: flex;
  align-items: center
  justify-content: center;
  border: 1px solid black;
`;

const DropdownAreaL = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DropdownAreaM = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const DropdownAreaR = styled.div`
  width: 20%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

// 드롭다운을 위한 스타일드 컴포넌트
const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: lightsalmon;
  color: white;

  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  width: 100%;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (option) => {
    setSelectedItem(option);
    setIsOpen(false);
    onSelect(option); // 선택한 아이템을 부모 컴포넌트로 전달
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <FcExpand />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(option)}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};


const UserStatus = () => {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedGenres, setSelectedGenres] = useState(Array(5).fill(null));
  const [forData, setForData] = useState({
        first_genre: '',
        second_genre: '',
        third_genre: ''
      });
  const handleGenreSelect = (index, genre) => {
    // 이미 선택된 장르인지 확인
    if (selectedGenres.some(item => item && item.value === genre.value)) {
      // 이미 선택된 장르이면 무시
      return;
    }
  
    const newSelectedGenres = [...selectedGenres];
    newSelectedGenres[index] = genre;
    setSelectedGenres(newSelectedGenres);
    console.log(selectedGenres[index].value);
  };
  
    // 모달 열기/닫기 함수
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      if(isModalOpen)
      {
        handleGenreInput();
      }
    };
    const handleGenreInput = async () => { // 변경된 부분
      setForData({ ...forData, first_genre: selectedGenres.Array(0).value, second_genre: selectedGenres.Array(1).value, third_genre: selectedGenres.Array(2).value});
      const token = localStorage.getItem('token');
      try {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        };
        console.log(forData);
        const response = await axios.post(process.env.REACT_APP_FAST_API_KEY + '/api/users/Input_Genre', forData, config);
  
        if (response.data === true) 
        {
          alert("성공");
        } 
        else 
        {
          alert("실패");
        }
      } 
      catch (error) 
      {
        console.error('Error:', error.response.data);
      }
    };

    const handleReset = () => {
      setSelectedGenres(Array(5).fill(null));
    };
    
    const areAllGenresSelected = () => {
      return selectedGenres.every(genre => genre !== null);
    };

  const options = [
    { value: "힙합", label: "힙합" },
    { value: "발라드", label: "발라드" },
    { value: "댄스", label: "댄스" },
    { value: "R&B", label: "R&B" },
    { value: "락", label: "락" }
  ];

  const data = {
    labels: ["힙합", "발라드", "댄스", "R&B", "락"],
    datasets: [
      {
        label: "선호장르",
        data: [7, 3, 5, 8, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const calculateGageWidth = (value, maxValue) => {
    // 최대 너비인 90%에 대한 값 계산
    return `${(value / maxValue) * 90}%`;
  };

  const maxValue = Math.max(...data.datasets[0].data);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const maxIndex = data.datasets[0].data.indexOf(maxValue);
  const genreText = ["붑치기 밥치기 힙합", "감성충만 발라더", "둠칫 둠칫 댄서", "소울충만 R&B", "로큰롤 베이비! 락"];

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
    cutout: "80%", // 도넛의 구멍 크기 조절
  };

  const UserStatusContent = () => (
    <MobileContainer>

      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <h2>게임 목표치 선택</h2>
            <h5>앞으로의 게임에서 맞추고 싶은 장르를 순위를 매겨 보세요! 게임이 끝나면 결과와 선택한 순위를 비교해 드립니다.</h5>
            <ModalBoxArea>
              <DropdownArea>
                <DropdownAreaL>1순위</DropdownAreaL>
                <DropdownAreaM>{selectedGenres[0] ? selectedGenres[0].label : "Select"}</DropdownAreaM>
                <DropdownAreaR>
                  <Dropdown options={options} onSelect={(genre) => handleGenreSelect(0, genre)} />
                </DropdownAreaR>
              </DropdownArea>
              <DropdownArea>
                <DropdownAreaL>2순위</DropdownAreaL>
                <DropdownAreaM>{selectedGenres[1] ? selectedGenres[1].label : "Select"}</DropdownAreaM>
                <DropdownAreaR>
                  <Dropdown options={options} onSelect={(genre) => handleGenreSelect(1, genre)} />
                </DropdownAreaR>
              </DropdownArea>
              <DropdownArea>
                <DropdownAreaL>3순위</DropdownAreaL>
                <DropdownAreaM>{selectedGenres[2] ? selectedGenres[2].label : "Select"}</DropdownAreaM>
                <DropdownAreaR>
                  <Dropdown options={options} onSelect={(genre) => handleGenreSelect(2, genre)} />
                </DropdownAreaR>
              </DropdownArea>
              <DropdownArea>
                <DropdownAreaL>4순위</DropdownAreaL>
                <DropdownAreaM>{selectedGenres[3] ? selectedGenres[3].label : "Select"}</DropdownAreaM>
                <DropdownAreaR>
                  <Dropdown options={options} onSelect={(genre) => handleGenreSelect(3, genre)} />
                </DropdownAreaR>
              </DropdownArea>
              <DropdownArea>
                <DropdownAreaL>5순위</DropdownAreaL>
                <DropdownAreaM>{selectedGenres[4] ? selectedGenres[4].label : "Select"}</DropdownAreaM>
                <DropdownAreaR>
                  <Dropdown options={options} onSelect={(genre) => handleGenreSelect(4, genre)} />
                </DropdownAreaR>
              </DropdownArea>
            </ModalBoxArea>
            <StyledButton2 style={{marginTop:"30px"}} onClick={handleReset}>초기화</StyledButton2>
            <StyledButton2 style={{marginTop:"30px"}} onClick={toggleModal} disabled={!areAllGenresSelected()}>닫기</StyledButton2>
          </ModalContent>
        </ModalContainer>
      )}


      <MobileFrame>
        <MobileHeader>
          <h1><FiActivity />성향 분석<FiActivity /></h1>
        </MobileHeader>

        <MobileMainA>
          <ChartFrame>
              <Doughnut data={data} options={chartOptions} />
              <ImageInDonut src="images/TaylorSwift.jpg" alt="Inner Image" />
            </ChartFrame>
        </MobileMainA>
          <TextArea>
           <h2>당신은 {genreText[maxIndex]} 성향입니다</h2>
          </TextArea>
        <MobileMainB>
          <CategoryArea>
            <CategoryName>#힙합</CategoryName>
            <CategoryGage>
              <MaxGage>
                <GageFill
                  style={{
                    width: animationTrigger
                    ? calculateGageWidth(data.datasets[0].data[0], maxValue)
                    : "0%",
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                  }}
                />  
              </MaxGage>
            </CategoryGage>
          </CategoryArea>
          <CategoryArea>
            <CategoryName>#발라드</CategoryName>
            <CategoryGage>
              <MaxGage>
                <GageFill
                  style={{
                    width: calculateGageWidth(data.datasets[0].data[1], maxValue),
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                  }}
                />
              </MaxGage>
            </CategoryGage>
          </CategoryArea>
          <CategoryArea>
            <CategoryName>#댄스</CategoryName>
            <CategoryGage>
              <MaxGage>
                <GageFill
                  style={{
                    width: calculateGageWidth(data.datasets[0].data[2], maxValue),
                    backgroundColor: "rgba(255, 206, 86, 1)",
                  }}
                />  
              </MaxGage>
          </CategoryGage>
          </CategoryArea>
          <CategoryArea>
          <CategoryName>#R&B</CategoryName>
          <CategoryGage>
            <MaxGage>
                <GageFill
                  style={{
                    width: calculateGageWidth(data.datasets[0].data[3], maxValue),
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                  }}
                />  
              </MaxGage>
            </CategoryGage>
          </CategoryArea>
          <CategoryArea>
            <CategoryName>#락</CategoryName>
            <CategoryGage>
              <MaxGage>
                <GageFill
                  style={{
                    width: calculateGageWidth(data.datasets[0].data[4], maxValue),
                    backgroundColor: "rgba(153, 102, 255, 0.6)"
                  }}
                />  
              </MaxGage>
            </CategoryGage>
          </CategoryArea>
        </MobileMainB>

        <MobileFooter>
          <h6 style={{ margin: "0px", padding: "0px" }}>
            목표 장르를 선택하고 싶다면 버튼을 클릭해 주세요
          </h6>
          <StyledButton onClick={toggleModal}>장르선택</StyledButton>
        </MobileFooter>
      </MobileFrame>
    </MobileContainer>
  );
  
  return <Layout RightMainContent={<UserStatusContent />} />;
};

export default UserStatus;
