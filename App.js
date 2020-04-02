import React from "react";
import Routes from "./Components/Routes/Routes";
import { NativeRouter, Switch } from "react-router-native";
import styled from "styled-components/native";

const App = () => {
  return (
    <NativeRouter>
      <Container>
        <Switch>
          <Routes />
        </Switch>
      </Container>
    </NativeRouter>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default App;
