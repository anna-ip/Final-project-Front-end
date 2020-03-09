

import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import RecepieCard from "./Components/RecepieCard";
import BackButton from "./Components/BackButton";
import SearchButton from "./Components/SearchButton";
import styled from "styled-components/native";
import VeggieIcons from "./Components/VeggieIcons";

const App = () => (
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
);
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

const BadgeView = styled.View`
position: absolute;
top: 38%;
`


export default App 
