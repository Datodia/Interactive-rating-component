import styled from "styled-components";

export const SButton = styled.button`
  width: 341px;
  height: 45px;
  margin: auto;
  border-radius: 22px;
  background-color: #fc7614;
  border: none;
  color: white;
  font-size: 15px;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #fc7614;
  }
  @media screen and (max-width: 700px) {
    width: 279px;
    height: 45px;
    font-size: 14px;
  }
`;
