import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 500px;

  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Radio = styled.input`
  display: none;
`;
export const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  margin-top: 80px;
`;
export const Label = styled.label`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
export const Title = styled.h3`
  font-family: cormorant;
  font-size: 45px;
  text-align: center;
  padding-top: 80px;
`;
export const Left = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  cursor: pointer;
  z-index: 99;
`;
export const Right = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  cursor: pointer;
  z-index: 99;
`;
export const Prices = styled.div`
  max-width: 400px;
  margin: 0 auto;

  position: relative;
  height: 70px;
  overflow: hidden;
  margin-bottom: 80px;
`;
export const LabelPrice = styled.div`
  margin-bottom: 20px;
`;
export const TitlePrice = styled.h5`
  width: 250px;
  font-size: 19px;
  font-family: ubuntu;
`;
export const Price = styled.p`
  margin-top: 5px;
  font-size: 20px;
`;
export const Add = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: #b5c5c5;
  }
`;
export const PriceContainer = styled.div`
  transition: all 0.4s ease-in-out;
  transform: ${(props) => {
    if (props.current === 0) return "translateY(0);";
    else if (props.current === 1) return "translateY(-100px)";
    else return "translateY(-190px)";
  }};
`;
export const ContainEvery = styled.div`
  padding-bottom: 100px;
`;
export const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  background: #b5c5c5;
  transition: all 0.4s ease-in-out;
  opacity: ${(props) => (props.current === 2 ? "1" : "0")};
`;
export const Background2 = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  background: #d6b7b5;
  transition: all 0.4s ease-in-out;
  opacity: ${(props) => (props.current === 1 ? "1" : "0")};
`;
export const Start = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  background: #f5f0ed;
  transition: all 0.4s ease-in-out;
  opacity: ${(props) => (props.current === 0 ? "1" : "0")};
`;
export const FirstCol = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: 50px;
  height: 100%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
