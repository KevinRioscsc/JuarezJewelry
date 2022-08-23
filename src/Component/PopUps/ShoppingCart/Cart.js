import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  position: fixed;
  z-index: 99;
  top: 0;
  opacity: ${(props) => (props.toggle ? "0.4" : "0")};
  visibility: ${(props) => (props.toggle ? "visibile" : "hidden")};
  transition: all 0.2s ease-in-out;
`;
export const SideBar = styled.div`
  position: fixed;
  height: 100%;
  width: 370px;
  padding: 30px;
  background: white;
  top: 0;
  transition: all 0.2s ease-in-out;
  right: ${(props) => (props.toggle ? "0" : "-430px")};
  z-index: 99;
  overflow: auto;
`;

export const ExitOut = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Description = styled.div`
  text-align: center;
  margin-top: 200px;
`;
export const Btn = styled.button`
  padding: 10px 21px;
  width: 100%;
  background-color: #d6b7b5;
  border: 0;
  font-family: ubuntu;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  align-self: center;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
export const Spacing = styled.div`
  margin-top: 50px;
`;
