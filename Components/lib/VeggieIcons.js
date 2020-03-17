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

const veggies = [
  {
    month: [6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e2b",
    name: "Broccoli",
    carbonprint: 0.56,
    __v: 0
  },
  {
    month: [5, 6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e2c",
    name: "Cauliflower",
    carbonprint: 0.43,
    __v: 0
  },
  {
    month: [7, 8],
    _id: "5e5d08acf901cfd65b8f5e2d",
    name: "Pepper",
    carbonprint: 0.64,
    __v: 0
  },
  {
    month: [7, 8],
    _id: "5e5d08acf901cfd65b8f5e2e",
    name: "Cabbage",
    carbonprint: 0.4,
    __v: 0
  },
  {
    month: [7, 8],
    _id: "5e5d08acf901cfd65b8f5e2f",
    name: "Mushrooms",
    carbonprint: 1.31,
    __v: 0
  },
  {
    month: [8],
    _id: "5e5d08acf901cfd65b8f5e30",
    name: "Aubergine",
    carbonprint: 0.29,
    __v: 0
  },
  {
    month: [5, 6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e32",
    name: "Potato",
    carbonprint: 0.4,
    __v: 0
  },
  {
    month: [7, 8],
    _id: "5e5d08acf901cfd65b8f5e33",
    name: "Cucumber",
    carbonprint: 0.45,
    __v: 0
  },
  {
    month: [5, 6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e34",
    name: "Carrot",
    carbonprint: 0.27,
    __v: 0
  },
  {
    month: [8],
    _id: "5e5d08acf901cfd65b8f5e35",
    name: "Pumpkin",
    carbonprint: 0.21,
    __v: 0
  },
  {
    month: [5, 6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e36",
    name: "Beetroot",
    carbonprint: 0.32,
    __v: 0
  },
  {
    month: [5, 6],
    _id: "5e5d08acf901cfd65b8f5e37",
    name: "Asparagus",
    carbonprint: 0.58,
    __v: 0
  },
  {
    month: [5, 6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e38",
    name: "Spinach",
    carbonprint: 0.29,
    __v: 0
  },
  {
    month: [6, 7, 8],
    _id: "5e5d08acf901cfd65b8f5e3a",
    name: "Tomato",
    carbonprint: 0.77,
    __v: 0
  }
];

const VeggieIcons = ({ history }) => {
  return (
    <Container>
      {/* ScrollView row 1 */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <IconContainer>
          {/* Asparagus */}


          <Button key={veggies._id}
            onPress={() =>

              history.push("/RecepieIndex", {

                name: "Asparagus",
                search: '?Asparagus'
              })
            }>
            <Icon
              source={require("../assets/VeggiesIcons/Asparagus.png")}
              resizeMode="contain"
            />
          </Button>

          {/* Beet */}
          <Button id={"5e5d08acf901cfd65b8f5e36"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Beet",
              search: '?Beet'
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Beet.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Broccoli */}
          <Button id={"5e5d08acf901cfd65b8f5e2b"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Broccoli",
              search: '?Broccoli'
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Broccoli.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Cabage */}
          <Button id={"5e5d08acf901cfd65b8f5e2e"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Cabage",
              search: '?Cabage'
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Cabage.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Cauliflower */}
          <Button id={"5e5d08acf901cfd65b8f5e2c"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Cauliflower",
              search: '?Cauliflower'
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Cauliflower.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Spininch */}
          <Button id={"5e5d08acf901cfd65b8f5e38"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Spininch",
              search: "?Spininch"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Spinich.png")}
              resizeMode="contain"
            />
          </Button>
        </IconContainer>
      </ScrollView>
      {/* ScrollView row 2 */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <IconContainer>
          {/* Cucumber */}
          <Button id={"5e5d08acf901cfd65b8f5e33"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Cucumber",
              search: "?Cucumber"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Cucumber.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Eggplant */}
          <Button id={"5e5d08acf901cfd65b8f5e30"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Eggplant",
              search: "?Eggplant"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Eggplant.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Mushroom */}
          <Button id={"5e5d08acf901cfd65b8f5e2f"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Mushroom",
              search: "?Mushroom"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Mushroom.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Pepper */}
          <Button id={"5e5d08acf901cfd65b8f5e2d"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Pepper",
              search: "?Pepper"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Pepper.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Pumpkin */}
          <Button id={"5e5d08acf901cfd65b8f5e35"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Pumpkin",
              search: "?Pumpkin"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Pumkin.png")}
              resizeMode="contain"
            />
          </Button>
          {/* Tomato */}
          <Button id={"5e5d08acf901cfd65b8f5e3a"} key={veggies._id}
            onPress={() => history.push("/RecepieIndex", {

              name: "Tomato",
              search: "?Tomato"
            })}>
            <Icon
              source={require("../assets/VeggiesIcons/Tomato.png")}
              resizeMode="contain"
            />
          </Button>
        </IconContainer>
      </ScrollView>
    </Container >
  );
};



const Icon = styled.Image`
  width: 60px;
  height: 60px;
  padding: 20px;
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
`;

const StyledButton = styled.TouchableOpacity`
  border: 3px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  border: solid;
  padding: 10px;
  /* shadow-color: #303838;
  shadow-radius: 10px; */
  border-radius: 60px;
  /* shadow-opacity: 0.35px; */
  margin: 5px;
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
  /* shadow-color: #303838;
  shadow-radius: 10px; */
  border-radius: 60px;
  /* shadow-opacity: 0.35px; */
  margin: 5px;
`;

export default withRouter(VeggieIcons);
