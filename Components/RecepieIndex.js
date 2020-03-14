import React from "react";
import { SafeAreaView, ScrollView, Button, TouchableOpacity, Text } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Alert } from "react-native";
import RecepiesCards from "./RecepiesCards";
import styled from "styled-components/native";
import BackButton from "./lib/BackButton"

//fetch ...../recepie 
//use Params....kolla Movies projects   
//map through

const RecepieIndex = ({ history, location }) => {



  return (
    <StyledView>
      <SafeAreaView>


        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Link to={{
            pathname: "/recepie",
            state: { name: location.state }
          }}
            component={TouchableOpacity} activeOpacity={0.8}
          >
            {/* <Link to="/recepie/${recepie.id}" component={TouchableOpacity} activeOpacity={0.8}> */}
            {/* skicka med ett id från recept db som i Movie project*/}
            {/* link to */}
            <CardContainer>

              <Text>{JSON.stringify(location.state)}</Text>
              <CardView>
                <RecepiesCards />
              </CardView>
            </CardContainer>
          </Link>


          <Link to="/recepie" component={TouchableOpacity} activeOpacity={0.8}>
            <CardContainer>
              <CardView>
                <RecepiesCards />
              </CardView>
            </CardContainer>
          </Link>

          <Link to="/recepie" component={TouchableOpacity} activeOpacity={0.8}>
            <CardContainer>
              <CardView>
                <RecepiesCards />
              </CardView>
            </CardContainer>
          </Link>

          <Link to="/recepie" component={TouchableOpacity} activeOpacity={0.8}>
            <CardContainer>
              <CardView>
                <RecepiesCards />
              </CardView>
            </CardContainer>
          </Link>
        </ScrollView>
        <BackButton />
        {/* <Button title='Search' onPress={() => history.push('/recepie')} /> */}
      </SafeAreaView>
    </StyledView>

  );
}
console.log(location, name)
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
