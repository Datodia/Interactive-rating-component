import styled from "styled-components";

export const SMain = styled.div`
  width: 412px;
  height: 416px;
  border-radius: 30px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 327px;
    height: 360px;
  }
`;
