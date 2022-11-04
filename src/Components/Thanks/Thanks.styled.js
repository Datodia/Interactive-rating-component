import styled from "styled-components";

export const STHanks = styled.div`
  height: 108px;
  width: 162px;
  margin: 34px 0 24px 0;
  margin-left: 28%;
`;

export const SRate = styled.div`
  width: 192px;
  height: 32px;
  background-color: #262e38;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fc7614;
  border-radius: 22px;
  margin-left: 25%;

  @media screen and (max-width: 700px) {
    width: 168px;
    font-size: 14px;
    margin-top: -20px;
  }
`;

export const SThanksImage = styled.img``;

SThanksImage.defaultProps = {
  src: "assets/svg/mobile.svg",
};
