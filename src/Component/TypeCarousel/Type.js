import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  width: 1150px;
  background: gray;
  overflow: hidden;
  position: relative;
  margin: 50px auto;
`;
export const Carasoul = styled.div`
  background: blue;
  height: inherit;
  width: 1500px;
  position: relative;
`;
export const Tags = styled.div`
  height: 200px;
  width: 200px;
  background: purple;
`;
export const Img = styled.div``;
export const Flex = styled.div`
  position: absolute;
  display: flex;
  transition: all 0.2s ease-in-out;

  left: -200px;
  gap: 10px;
`;
export const Left = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  z-index: 99;
`;
export const Right = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;
export const MainWrapper = styled.div`
  position: relative;
`;
