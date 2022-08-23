import styled from "styled-components";

export const AdWrapper = styled.div`
  margin: 150px auto;
  padding: 20px 0;
  max-width: 1600px;
`;
export const AdRow = styled.div`
  display: grid;
  gap: 62px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  display: flex;
  gap: 10px;
`;
export const Photo = styled.div`
  height: 630px;
  width: 465px;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Column2 = styled.div``;
export const TextWrap = styled.div`
  max-width: 450px;
`;
export const Title = styled.h3`
  font-family: cormorant;
  font-weight: 900;
  font-size: 45px;
`;
export const SubTitle = styled.p`
  margin-top: 10px;
`;
export const Btn = styled.button`
  margin-top: 50px;

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
