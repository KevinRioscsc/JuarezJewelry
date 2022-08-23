import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #3d5361;
  color: white;
`;
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
`;
export const FirstSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Logo = styled.img`
  height: 60px;
`;
export const Socials = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
export const Lists = styled.li``;
export const Circle = styled.div`
  padding: 20px;
  background: #b5c5c5;
  border-radius: 50px;
  position: relative;
  color: #30414db2;
`;
export const Links = styled.a`
  position: absolute;
  top: 50%;
  text-decoration: none;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #30414db2;
  &:hover {
    color: black;
  }
`;
export const SecondSec = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 60px;
`;
export const Title = styled.h5`
  font-family: cormorant;
  font-size: 20px;
`;
export const UnderCards = styled.p`
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;
`;
export const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: cormorant;
  font-size: 20px;
`;
export const Sec = styled.div``;
