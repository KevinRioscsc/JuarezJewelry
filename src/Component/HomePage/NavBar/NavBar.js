import styled from "styled-components";

export const NavContainer = styled.div`
  background: ${(props) => (props.passed ? "#3D5361" : "#f5f0ed")};
  height: 80px;
  margin-top: -10px;
  position: sticky;
  color: ${(props) => (props.passed ? "white" : "black")};
  z-index: 56;
  top: 0;
  padding: 0 100px;
  transition: all 0.2s ease-in-out;
`;
export const NavMargin = styled.div`
  margin: 0 auto;
  height: inherit;
  max-width: 1600px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div``;
export const Links = styled.div`
  display: flex;
  gap: 42px;
`;
export const AccountLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const LinkLi = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  cursor: pointer;
  position: relative;
  &:hover .drop {
    display: block;
  }
`;
export const Tag = styled.a`
  font-size: 15px;
  font-family: ubuntu;
`;
export const IMG = styled.img``;
export const Cart = styled.div`
  cursor: pointer;
  position: relative;
`;
export const Quantity = styled.div`
  height: 20px;
  width: 20px;
  color: white;
  position: absolute;
  background-color: red;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
`;
export const Dropdown = styled.div`
  background-color: white;
  min-width: 200px;
  position: absolute;
  top: calc(100% + 0.1rem);
  transform: translateX(-10px);
  padding: 10px;
  display: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h4`
  font-family: ubuntu;
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const Arrow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
`;
export const Btn = styled.button`
  background: none;
  border: none;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Div = styled.div`
  padding: 2px 0;
`;
export const Wrap = styled.div`
  width: 100px;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid white;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
