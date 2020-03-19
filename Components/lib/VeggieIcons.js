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
  console.log("AspargusBtn", veggies)
  //const[veggies setVeggies] = useState()
  //onpress function with setVeggies
  // onPress={() =>
  //   history.push("/RecepieIndex", {
  //     name: `${name}`,
  //     search: `?`+`${name}`,
  //     veggies: veggies,
  //   })
  //map through btns to match information and pass only one veggie
  return (
    <Container>
      <ScrollView horizontal={true}
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
      </ScrollView>
    </Container >



    // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    //   
    //     
    //  
    //     
    //     
    //   
    //   </IconContainer>
    // </ScrollView>

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

const IconContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40px;
  margin-top: 20px;
  margin-left: 5px;

  right: 20px;
`;

const Button = styled.TouchableOpacity`
  border: 10px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  border: solid;
  padding: 10px;
  shadow-color: #303838;
  shadow-radius: 15px;
  border-radius: 60px;
  margin: 5px;

`;

export default withRouter(VeggieIcons);
