import styled from "styled-components";

export const Title = styled.h3`
  font-family: cormorant;
  font-size: 45px;
  text-align: center;
  margin-top: 105px;
`;
export const CategoryMargin = styled.div`
  margin: 50px auto;
  padding: 20px 0;
  max-width: 1600px;
  display: flex;
  gap: 23px;
  position: relative;
`;
export const Box = styled.div`
  cursor: pointer;
`;
export const Photo = styled.div`
  height: 524px;
  opacity: 1;
  width: 380px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 50;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0;
  }
`;
export const Description = styled.p`
  margin-top: 11px;
  text-align: center;
  font-size: 19;
`;
export const Background = styled.div`
  position: absolute;
  height: 524px;
  width: 380px;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -99;
`;
export const Tab = styled.div`
  position: absolute;
  right: 0;
  top: -2%;
  display: flex;
  align-items: flex-end;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
export const View = styled.a`
  cursor: pointer;
  font-family: cormorant;
  font-weight: 700;
  font-size: 19px;
`;
