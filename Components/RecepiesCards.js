import React from "react";
import { ImageBackground, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import TimeComponent from "./TimeComponent";
import styled from "styled-components/native";


const RecepiesCards = ({ recipe }) => {

  return (
    <StyledCard>
      <Card.Content>
        {/* <OpacityContainer> */}
        <StyledImageBackground source={{ uri: recipe.image }}>
          <StyledTitle>{recipe.title}</StyledTitle>
        </StyledImageBackground>
        {/* </OpacityContainer> */}
        <TimeView>
          <StyledParagraph> Time component font: Poppins
          </StyledParagraph>
          <TimeComponent recipe={recipe} />
        </TimeView>
      </Card.Content>
    </StyledCard>
  );
};



const StyledCard = styled(Card)`
  background-color: #ffffff;
  width: 240px;
  height: 366px;
  border-radius: 8px;
  margin-left: 15px;
  border: 0.75px solid #ffdf7f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 0;
`;

// const OpacityContainer = styled.View`
//  background-color: black;
//  z-index: 2;
// `

const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 200px;
  border-radius: 30;
  opacity: 0.5;
  z-index: 1;
  position: absolute;
  left: 8%;
  right: 0%;
  top: 60px;
  bottom: 0%;
 
`;

const StyledTitle = styled(Title)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  /* border: 1px solid #7EDABE; */
  position: absolute;
  left: 2%;
  right: 0%;
  top: 75%;
  bottom: 3.28%;
  z-index: 3;
`;

const StyledText = styled(Text)`
  color: #ffffff;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 85.3%;
  bottom: 3.28%;
`;

const TimeView = styled.View`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 255px;
  bottom: 0%;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
`;

export default RecepiesCards;