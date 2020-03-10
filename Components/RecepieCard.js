import React from "react";
import { ImageBackground, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import TimeComponent from "./TimeComponent";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

const RecepieCard = () => {
  const hey = useSelector(store => store.food.hey);
  console.log(hey);

  return (
    <StyledCard>
      <Card.Content>
        <StyledImageBackground source={require('../assets/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg')}>
          <StyledTitle>"Here goes the title for the recepie {}"</StyledTitle>
          <StyledText>"Card Subtitle{}"</StyledText>
        </StyledImageBackground>
        <TimeView>
          <StyledParagraph> Time component font: Poppins
                </StyledParagraph>
          <TimeComponent />
        </TimeView>
      </Card.Content>
    </StyledCard>
  );
};

export default RecepieCard;

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

const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 200px;
  border-radius: 30;
  z-index: 1;
  position: absolute;
  left: 8%;
  right: 0%;
  top: 60px;
  bottom: 0%;
`;

const StyledTitle = styled(Title)`
  color: #ffffff;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 50.3%;
  bottom: 3.28%;
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
