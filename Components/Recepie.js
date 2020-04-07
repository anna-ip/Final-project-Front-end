import React, { useState } from "react";
import { View, ScrollView, ImageBackground, SafeAreaView } from "react-native";
import { Card, DataTable } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import SeasonalView from "./SeasonalView";
import ProgressCircle from "./ProgressCircle";
import BackButton from "./lib/BackButton";
import styled from "styled-components";
import { PacmanIndicator } from "react-native-indicators";

const Recepie = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

  const { recipe, veggie } = location.state;

  return (
    <Container>
      <ScrollView>
        <ImageContainer>
          <CardView>
            <SafeAreaView>
              {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
            </SafeAreaView>
            <StyledImageCard>
              <Card.Content key={recipe.id}>
                <StyledImageBackground source={{ uri: recipe.image }}>
                  {!loading && <StyledTitle>{recipe.title}</StyledTitle>}
                </StyledImageBackground>
              </Card.Content>
            </StyledImageCard>
          </CardView>
        </ImageContainer>
        <ProgressCircle veggie={veggie} />
        <SeasonalView veggie={veggie} />

        <CardView>
          <StyledCard>
            <CardTitle>{recipe.title}</CardTitle>
            <CreditsText>Author:{recipe.creditsText}</CreditsText>
            <View>
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
            </View>

            <IngredientsView>
              <RecipeTitleTop>Ingredients:</RecipeTitleTop>
              {recipe.missedIngredients.map(item => (
                <View key={item.name}>
                  <CheckBox
                    key={item.id}
                    title={item.originalString}
                    checked={true}
                    size={30}
                    checkedColor="green"
                  />
                </View>
              ))}
            </IngredientsView>

            <InstructionsView>
              <RecipeTitle>Instructions:</RecipeTitle>
              {recipe.analyzedInstructions.map((item, i) => (
                <View key={i}>
                  {item.steps.map((list, ind) => (
                    <ListSteps key={ind}>{list.step}</ListSteps>
                  ))}
                </View>
              ))}
              <BackButton />
            </InstructionsView>
          </StyledCard>
        </CardView>
      </ScrollView>
    </Container>
  );
};

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #f7fcfc;
`;

const ImageContainer = styled.View`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const StyledImageCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 250px;
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
  border-radius: 8px;
  z-index: 1;
  align-content: center;
  bottom: 0%;
`;

const StyledTitle = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 35px;
  color: #000000;
  z-index: 2;
`;

const CreditsText = styled.Text`
  text-align: left;
  font-weight: 600;
  font-style: italic;
  font-size: 15px;
  padding: 10px;
  z-index: 2;
`;

const CardTitle = styled.Text`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin: 20px;
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
  margin: 35px;
`;

const ListSteps = styled.Text`
  line-height: 25px;
  text-align: left;
`;

const CardView = styled.View`
  margin-top: 20px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  margin: 5px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  border: 0.75px solid #ffdf7f;
  z-index: 0;
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
  border-bottom-color: lightgrey;
  border-bottom-width: 0.5px;
  padding-bottom: 30px;
`;

const InstructionsView = styled(View)`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export default Recepie;
