import React from "react";
import { Route } from "react-router-native";
import SearchPage from "../SearchPage";
import RecepieIndex from "../RecepieIndex";
import SustainBadge from "../lib/SustainBadge";
import Recepie from "../Recepie";
import BackButton from "../lib/BackButton";
import styled from "styled-components/native";

const Routes = () => {
  <StyledView>
    <Route exact path="/">
      <SearchPage />
    </Route>

    <Route path="/recepieIndex">
      <Scroll horizontal={true}>
        <BadgeView>
          <SustainBadge />
        </BadgeView>
        <RecepieIndex />
      </Scroll>
    </Route>

    {/* <Route path="/recepie" >
            <Recepie />
        </Route> */}

    {/* <BackButton /> */}
  </StyledView>;
};

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
