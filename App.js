// import "react-native-gesture-handler";

import React from "react";
import Routes from "./Components/Routes/Routes";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import ErrorBoundary from "./Components/ErrorBoundary";
// import SearchPage from './Components/SearchPage'
// import RecepieIndex from "./Components/RecepieIndex";
// import SustainBadge from './Components/lib/SustainBadge'
// import Recepie from './Components/Recepie'
// import BackButton from "./Components/lib/BackButton";
import { NativeRouter, Switch } from "react-router-native";
import styled from "styled-components/native";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { food } from "./Components/Reducer/food";



const reducer = combineReducers({
  food: food.reducer
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Container>
          <Switch>
            <Routes />
          </Switch>
        </Container>
      </NativeRouter>
    </Provider>

    // <StyledView>
    //   <Scroll horizontal={true}>
    //     <BadgeView>
    //       <SustainBadge />
    //     </BadgeView>
    //     <RecepieIndex />
    //   </Scroll>
    //   {/* <SearchPage /> */}
    //   {/* <Recepie /> */}

    //   {/* <BackButton /> */}

    // </StyledView>


  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default App;
