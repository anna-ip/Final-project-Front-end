import React, { useState } from 'react'
import { Text, Button, View, ScrollView, SafeAreaView, SectionList, StyleSheet, ImageBackground, FlatList, Title } from 'react-native'
import { Card, Paragraph, DataTable } from 'react-native-paper';

import { List, ListItem } from 'react-native-elements';
import SeasonalView from "./SeasonalView"
import ProgressCircle from "./ProgressCircle"

import InstructionsList from "./lib/InstuctionsList"
import BackButton from "./lib/BackButton"
import styled from "styled-components";
import { PacmanIndicator } from "react-native-indicators";


const Recepie = ({ history, location }) => {
    // const [ingredient, setIngredient] = useState(location.state.recipe)
    // console.log("ingredient", location.state.veggie)
    const [loading, setLoading] = useState(false);

    const { recipe, veggie } = location.state // destructurins recipe and veggie from location state

    console.log('in recipe screen we have recipe:', recipe)
    console.log('in recipe screen we have VEGGIE:', veggie)



    return (
        <SafeAreaView>
            <StyledView>
                {/* <Text>{JSON.stringify(location.state)}</Text> */}
                {/* <Text >{`${ingredient.title}`}</Text> */}
                <Scroll>

                    <View>
                        <ImageContainer >
                            <CardView>
                                {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
                                <StyledImageCard>


                                    <Card.Content key={recipe.id}>
                                        <StyledImageBackground source={{ uri: recipe.image }}>
                                            {/* accessibilityLabel loadingIndicatorSource */}
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
                        <View>
                            <RecepieCardContainer>

                                <CardContainer>
                                    <CardView>
                                        <StyledCard>
                                            <Card.Content>
                                                <CardTitle>{recipe.title}</CardTitle>
                                                {/* <CardTitle>{`${recipe.title}`}</CardTitle> */}
                                                <TimeView>
                                                    <StyledParagraph> Time component font: Poppins</StyledParagraph>
                                                    <StyledDataTable>
                                                        <DataTable.Header>
                                                            <DataTable.Title>Prep time: </DataTable.Title>
                                                            <DataTable.Title numeric> Cook time: </DataTable.Title>
                                                            <DataTable.Title numeric> Total time: </DataTable.Title>
                                                        </DataTable.Header>

                                                        <DataTable.Row>
                                                            <DataTable.Cell numeric>{`${recipe.preparationMinutes}`} min</DataTable.Cell>
                                                            <DataTable.Cell numeric>{`${recipe.cookingMinutes}`} min</DataTable.Cell>
                                                            <DataTable.Cell numeric>{`${recipe.readyInMinutes}`} min</DataTable.Cell>
                                                        </DataTable.Row>
                                                    </StyledDataTable>
                                                </TimeView>

                                                <IngredientsView>
                                                    <RecipeTitle>Ingredients:</RecipeTitle>
                                                    {recipe.missedIngredients.map(item => (
                                                        <View>
                                                            <Text key={item.id}>{item.originalString}</Text>
                                                        </View>
                                                    ))}
                                                </IngredientsView>

                                                <InstructionsView>
                                                    <RecipeTitle>Instructions:</RecipeTitle>
                                                    {recipe.analyzedInstructions.map((item, i) => (

                                                        <View key={i} >
                                                            {item.steps.map((list, ind) =>
                                                                <Text key={ind}>{list.step}</Text>
                                                            )}
                                                        </View>
                                                    ))}
                                                </InstructionsView>

                                            </Card.Content>
                                        </StyledCard>
                                    </CardView>
                                </CardContainer>
                            </RecepieCardContainer>
                        </View>
                        <ButtonContainer >
                            <BackButton />
                        </ButtonContainer>
                    </View>
                </Scroll>

            </StyledView >
        </SafeAreaView >
    )

}



const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    width: 100%;
   
    margin-top: 100px;  
`;

const Scroll = styled(ScrollView)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 330px;
    background-color: pink;
    margin-bottom: 15px;
`;

const ImageContainer = styled.View`
    display: flex;
    flex-direction: column;
`
const StyledImageCard = styled(Card)`
    display: flex;
    flex-direction: column;
    background-color: #F0F0F0;
    height: 250px;
    margin: 5px;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    border: 0.75px solid #FFDF7F;
    /* background: linear-gradient(180deg, #FFFFFF, 0%, rgba(255, 255, 255, 0), 100%); */
    /* background-color: black; */
    /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2); */
    z-index: 0;
`;

//maybe take the box-sahdow away!!!
const StyledImageBackground = styled(ImageBackground)`
    width: 110%;
    height: 200px;
    box-shadow: 10px 5px 5px black; 
    /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2); */
    /* background-position: center; */
    border-radius: 8px;
    z-index:1;
    position: absolute;
    top: 10px;
    bottom: 0%;
    /* linear-gradient: 180deg, #FFFFFF, 0%, rgba(255, 255, 255, 0), 100%; */
`;

//font-family: Eczar;
const StyledTitle = styled.Text`
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
    position: absolute;
    left: 2%;
    right: 0%;
    top: 110px;
    z-index:2;
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

const CardTitle = styled.Text`
    font-size: 20px;
    text-transform: capitalize;
`

const CardView = styled.View`
    width: 100%;
    z-index: 1;
`;
const ButtonContainer = styled.View`
    top: 180px;
    padding: 15px;   
`;

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    background-color: #F0F0F0;
    height: 1000px;
    margin: 5px;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    border: 0.75px solid #FFDF7F;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    z-index: 0;
`;

// const StyledText = styled(Text)`
//     color: #FFFFFF;
//     position: absolute;
//     left: 0%;
//     right: 0%;
//     top: 155.3px;
//     z-index: 3;
// `;

//font-family: Poppins;
const StyledParagraph = styled(Paragraph)`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
`;

const TimeView = styled(View)`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 100px;
`;

const StyledDataTable = styled(DataTable)`
    display: flex;
    justify-content: center;
    align-content: center;
    color: black;
`;

const IngredientsView = styled(View)`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 250px;
    border-bottom-color: lightgrey;
    border-bottom-width: 0.5px;
    padding-bottom: 30px;
    
`;

//font-family: Poppins;
const RecipeTitle = styled.Text`
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    /* padding: 10px; */
    margin-top: 20px;
`;

const InstructionsView = styled(View)`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 550px;
  
`;

const StyledSectionList = styled(SectionList)`
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(247,247,247,1.0);

`;

export default Recepie