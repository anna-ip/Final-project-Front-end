import React from "react";
import Routes from "./Components/Routes/Routes";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import ErrorBoundary from "./Components/ErrorBoundary";
import { NativeRouter, Switch } from "react-router-native";
import styled from "styled-components/native";







//Native Router can only have one child
//Switch makes sure only one page render at a time
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
