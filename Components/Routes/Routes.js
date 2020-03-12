import React from "react";
import { Route } from "react-router-native";
import { SafeAreaView, ScrollView } from 'react-native';
import SearchPage from "../SearchPage";

import RecepieIndex from "../RecepieIndex";
import SustainBadge from "../lib/SustainBadge";
import Recepie from "../Recepie";
import BackButton from "../lib/BackButton";
import styled from "styled-components/native";

const Routes = () => {

  return (
    <StyledView>

      <Route exact path="/" component={SearchPage}>
      </Route>

      <Route exact path="/RecepieIndex" component={RecepieIndex}>
      </Route>

      <Route exact path="/recepie" component={Recepie}>
      </Route>


    </StyledView>

  )

}

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: -80px;
`;

/* const StyledSafeAreaView = styled(SafeAreaView)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  `; */




export default Routes;
