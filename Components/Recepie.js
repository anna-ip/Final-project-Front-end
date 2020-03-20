import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  ScrollView,
  SafeAreaView,
  SectionList,
  StyleSheet,
  ImageBackground,
  FlatList,
  Title
} from "react-native";
import { Card, Paragraph, DataTable } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import { List, ListItem } from "react-native-elements";
import SeasonalView from "./SeasonalView";
import ProgressCircle from "./ProgressCircle";

import InstructionsList from "./lib/InstuctionsList";
import BackButton from "./lib/BackButton";
import styled from "styled-components";
import { PacmanIndicator } from "react-native-indicators";

const Recepie = ({ history, location }) => {
  // const [ingredient, setIngredient] = useState(location.state.recipe)
  // console.log("ingredient", location.state.veggie)
  const [loading, setLoading] = useState(false);

  const { recipe, veggie } = location.state; // destructurins recipe and veggie from location state

  return (
    <Container>
      <Scroll>
        <ImageContainer>
          <CardView>
            {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
            <StyledImageCard>
              <Card.Content key={recipe.id}>
                <StyledImageBackground source={{ uri: recipe.image }}>
                  {!loading && <StyledTitle>{recipe.title}</StyledTitle>}
                </StyledImageBackground>
              </Card.Content>
            </StyledImageCard>
          </CardView>
        </ImageContainer>
        <ProgressContainer>
          <ProgressCircle veggie={veggie} />
        </ProgressContainer>
        <SeasonConatiner>
          <SeasonalView veggie={veggie} />
        </SeasonConatiner>

        <RecepieCardContainer>
          <CardContainer>
            <CardView>
              <StyledCard>
                <Card.Content>
                  <CardTitle>{recipe.title}</CardTitle>

                  <TimeView>
                    <StyledDataTable>
                      <DataTable.Header>
                        <DataTable.Title>Prep time: </DataTable.Title>
                        <DataTable.Title numeric> Cook time: </DataTable.Title>
                        <DataTable.Title numeric> Total time: </DataTable.Title>
                      </DataTable.Header>

                      <DataTable.Row style={{ justifyContent: "center" }}>
                        <DataTable.Cell numeric>
                          {`${recipe.preparationMinutes}`} min
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                          {`${recipe.cookingMinutes}`} min
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                          {`${recipe.readyInMinutes}`} min
                        </DataTable.Cell>
                      </DataTable.Row>
                    </StyledDataTable>
                  </TimeView>

                  <IngredientsView>
                    <RecipeTitleTop>Ingredients:</RecipeTitleTop>
                    {recipe.missedIngredients.map(item => (
                      <View>
                        <CheckBox
                          key={item.id}
                          title={item.originalString}
                          checked={false}
                          size={30}
                          checkedColor="green"
                        />
                      </View>
                    ))}
                  </IngredientsView>
                  <View>
                    <InstructionsView>
                      <RecipeTitle>Instructions:</RecipeTitle>
                      {recipe.analyzedInstructions.map((item, i) => (
                        <View key={i}>
                          {item.steps.map((list, ind) => (
                            <ListSteps key={ind}>{list.step}</ListSteps>
                          ))}
                        </View>
                      ))}
                    </InstructionsView>
                  </View>
                </Card.Content>
              </StyledCard>
            </CardView>
          </CardContainer>
        </RecepieCardContainer>
        <ButtonContainer>
          <BackButton />
        </ButtonContainer>
      </Scroll>
    </Container>
  );
};

// containers
const Container = styled(SafeAreaView)`
  flex-shrink: 1;
  top: 10%;
  background-color: #f7fcfc;
`;
const ProgressContainer = styled.View`
  top: 1px;
  padding: 8px;
`;

const SeasonConatiner = styled.View`
  top: 70px;
  padding: 8px;
`;

const RecepieCardContainer = styled.View`
  top: 205px;
  padding: 8px;
`;

const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  /* bottom: 500px; */
`;

const Scroll = styled(ScrollView)`
  flex-shrink: 1;
`;

const ImageContainer = styled.View`
margin-top:40px
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.View`
  top: 180px;
  padding: 15px;
`;

const StyledImageCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 250px;
  margin: 5px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  border: 0.75px solid #ffdf7f;
  z-index: 0;
`;

const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 200px;
  box-shadow: 5px 5px 5px black;
  /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2); */
  /* background-position: center; */
  border-radius: 8px;
  z-index: 1;
  align-content: center;
  position: absolute;
  top: 10px;
  right: 8px;
  bottom: 0%;
`;

const StyledTitle = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  color: #7edabe;
  position: absolute;
  left: 2%;
  right: 0%;
  margin-top: 20px;
  z-index: 2;
`;

//titles
const CardTitle = styled.Text`
  font-size: 20px;
  text-align: center;
`;


const RecipeTitleTop = styled.Text`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin: 35px;

`;

const RecipeTitle = styled.Text`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin-top: 35px;
  margin: 35px;
`;

const ListSteps = styled.Text`
  line-height: 25px;
  text-align: left;
`;

const CardView = styled.View`
  width: 100%;
  z-index: 1;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 1000px;
  margin: 5px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  border: 0.75px solid #ffdf7f;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  z-index: 0;
`;

const TimeView = styled(View)`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 100px;
  tex
`;

const StyledDataTable = styled(DataTable)`
  display: flex;
  justify-content: center;
  right: 15px;
  align-content: center;
  color: black;
  text-align: center;
`;

const IngredientsView = styled(View)`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 200px;
  border-bottom-color: lightgrey;
  border-bottom-width: 0.5px;
  padding-bottom: 30px;
`;

const InstructionsView = styled(View)`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 550px;
  margin-top: 35px;
`;

/* const StyledSectionList = styled(SectionList)`
  padding-top: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(247, 247, 247, 1);
`; */

export default Recepie;
