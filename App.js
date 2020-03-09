

const reducer = combineReducers({
  food: food.reducer
});

const store = configureStore({ reducer });

import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import RecepieCard from "./Components/RecepieCard";
import BackButton from "./Components/BackButton";
import SearchButton from "./Components/SearchButton";
import styled from "styled-components/native";
import VeggieIcons from "./Components/VeggieIcons";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { food } from "./Reducer/food.js";

const App = () => {

 return(
   <Provider store={store}>
  <StyledView>
    <StyledSafeAreaView>
      <Scroll horizontal={true}>
        <BadgeView>
          <SustainBadge />
        </BadgeView>
        <RecepieIndex />
      </Scroll>
      <SearchButton />
      <BackButton />
      <VeggieIcons />
    </StyledSafeAreaView>
  </StyledView>
  </Provider>
  )
};
export default App;

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
`;
const StyledSafeAreaView = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const Scroll = styled(ScrollView)`
  background-color: #ffffff;
`;



export default App 
