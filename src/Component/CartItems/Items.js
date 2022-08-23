import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
`;
export const ImageDiv = styled.div``;
export const IMG = styled.img``;
export const Description = styled.div``;
export const Name = styled.h5`
  font-family: cormorant;
  font-weight: 900;
  font-size: 20px;
`;
export const Quantity = styled.p`
  margin-top: 10px;
`;
export const Price = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Trash = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
