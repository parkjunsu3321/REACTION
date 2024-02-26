import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// 여기서부터 아이콘 적용 라이브러리
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsMusicPlayer } from "react-icons/bs";
import { ImFloppyDisk } from "react-icons/im";
import { TbDeviceAirpods } from "react-icons/tb";
import { FaRankingStar } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidWidget } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
// 여기까지가 아이콘 적용 라이브러리

const Container = styled.div`   
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightsalmon;
    min-width: 1025px;
`;

const Frame = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 30px;
    border: 1px solid lightgray;
`;

const Header = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 30px 30px 0 0;
    border-bottom: 1px solid lightgray;
    h1 {
        color: orange;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
    }
`;

const HeaderLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const HeaderRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const HeaderRightL = styled.div`
    width: 60%;
    height: 100%;
`;

const HeaderRightR = styled.div`
    width: 40%;
    height: 100%;
`;

const SearchContainer = styled.div`
    position: relative;
    width: 30%;
    padding-left: 5%;
    display: flex;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
    
    &:focus {
        border-color: lightgray; 
    }
`;

const SearchIcon = styled.i`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #555;
    cursor: pointer;
`;

const SearchBox = () => {
    return (
        <SearchContainer>
            <SearchInput type="text" placeholder="원하는 모드를 검색하세용!" />
            <SearchIcon>
                <IoSearchSharp />
            </SearchIcon>
        </SearchContainer>
    );
};

const SignBtn = styled.button`
    width: 45%;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: orange;
    font-weight: bold;
    color: black;
    cursor: pointer;
`;

const MypageBtn = styled.button`
    width: 45%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-left: 5%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: lightsalmon;
    font-weight: bold;
    color: white;
    cursor: pointer;
`;

const Main = styled.main`
    width: 100%;
    height: 80%;
    display: flex;
`;

const SideMenu = styled.div`
    width: 12%;
    height: auto;
    background-color: white;
    border-right: 1px solid lightgray;

    ul {
        margin: 0px;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: lightgray;
        }
    }

    svg {
        margin-right: 8px; /* 아이콘과 텍스트 사이에 간격 추가 */
    }

    hr {
        border: 1px solid lightgray;
    }   
`;

const RightMain = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`;

const Footer = styled.footer`
    width: 100%;
    height: 10%;
    border-top: 1px solid lightgray;
    border-radius: 0 0 30px 30px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ul {
        color: gray;
        margin: 1px;
    }
`;

const FooterLeft = styled.div`
    width: 50%;
    padding-right: 10px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;

    ul {
        color: gray;
        margin: 1px;
        text-align: right; 
    }
`;

const FooterRight = styled.div`
    width: 50%;
    padding-left: 10px;
    border-left: 1px solid lightgray;
    display: flex;
`;

const CommonImageStyle = {
    width: '5%',
    height: 'auto',
    padding: '1%',
    cursor: 'pointer',
};

const LinkStyle = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
};

const LinkStyle2 = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
};

// 여기서부터 모바일 환경 컴포넌트
const MobileContainer = styled.div`
    width: 100vw;
    height: 100dvh; 
    min-height: 100vh
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const MobileHeader = styled.div`
    height: 10%; 
    background-color: lightsalmon;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MobileHeaderL = styled.div`
    width: 50%;
    height: auto;
    margin-left: 5%;
`;

const MobileHeaderR = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3%;
`;

const MobileMain = styled.div`
    height: 80%;
    background-color: white;
    display: flex;
`;

const MobileFooter = styled.div`
    height: 10%;
    background-color: lightsalmon;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const MobileSignBtn = styled.button`
    width: auto;
    height: 30px;
    background-color: orange;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    font-weight: bolder;
    cursor: pointer;
    margin-left: 5%;
