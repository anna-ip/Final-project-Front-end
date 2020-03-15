import React from "react";
import { ImageBackground, Text, ScrollView, View, SafeAreaView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import TimeComponent from "./TimeComponent"
import IngredientsList from './lib/IngredientsList'
import InstructionsList from "./lib/InstuctionsList"
import styled from 'styled-components'


const RecipeC = ({ recipe }) => {

    // constructor = (props) => {
    //     super(props);
    //     this.state = { enableScrollViewScroll: true };
    // }

    return (

        <SafeAreaView>
            {/* <ScrollView> */}
            <StyledCard>
                <Card.Content>
                    <StyledImageBackground source={require('../Components/assets/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg')}>
                        <StyledTitle>{recipe.title}</StyledTitle>
                        {/* <StyledText>"Card Subtitle{}"</StyledText> */}
                    </StyledImageBackground>



                    <TimeView>
                        <StyledParagraph> Time component font: Poppins</StyledParagraph>
                        {/* <TimeComponent recipe={recipe} /> */}
                    </TimeView>

                    <IngredientsView
                    // onStartShouldSetResponderCapture={() => {
                    //     this.setState({ enableScrollViewScroll: false });
                    //     if (this.refs.myList.scrollProperties.offset === 0 && this.state.enableScrollViewScroll === false) {
                    //         this.setState({ enableScrollViewScroll: true });
                    //     }
                    // }}
                    >
                        <IngredientsList />
                    </IngredientsView>

                    <InstructionsView>
                        <InstructionsList />
                    </InstructionsView>

                </Card.Content>
            </StyledCard>
            {/* </ScrollView> */}

        </SafeAreaView>
    )
};

export default RecipeC;


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
    color: #FFFFFF;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 110px;
    z-index:2;
`;

const StyledText = styled(Text)`
    color: #FFFFFF;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 155.3px;
    z-index: 3;
`;

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
`