import styled from "styled-components";
import { Link } from "react-router-dom";

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
    width: 100%;
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

const GameMainSet = ({ headerContent, textBoxContent }) => {
    return (
        <Frame>
            <Header>
                {headerContent}
            </Header>
            <Main>
                <Link to="/Ingame" style={LinkStyle}>
                    <ProbBtn>Easy</ProbBtn>
                </Link>
                
                <Link to="/Ingame" style={LinkStyle}>
                    <ProbBtn>Normal</ProbBtn>
                </Link>

                <Link to="/Ingame" style={LinkStyle}>
                    <ProbBtn>Hard</ProbBtn>
                </Link>

            </Main>
            <Footer>
                <TextBox>{textBoxContent}</TextBox>
            </Footer>
        </Frame>
    );
}

export default GameMainSet;