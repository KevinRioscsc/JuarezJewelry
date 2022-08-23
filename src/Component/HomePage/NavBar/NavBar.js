import styled from "styled-components";

export const NavContainer = styled.div`
  background: ${(props) => (props.passed ? "#3D5361" : "#f5f0ed")};
  height: 80px;
  margin-top: -10px;
  position: sticky;
  color: ${(props) => (props.passed ? "white" : "black")};
  z-index: 56;
  top: 0;
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
export const Links = styled.ul`
  display: flex;
  gap: 22px;
`;
export const AccountLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Link = styled.li`
  list-style: none;
  display: flex;
  align-items: flex-end;
  gap: 3px;
`;
export const Tag = styled.a`
  font-size: 18px;
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
