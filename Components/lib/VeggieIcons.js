import * as React from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import styled from "styled-components";

const veggieIcons = () => {
  return (
    <Container>
      {/* ScrollView row 1 */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <IconContainer>
          {/* Asparagus */}
          <Button></Button>
          {/* Beet */}
          <Button></Button>
          {/* Broccoli */}
          <Button></Button>
          {/* Cabage */}
          <Button></Button>
          {/* Cauliflower */}
          <Button></Button>
          {/* Spininch */}
          <Button></Button>
        </IconContainer>
      </ScrollView>
      {/* ScrollView row 2 */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <IconContainer>
          {/* Cucumber */}
          <Button></Button>
          {/* Eggplant */}
          <Button></Button>
          {/* Mushroom */}
          <Button></Button>
          {/* Pepper */}
          <Button></Button>
          {/* Pumpkin */}
          <Button></Button>
          {/* Tomato */}
          <Button></Button>
        </IconContainer>
      </ScrollView>
    </Container>
  );
};

export default veggieIcons;

// const Icon = styled.Image`
//   width: 60px;
//   height: 60px;
//   padding: 20px;
// `

const Container = styled.SafeAreaView`
  height: 300px;
  margin: 20px;
`;

const IconContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40px;
`;

const Button = styled.TouchableOpacity`
  border: 3px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  border: solid;
  padding: 10px;
  shadow-color: #303838;
  shadow-radius: 10px;
  border-radius: 60px;
  shadow-opacity: 0.35px;
  margin: 5px;
`;

const ButtonIcons = styled.View``;
