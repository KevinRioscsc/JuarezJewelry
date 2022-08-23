import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h3`
  font-family: cormorant;
  font-size: 45px;
  text-align: center;
  margin-top: 105px;
`;
export const ContainMargin = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
export const Boxes = styled.div`
  margin-top: 50px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-bottom: 1px solid black;
`;
export const Box = styled.div`
  height: 600px;
  width: 450px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
export const Btn = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  padding: 10px 21px;
  background-color: #d6b7b5;
  border: 0;
  font-family: ubuntu;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    background: transparent;
    color: white;
  }
`;
