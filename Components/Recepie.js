import React, { useState } from 'react'
import { Text, Button, View, ScrollView, SafeAreaView, SectionList, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import { List, ListItem } from 'react-native-elements';
import SeasonalView from "./SeasonalView"
import ProgressCircle from "./ProgressCircle"
import InstructionsList from "./lib/InstuctionsList"
import BackButton from "./lib/BackButton"
import styled from "styled-components";


const Recepie = ({ hitstory, location }) => {
    const [ingredient, setIngredient] = useState(location.state)
    const [ingridentList, setIngredientList] = useState([
        {
            title: `${ingredient.title}`,
            ingredientsList: `${ingredient.missedIngredients}`
            // listName: `${ingredient.analyzedInstructions.steps.ingredients.name}`,
            // listAmount: `${ingredient.missedIngredients.amount}`,
            // listUnit: `${ingredient.missedIngredients.unit}`,

        }
    ])


    return (
        <SafeAreaView>
            <StyledView

            >

                <Text>{`${ingredient.title}`}</Text>
                <Scroll >


                    <ImageContainer>
                        <CardView>
                            <StyledImageCard>
                                <Card.Content>
                                    <StyledImageBackground source={{ uri: ingredient.image }}>
                                        {/* <StyledImageBackground source={require('../Components/assets/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg')}> */}
                                        <StyledTitle>{`${ingredient.title}`}</StyledTitle>
                                        {/* <Text>{recipe.title}</Text> */}
                                    </StyledImageBackground>
                                </Card.Content>
                            </StyledImageCard>
                        </CardView>
                    </ImageContainer>










                    <ProgressContainer>
                        <ProgressCircle />
                    </ProgressContainer>

                    {/* <Text>{JSON.stringify(location.state)}</Text> */}

                    <SeasonConatiner>
                        <SeasonalView location={this.state} />
                    </SeasonConatiner>



                    <RecepieCardContainer>
                        <Text>{`${ingredient.title}`}</Text>
                        <CardContainer>
                            <CardView>
                                <StyledCard>
                                    <Card.Content>

                                        <TimeView>
                                            <StyledParagraph> Time component font: Poppins</StyledParagraph>
                                            {/* <TimeComponent recipe={recipe} /> */}
                                        </TimeView>

                                        <IngredientsView>
                                            < FlatList
                                                data={ingridentList}
                                                renderItem={({ item }) =>
                                                    <Text>{item.title}</Text>}
                                            />
                                        </IngredientsView>

                                        <InstructionsView>
                                            <InstructionsList />
                                        </InstructionsView>

                                    </Card.Content>
                                </StyledCard>
                            </CardView>
                        </CardContainer>

                    </RecepieCardContainer>

                    <ButtonContainer >
                        <BackButton />
                    </ButtonContainer>
                </Scroll>

            </StyledView >
        </SafeAreaView>
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
    margin-bottom: 5px;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 0;
`;

const StyledImageBackground = styled(ImageBackground)`
    width: 110%;
    height: 200px;
    /* background-position: center; */
    border-radius: 8px;
    z-index:1;
    position: absolute;
    top: 10px;
    bottom: 0%;
    /* linear-gradient: 180deg, #FFFFFF, 0%, rgba(255, 255, 255, 0), 100%; */
`;

//font-family: Eczar;
const StyledTitle = styled(Title)`
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
    position: absolute;
    left: 0%;
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
    height: 800px;
    margin: 5px;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    border: 0.75px solid #FFDF7F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    top: 230px;
`;

const IngredientsView = styled(View)`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 340px;
`;

const InstructionsView = styled(View)`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 710px;
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