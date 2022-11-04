import { Main } from "./Components/Main/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};

export default App;
