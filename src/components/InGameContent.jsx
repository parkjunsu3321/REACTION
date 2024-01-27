import styled from "styled-components";

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
    heigth: 100%;
    margin-top: 2%;
    border-radius: 20px;
    background-color: salmon;
    font-size: 30px;
    cursor: pointer;
`;

const CorrectBtn = styled.button`
    width: 10%;
    heigth: 100%;
    margin-top: 2%;
    margin-left: 2%;
    border-radius: 20px;
    background-color: orange;
    font-size: 30px;
    cursor: pointer;
`;

const InGameContent =({ onReplayClick })=> {
    return (
        <Frame>
            <img 
            src="/images/discospaghetti.gif"
            alt="Let's DISCO"
            style={{ width: '40%', height: '40%'}} // 이미지 크기를 조절하는 스타일 적용
            />
            <TextBox></TextBox>
            <BtnArea>
                <ReplayBtn onClick={onReplayClick}>다시듣기</ReplayBtn>
                <CorrectBtn>정답</CorrectBtn>
            </BtnArea>
        </Frame>
    );
}

export default InGameContent;