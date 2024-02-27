import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

const Frame = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`;

const Header = styled.header` 
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const Main = styled.main`
    width: 100%;
    height: 10%;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const ProbBtn = styled.button`
    width: 200px;
    height: 60px;
    background-color: salmon;
    color: black;
    text-align: center;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    margin: 0 8px;
    cursor: pointer;
`;

const Footer = styled.footer`
    width: 100%;
    height: 40%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const TextBox = styled.div`
    width: 60%;
    height: auto;
    text-align: center;
    background-color: orange;
    border-radius: 15px;
`;

const LinkStyle = {
    textDecoration: 'none',
    color: 'black',
    display: 'inline',
};

// 여기서부터 모바일 환경 컴포넌트
const MobileFrame = styled.div`
    width: 100%;
    height: 100%;
    background-color: salmon;
`;

const MobileHeader = styled.div`
    width: 100%;
    height: 60%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MobileMain = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MobileProbBtn = styled.button`
    width: 100px;
    height: 50px;
    background-color: salmon;
    color: black;
    border: 1px solid black;
    border-radius: 20px;
    margin: 1px;
    font-weight: bold;
    text-decoration: none; 
`;

const LinkStyle2 = {
    padding: '1%',
    textDecoration: 'none',
    color: 'black',
    display: 'inline',
}

const MobileFooter = styled.div`
    width: 100%;
    height: 30%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MobileTextBox = styled.div`
    width: 90%;
    height: 90%;
    background-color: orange;
    border-radius: 15px;
    font-size: 15px;
    display: flex; 
    align-items: center;
    text-align: center;
`;

const GameMainSet = ({ headerContent, textBoxContent }) => {
    const handleLinkClick = async (difficulty) => { // 변경된 부분
        console.log(difficulty);
        const token = localStorage.getItem('token');
        try {
          const config = {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          };
          const requestData = { level: difficulty};
          const response = await axios.post(process.env.REACT_APP_FAST_API_KEY + '/api/users/create_list', requestData, config);
          localStorage.setItem('revalue', response.data);
        }
        catch (error) 
        {
          console.error('Error:', error.response.data);
        }
      };

    return (
        <>
            <MediaQuery minWidth={768}>
                <Frame>
                    <Header>
                        {headerContent}
                    </Header>

                    <Main>
                        <Link to="/Ingame" style={LinkStyle} onClick={() => handleLinkClick(1)}>
                            <button>Easy</button>
                        </Link>
                        <Link to="/Ingame" style={LinkStyle} onClick={() => handleLinkClick(2)}>
                            <button>Normal</button>
                        </Link>
                        <Link to="/Ingame" style={LinkStyle} onClick={() => handleLinkClick(3)}>
                            <button>Hard</button>
                        </Link>
                    </Main>

                    <Footer>
                        <TextBox>{textBoxContent}</TextBox>
                    </Footer>
                </Frame>
            </MediaQuery>

            {/*여기부터 모바일 환경*/}
            <MediaQuery maxWidth={768}>
                <MobileFrame>
                    <MobileHeader>
                        {headerContent}
                    </MobileHeader>
                    <MobileMain>
                    <Link to="/Ingame" style={LinkStyle2} onClick={() => handleLinkClick(1)}>
                        <ProbBtn>Easy</ProbBtn>
                    </Link>
                    <Link to="/Ingame" style={LinkStyle2} onClick={() => handleLinkClick(2)}>
                        <ProbBtn>Normal</ProbBtn>
                    </Link>
                    <Link to="/Ingame" style={LinkStyle2} onClick={() => handleLinkClick(3)}>
                        <ProbBtn>Hard</ProbBtn>
                    </Link>
                    </MobileMain>
                    <MobileFooter>
                        <MobileTextBox>{textBoxContent}</MobileTextBox>
                    </MobileFooter>
                </MobileFrame>
            </MediaQuery>
        </>
    );
}

export default GameMainSet;
