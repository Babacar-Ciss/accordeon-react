import styled from "styled-components";
import Main from "./Components/Main";

const AppStyle = styled.div`
   height: 100vh;
   background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%); 
`

function App() {
  return (
    <AppStyle>
      <Main />
    </AppStyle>
  );
}

export default App;
