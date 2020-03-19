import React from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import styled from "styled-components";
import { withRouter } from "react-router-native";

const icons = {
  Asparagus: require("../assets/VeggiesIcons/Asparagus.png"),
  Beetroot: require("../assets/VeggiesIcons/Beet.png"),
  Broccoli: require("../assets/VeggiesIcons/Broccoli.png"),
  Cabbage: require("../assets/VeggiesIcons/Cabage.png"),
  Carrot: require("../assets/VeggiesIcons/Carrot.png"),
  Cauliflower: require("../assets/VeggiesIcons/Cauliflower.png"),
  Cucumber: require("../assets/VeggiesIcons/Cucumber.png"),
  Aubergine: require("../assets/VeggiesIcons/Eggplant.png"),
  Mushrooms: require("../assets/VeggiesIcons/Mushroom.png"),
  Pepper: require("../assets/VeggiesIcons/Pepper.png"),
  Potato: require("../assets/VeggiesIcons/Potato.png"),
  Pumpkin: require("../assets/VeggiesIcons/Pumkin.png"),
  Spinach: require("../assets/VeggiesIcons/Spinich.png"),
  Tomato: require("../assets/VeggiesIcons/Tomato.png"),
}


const VeggieIcons = ({ history, veggies }) => {
  // console.log("AspargusBtn", veggies)

  return (
    <Container>
      <StyledScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <IconContainer>
          {veggies.map(item => (
            <Button
              key={item._id}
              onPress={() => history.push("/RecepieIndex", { veggie: item })}
            >
              <Icon
                source={icons[item.name]}
                resizeMode="contain"
              />
            </Button>
          ))}
        </IconContainer>
      </StyledScrollView>
    </Container >

  );
};

const Icon = styled.Image`
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const Container = styled.SafeAreaView`
  height: 300px;
  margin: 5px;
`;

//this makes the icons start 10px into the scrollview
const StyledScrollView = styled.ScrollView`
  padding-left: 10px;
`
// justify-content: space-between;
const IconContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 700px;
`;

const Button = styled.TouchableOpacity`
  border: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  padding: 10px;
  border: solid;
  border-radius: 60px;
  margin-right: 8px;
  margin-bottom: 50px;
`;

export default withRouter(VeggieIcons);
