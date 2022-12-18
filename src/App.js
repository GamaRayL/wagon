import React from "react";
import { AppBar, Widget, Slogan, Title, Modal } from "components";
import styled from "styled-components";

const S = {};
S.App = styled.div`
  height: 100vh;
  padding: 0 20px;
`;

function App() {
  return (
    <S.App>
      <AppBar />
      <Title />
      <Widget />
      <Slogan />
    </S.App>
  );
}

export default App;
