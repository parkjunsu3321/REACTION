import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const MobileFrame = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileContainer = styled.div`
  width: 90%;
  height: 80%;
  background-color: lightsalmon;
  border-radius: 20px;
`;

const MobileHeaderFrame = styled.div`
  width: 100%;
  height: 50%;
  background-color: red;
`;

const MobileHeader = styled.div`
  width: 90%;
  height: 90%;
  background-color: gray;
`;

const MobileFooterFrame = styled.div`
  width: 100%;
  height: 50%;
  background-color: blue;
`;

const MobileFooter = styled.div`
  width: 90%;
  height: 90%;
  background-color: gray;
`;

const GameResult = ( RightMainContent ) => {

  const GameResult = (
      <MobileFrame>
        <MobileContainer>
          <MobileHeaderFrame>
            <MobileHeader>

            </MobileHeader>
          </MobileHeaderFrame>

          <MobileFooterFrame>
            <MobileFooter>

            </MobileFooter>
          </MobileFooterFrame>
        </MobileContainer>
      </MobileFrame>
    )

  return (
    <Layout RightMainContent={GameResult}>
      
    </Layout>
  )
}

export default GameResult;