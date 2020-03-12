import React from "react";
import { SafeAreaView, ScrollView, Button, TouchableOpacity } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import RecepieCard from "./RecepieCard";
import styled from "styled-components/native";

//fetch ...../recepie 
//use Params....kolla Movies projects   
//map through

const RecepieIndex = ({ history }) => (
  <StyledView>
    <SafeAreaView>
      {/* <Link
        to={`/recepie`}
      > */}

      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Link to="/recepie/" component={TouchableOpacity} activeOpacity={0.8}>
          {/* <Link to="/recepie/${recepie.id}" component={TouchableOpacity} activeOpacity={0.8}> */}
          {/* skicka med ett id från recept db som i Movie project*/}
           link to
          <CardContainer>
            <CardView>
              <RecepieCard />

            </CardView>
          </CardContainer>
        </Link>

        <Link to="/recepie" component={TouchableOpacity} activeOpacity={0.8}>
          <CardContainer>
            <CardView>
              <RecepieCard />
            </CardView>
          </CardContainer>
        </Link>

        <Link to="/recepie" component={TouchableOpacity} activeOpacity={0.8}>
          <CardContainer>
            <CardView>
              <RecepieCard />
            </CardView>
          </CardContainer>
        </Link>

        <Link to="/recepie" component={TouchableOpacity} activeOpacity={0.8}>
          <CardContainer>
            <CardView>
              <RecepieCard />
            </CardView>
          </CardContainer>
        </Link>
      </ScrollView>
      {/* </Link> */}
      {/* <Button title='Search' onPress={() => history.push('/recepie')} /> */}
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
