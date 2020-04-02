import React from "react";
import { Route } from "react-router-native";
import SearchPage from "../SearchPage";
import RecepieIndex from "../RecepieIndex";
import Recepie from "../Recepie";
import styled from "styled-components/native";

const Routes = () => {
  return (
    <StyledView>
      <Route exact path="/" component={SearchPage}></Route>

      <Route exact path="/RecepieIndex" component={RecepieIndex}></Route>

      <Route exact path="/recepie" component={Recepie}></Route>
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: -80px;
`;

export default Routes;
