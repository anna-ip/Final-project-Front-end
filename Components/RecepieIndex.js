import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Text
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Alert } from "react-native";
import RecepiesCards from "./RecepiesCards";
import styled from "styled-components/native";
import BackButton from "./lib/BackButton";

const localUrl = "http://192.168.1.8:8080/recipes/";

const RecepieIndex = ({ history, location }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // THIS WORKS ✅
  // fetching the recipies from DB here.
  // getting the name from that location.state that was passed from prev screen.
  // setting recipies array to be from the fetch and then mapping through them to get the title to show up as a text. The cards needs to be filled of course. But at least this works :D
  useEffect(() => {
    setLoading(true);
    fetch(localUrl + location.state.name)
      .then(res => res.json())
      .then(json => {
        setRecipes(json);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView>
      <StyledView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {recipes.map(recipe => (
            <Link
              key={recipe.id}
              to={{
                pathname: "/recepie",
                state: recipe // passing along the whole recipe object to next screen
              }}
              component={TouchableOpacity}
              activeOpacity={0.8}
            >
              {/* <Link to="/recepie/${recepie.id}" component={TouchableOpacity} activeOpacity={0.8}> */}
              {/* skicka med ett id från recept db som i Movie project*/}
              {/* link to */}
              <CardContainer>
                {/* {loading && <Text>Test</Text>} */}
                {/* <LoadingContainer> */}
                {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
                {/* </LoadingContainer> */}
                {!loading && <Text></Text>}

                <CardView>
                  <RecepiesCards recipe={recipe} />
                </CardView>
              </CardContainer>
            </Link>
          ))}
        </ScrollView>

        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
        {/* <Button title='Search' onPress={() => history.push('/recepie')} /> */}
      </StyledView>
    </SafeAreaView>
  );
};

//StyledView is the background
const StyledView = styled.View`
  z-index: -1;
  margin-top: 180px;
`;

//background for the Scrollwiev of the cards height
// const Scroll = styled(ScrollView)`
//     background-color: #FFFFFF;
//  `;

const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* position: absolute; 
  top: 25px;  */
`;

const CardView = styled.View`
  z-index: 1;
`;

const BackButtonContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 380px;
  bottom: 5px;
  z-index: 2;
`;

export default RecepieIndex;
