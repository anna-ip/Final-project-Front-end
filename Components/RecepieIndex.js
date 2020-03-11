import React from "react";
import { SafeAreaView, ScrollView, Button } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import RecepieCard from "./RecepieCard";
import styled from "styled-components/native";

const RecepieIndex = ({ history }) => (
  <StyledView>
    <SafeAreaView>
      {/* <Link
        to={`/recepie`}
      > */}
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <CardContainer>
          <CardView>
            <RecepieCard />

          </CardView>
        </CardContainer>

        <CardContainer>
          <CardView>
            <RecepieCard />
          </CardView>
        </CardContainer>

        <CardContainer>
          <CardView>
            <RecepieCard />
          </CardView>
        </CardContainer>

        <CardContainer>
          <CardView>
            <RecepieCard />
          </CardView>
        </CardContainer>
      </ScrollView>
      {/* </Link> */}
      <Button title='Search' onPress={() => history.push('/recepie')} />
    </SafeAreaView>
  </StyledView>
);
export default RecepieIndex;

//StyledView is the background
const StyledView = styled.View`
  z-index: -1;
  margin-top: 25%;
`;

//background for the Scrollwiev of the cards height
// const Scroll = styled(ScrollView)`
//     background-color: #FFFFFF;
//  `;

const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const CardView = styled.View`
  z-index: 1;
`;
