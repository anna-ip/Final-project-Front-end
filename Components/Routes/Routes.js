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
        {/* <SearchPage /> */}
      </Route>

      <Route exact path="/RecepieIndex" component={RecepieIndex}>
        {/* <Scroll horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <BadgeView>
            <SustainBadge />
          </BadgeView>
          {/* <RecepieIndex /> */}
        {/* </Scroll>  */}
      </Route>

      <Route exact path="/recepie" component={Recepie}>
        {/* <Recepie /> */}
      </Route>

      {/* <BackButton /> */}
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
{
  /* const StyledSafeAreaView = styled(SafeAreaView)`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    `; */
}

const Scroll = styled(ScrollView)`
  background-color: #ffffff;
`;

const BadgeView = styled.View`
  position: absolute;
  top: 38%;
`;

export default Routes;
