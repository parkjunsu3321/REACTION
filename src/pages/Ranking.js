import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";
import { RiVipCrownFill } from "react-icons/ri";
import axios from 'axios';

//여기서부터 모바일 환경 컴포넌트
const MobileFrame = styled.div`
    width: 100vw;
	height: 100%;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: antiquewhite;
`;

const MobileRankText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 19px;
    font-weight: 700;
    color: #333;
`;

const MobileMain = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-image: url('/images/Ranking.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    h1 {
        margin:0px;
        padding:0px;
    }
`;

const MobileMainA = styled.div`
	height: 100%;
    width: 33%;
	display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 8px;
`;

const MobileMainAa = styled.div` 
    height: 30%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const MobileMainAb = styled.div` 
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileMainAc = styled.div` 
    height: 40%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 8px;
`;

const MobileMainB = styled.div`
	height: 100%;
    width: 40%;
	display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
`;

const MobileMainBa = styled.div` 
    height: 10%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const MobileMainBb = styled.div` 
    height: 38%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileMainBc = styled.div` 
    height: 52%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 8px;
`;

const MobileMainC = styled.div`
	height: 100%;
    width: 32%;
	display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 8px;
`

const MobileMainCa = styled.div` 
    height: 36%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const MobileMainCb = styled.div` 
    height: 30%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 8px;
`;

const MobileMainCc = styled.div` 
    height: 37%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooter = styled.div`
	height: 40%;
    width: 100%;
	  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #76389c;
    overflow: scroll;
`;

const MobileFooterA = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    background-color: white;
`;

const MobileFooterAa = styled.div` 
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    border-radius: 10px;
`;

const MobileFooterAb = styled.div`
	height: 100%;
    width: 15%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`

const MobileFooterAc = styled.div`
	height: 100%;
    width: 40%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterAd = styled.div`
	height: 100%;
    width: 30%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    color: #e5bbe8;
`;

const MobileFooterB = styled.div`
	height: 25%;
    width: 100%;
	display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: white;
`;

const MobileFooterBa = styled.div` 
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const MobileFooterBb = styled.div`
	height: 100%;
    width: 15%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterBc = styled.div`
	height: 100%;
    width: 40%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterBd = styled.div`
	height: 100%;
    width: 30%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    color: #e5bbe8;
`;

const MobileFooterC = styled.div`
	height: 25%;
    width: 100%;
	display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: white;
`;

const MobileFooterCa = styled.div` 
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const MobileFooterCb = styled.div`
	height: 100%;
    width: 15%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterCc = styled.div`
	height: 100%;
    width: 40%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterCd = styled.div`
	height: 100%;
    width: 30%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    color: #e5bbe8;
`;

const MobileFooterD = styled.div`
	height: 25%;
    width: 100%;
	display: flex;
    align-items: center;
    background-color: white;
`;

const MobileFooterDa = styled.div` 
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const MobileFooterDb = styled.div`
	height: 100%;
    width: 15%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterDc = styled.div`
	height: 100%;
    width: 40%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
`;

const MobileFooterDd = styled.div`
	height: 100%;
    width: 30%;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    color: #e5bbe8;
`;

const Text = styled.h1`
  margin-right: 20px;
`;

const StyledIcon = styled(FaCircleUser)`
  font-size: 40px;
  color: skyblue;
`;

const NullSpace = styled.div`
	height: 100%;
    width: 5%;
	display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

const Ranking = () => {
    useEffect(async () => {
        try 
        {
            const response = await axios.get(process.env.REACT_APP_FAST_API_KEY+'/api/result/all');
	    const gameResults = response.data;
	    console.log(gameResults[0].game_result_player_id);
	    console.log(gameResults);
        }
        catch (error) 
	{
             console.error('Error fetching game results:', error);
        }
    });
	
    const RankingContent = (
        <>
            <MediaQuery minWidth={767}/>

            {/*여기부터 모바일 환경*/}
            <MediaQuery maxWidth={767}>
                <MobileFrame>
                    <MobileHeader>
                        <MobileRankText>
                        <RiVipCrownFill style={{width:"10%",height:"40%"}}/>
                        명예의 전당
                        </MobileRankText>
                        
                    </MobileHeader>

                    <MobileMain>
                    <NullSpace/>
                        <MobileMainA>
                            <MobileMainAa>
                            <h1>99점</h1>
                            </MobileMainAa>

                            <MobileMainAb/>

                            <MobileMainAc>
                            <h1>박준수</h1>
                            </MobileMainAc>
                        </MobileMainA>

                        <MobileMainB>
                            <MobileMainBa>
                                <h1 style={{marginLeft:"10px"}}>100점</h1>
                            </MobileMainBa>

                            <MobileMainBb/>

                            <MobileMainBc>
                            <h1>gameResults[0].game_result_player_id</h1>
                            </MobileMainBc>
                        </MobileMainB>

                        <MobileMainC>
                            <MobileMainCa>
                            <h1>95점</h1>
                            </MobileMainCa>

                            <MobileMainCb/>

                            <MobileMainCc>
                            <h1>조우주</h1>
                            </MobileMainCc>
                        </MobileMainC>

                        <NullSpace/>
                    </MobileMain>

                    <MobileFooter>
                        <MobileFooterA>
                            <MobileFooterAa>
                                <h1>4</h1>
                            </MobileFooterAa>

                            <MobileFooterAb>
                            <StyledIcon />
                            </MobileFooterAb>

                            <MobileFooterAc>
                            <Text>수상남</Text>
                            </MobileFooterAc>

                            <MobileFooterAd>
                                <h1>90</h1>
                            </MobileFooterAd>
                        </MobileFooterA>

                        <MobileFooterB>
                            <MobileFooterBa>
                                <h1>5</h1>
                            </MobileFooterBa>

                            <MobileFooterBb>
                            <StyledIcon />
                            </MobileFooterBb>

                            <MobileFooterBc>
                            <Text>이승훈</Text>
                            </MobileFooterBc>

                            <MobileFooterBd>
                                <h1>88</h1>
                            </MobileFooterBd>
                        </MobileFooterB>

                        <MobileFooterC>
                            <MobileFooterCa>
                                <h1>6</h1>
                            </MobileFooterCa>

                            <MobileFooterCb>
                            <StyledIcon />
                            </MobileFooterCb>

                            <MobileFooterCc>
                            <Text>Ho8</Text>
                            </MobileFooterCc>

                            <MobileFooterCd>
                                <h1>80</h1>
                            </MobileFooterCd>
                        </MobileFooterC>

                        <MobileFooterD>
                            <MobileFooterDa>
                                <h1>7</h1>
                            </MobileFooterDa>

                            <MobileFooterDb>
                            <StyledIcon />
                            </MobileFooterDb>

                            <MobileFooterDc>
                            <Text>Unreal 뉴비</Text>
                            </MobileFooterDc>

                            <MobileFooterDd>
                                <h1>79</h1>
                            </MobileFooterDd>
                        </MobileFooterD>
                    </MobileFooter>
                </MobileFrame>
            </MediaQuery>
        </>
    )

    return (
        <Layout RightMainContent={RankingContent} />
    );
};

export default Ranking;
