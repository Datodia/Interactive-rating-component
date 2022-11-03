import './App.css';
import { Main } from './Components/Main';
import styled from 'styled-components'



function App() {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `
  return (
    <Wrapper>
      <Main />
    </Wrapper>

  );
}

export default App;