`;

const IconStyle = {
    width: '30px',
    height: '30px',
    outline: 'none',
    boxShadow: 'none' /* 클릭 효과 제거 */
};

// 로그아웃 시 토큰을 삭제하는 함수
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); // 로그아웃 상태로 설정
    navigate("/"); // Home.js 페이지로 이동
  };

const Layout = ({ RightMainContent }) => {

const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    return (
        <>
            <MediaQuery minWidth={767}>
                <Container>
                    <Frame>
                        <Header>
                            <HeaderLeft>
                                <h1>Reaction</h1>
                                <SearchBox></SearchBox>
                            </HeaderLeft>
                            <HeaderRight>
                                <HeaderRightL>
                                </HeaderRightL>
                                <HeaderRightR>
                                    <Link to="/SignIn" style={LinkStyle2}>
                                        <SignBtn>로그인 / 회원가입</SignBtn>
                                    </Link>
                                    <Link to="/MyInfo" style={LinkStyle2}>
                                        <MypageBtn>마이페이지</MypageBtn>
                                    </Link>
                                </HeaderRightR>
                            </HeaderRight>
                        </Header>

                        <Main>
                            <SideMenu>
                                <Link to="/" style={LinkStyle}>
                                    <ul><IoHomeOutline />홈</ul>
                                </Link>
                                <Link to="/MyInfo" style={LinkStyle}>    
                                </Link>
                                <hr></hr>
                                <Link to="/PopularSong" style={LinkStyle}>
                                    <ul><ImFloppyDisk />대중가요 맞추기</ul>
                                </Link>
                                <ul><BsMusicPlayer />내취향 음악 맞추기</ul>
                                <Link to="/PopSong" style={LinkStyle}>
                                    <ul><FaGlobeAmericas />팝송 맞추기</ul>
                                </Link>
                                <Link to="/JpopSong" style={LinkStyle}>
                                    <ul><TbLanguageHiragana />JPOP 맞추기</ul>
                                </Link>
                                    <ul><PiTelevisionSimpleBold />드라마 / 영화 노래 맞추기</ul>
                                    <ul><TbDeviceAirpods />업데이트 예정</ul>     
                                    <hr></hr>
                                <Link to="/Ranking" style={LinkStyle}>
                                    <ul><FaRankingStar />명예의 전당</ul>
                                </Link>
                                    <ul><MdFiberNew />업데이트 내역</ul>
                                    <ul><IoIosPeople />자유 게시판</ul>
                                    <ul><CiSquareQuestion />요청 게시판</ul>
                            </SideMenu>
                            <RightMain>
                                {RightMainContent}
                            </RightMain>
                        </Main>

                        <Footer>
                            <FooterLeft>
                                <ul>Project Reaction</ul>
                                <ul>Front - 이승훈 , 현지훈</ul>
                                <ul>Back - 박준수 , 조우주</ul>
                                <ul>대표전화 - 010-1234-5678</ul>
                            </FooterLeft>
                            <FooterRight>
                                <img
                                    src="/images/instagram.png"
                                    alt="instagram"
                                    style={CommonImageStyle}
                                />
                                <img
                                    src="/images/kakaotalk.png"
                                    alt="kakaotalk"
                                    style={CommonImageStyle}
                                />
                                <img
                                    src="/images/twitter.png"
                                    alt="twitter"
                                    style={CommonImageStyle}
                                />
                            </FooterRight>
                        </Footer>
                    </Frame>
                </Container>       
            </MediaQuery>  
            
            {/*여기부터 모바일 환경*/}
            <MediaQuery maxWidth={767}>
                <MobileContainer>
                    <MobileHeader>
                        <MobileHeaderL>
                            <Link to="/" style={LinkStyle} >
                                <h1 style={{ fontFamily:"Itim-Regular" }}>Reaction</h1>
                            </Link>
                        </MobileHeaderL>
                        <MobileHeaderR>
                            {isLoggedIn ? (
                                <MobileSignBtn onClick={handleLogout}>Logout</MobileSignBtn>
                              ) : (
                                <MobileSignBtn>
                                  <Link to="/SignIn" style={LinkStyle2}>
                                    <FaLock style={{ width: '10px', height: '10px' }} /> SignIn
                                  </Link>
                                </MobileSignBtn>
                              )}
                        </MobileHeaderR>
                    </MobileHeader>
                    <MobileMain>
                        {RightMainContent}
                    </MobileMain>
                    <MobileFooter>
                        <Link to="/MyInfo" style={LinkStyle}>
                            <FaUserLarge style={IconStyle}/>
                        </Link>
                        <Link to="/" style={LinkStyle}>
                            <BiSolidWidget style={IconStyle}/>
                        </Link>
                        <Link to="/Ranking" style={LinkStyle}>
                            <FaRankingStar style={IconStyle}/>
                        </Link>
                        <Link to="/UserStatus" style={LinkStyle}>
                            <ImMenu style={IconStyle}/>
                        </Link>
                    </MobileFooter>
                </MobileContainer>
            </MediaQuery>
        </>
    );
};

export default Layout;
