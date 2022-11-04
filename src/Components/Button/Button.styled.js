import styled from "styled-components";

export const SButton = styled.button`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: #262e38;
  border: none;
  color: white;
  cursor: pointer;
  font-family: inherit;
  &:hover {
    background-color: #fc7614;
  }

  &:focus {
    background: gray;
  }

  @media screen and (max-width: 700px) {
    width: 40px;
    height: 40px;
  }
`;
