import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import TimeComponent from "./TimeComponent";
import styled from "styled-components/native";


const RecepiesCards = ({ recipe }) => {

  return (
    <StyledCard>
      <Card.Content>

        <StyledImageBackground
          blurRadius={0.5}
          source={{ uri: recipe.image }}
        >
          <Opacity>
            <StyledTitle>{recipe.title}</StyledTitle>
          </Opacity>
        </StyledImageBackground>

        <TimeView>
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

const OpacityContainer = styled.View`
  /* background-color:rgba(255,0,0,0.5); */
 background-color: black;
 z-index: 2;
`

const StyledImageBackground = styled(ImageBackground)`
  width: 200px;
  height: 200px;
  /* border-radius: 30; */
  border-top-left-radius: 30;
  opacity: 0.9;
  z-index: 1;
  position: absolute;
  left: 8%;
  right: 0%;
  top: 50px;
  bottom: 0%;
  background-color: black;
`;


const Opacity = styled.View`
  background-color: black;
  opacity: 0.5;
  z-index: 2;
`;
//color: #ffffff;
// position: absolute;
// left: 0;
// right: 0;
//  top: 0;
// bottom: 3%;
//padding: 5px;
// background-color: black;
// opacity: 0.3;
const StyledTitle = styled(Title)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  height: 200px;
  font-family: TrebuchetMS-Bold;
  font-weight: 700;
  font-size: 33px;
  color: black;
  text-transform: capitalize;
  position: absolute;
  left: 2px;
  right: 0;
  top: 20px;
  bottom: 3%;
  z-index: 5;
`;

const TimeView = styled.View`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 295px;
  bottom: 0%;
`;

// const StyledParagraph = styled(Paragraph)`
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 18px;
// `;

export default RecepiesCards;