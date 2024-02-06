import styled from 'styled-components'; //  백틱``을 이용한 간단한 css 작성을 위해 사용
import { Link, useLocation } from 'react-router-dom';    // react-router 사용
// 여기서부터 아이콘 적용 라이브러리
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
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
// 여기까지가 아이콘 적용 라이브러리
var login_b = false;
const Container = styled.div`   
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightsalmon;
    min-width: 1025px;

    /* 태블릿 스타일 */
    @media screen and (min-width: 768px) and (max-width: 1024px) {
    }

    /* 모바일 스타일 */
    @media screen and (max-width: 767px) {
    }
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
`

const HeaderRightR = styled.div`
    width: 40%;
    height: 100%;
`

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
};

const LinkStyle2 = {
    textDecoration: 'none',
    color: 'black',
};

const Layout = ({ RightMainContent }) => {
    const location = useLocation();
    const { state } = location.state;
    let logincheck = state ? state.login_b : false;
    return (
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
                                <SignBtn>{logincheck ? '로그아웃' : '로그인 / 회원가입'}</SignBtn>
                            </Link>
                            <MypageBtn>마이페이지</MypageBtn>
                        </HeaderRightR>
                    </HeaderRight>
                </Header>
                <Main>
                    <SideMenu>
                        <Link to="/" style={LinkStyle}>
                            <ul><IoHomeOutline />홈</ul>
                        </Link>
                        <Link to={login_b ? "/MyPage" : "/SignIn"} style={LinkStyle}>
                            <ul><FaChild />마이페이지 (테스트)</ul>
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

                        <Link to="/VideoPlayer">
                            <ul><TbDeviceAirpods />업데이트 예정</ul>
                        </Link>                            
                            <hr></hr>
                            <ul><FaRankingStar />명예의 전당</ul>
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
    );
}

export default Layout;
