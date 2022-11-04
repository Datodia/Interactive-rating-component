import styled from "styled-components";

export const SStars = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  margin-top: 32px;
  @media screen and (max-width: 700px) {
    width: 40px;
    height: 40px;
    margin-left: 24px;
    margin-top: 24px;
  }
`;

export const SStarsImage = styled.img``;

SStarsImage.defaultProps = {
  src: "assets/svg/star.svg",
};
