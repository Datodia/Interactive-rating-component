import styled from "styled-components";

export const SContent = styled.div`
  margin: 0 32px;
  ${({ center }) => center && `text-align: center`};
  @media screen and (max-width: 700px) {
    margin: 0 24px;
  }
`;

export const STitle = styled.h1`
  font-size: 28px;
  color: white;
  @media screen and (max-width: 700px) {
    font-size: 24px;
  }
`;

export const SPara = styled.p`
  font-size: 15px;
  color: #969fad;
  line-height: 24px;
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
