import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #f5f0ed;
`;
export const HeroMargin = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1600px;
  display: flex;
  align-items: center;
`;
export const LeftSide = styled.div`
  width: 60%;
`;
export const Title = styled.h1`
  font-size: 65px;
  font-weight: semibold;
`;
export const SubTitle = styled.p`
  margin-top: 10px;
  font-size: 19px;
`;
export const Btn = styled.button`
  margin-top: 100px;
  padding: 15px 21px;
  background-color: #d6b7b5;
  border: 0;
  font-family: ubuntu;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: transparent;
    color: #3d5361;
  }
`;
export const RightSide = styled.div`
  width: 50%;
  height: 748px;

  position: relative;
`;
export const TopRect = styled.div`
  background: #b5c5c5;
  height: 284px;
  width: 357px;
`;
export const BottomRect = styled.div`
  background: #b5c5c5;
  height: 284px;
  width: 357px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const Photo = styled.div`
  background: yellow;
  position: absolute;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 688px;
  width: 670px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const TextWrap = styled.div`
  max-width: 480px;
`;
