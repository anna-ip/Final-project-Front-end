import React, { useState } from "react";
import Routes from "./Components/Routes/Routes";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import ErrorBoundary from "./Components/ErrorBoundary";
import { NativeRouter, Switch } from "react-router-native";
import styled from "styled-components/native";

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import { startAsync } from "expo/build/AR";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Eczar-bold': require('./Components/assets/Fonts/Eczar/Eczar-Bold.ttf'),
//     'Eczar-regular': require('./Components/assets/Fonts/Eczar/Eczar-Regular.ttf')
//   });
// };





//Native Router can only have one child
//Switch makes sure only one page render at a time
const App = () => {
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //     />
  //   )
  // }
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
