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
  Tomato: require("../assets/VeggiesIcons/Tomato.png")
};

const VeggieIcons = ({ history, veggies }) => {

  //console.log("AspargusBtn", veggies)


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
              <Icon source={icons[item.name]} resizeMode="contain" />
            </Button>
          ))}
        </IconContainer>

      </ScrollView>
    </Container>

    // <Button
    //   key={veggies._id}
    //   //value={name}
    //   onPress={() =>
    //     history.push("/RecepieIndex", {
    //       name: "Asparagus",
    //       search: "?Asparagus",
    //       veggies: veggies,
    //     })

    //   }

    // >
    //   <Icon
    //     source={require("../assets/VeggiesIcons/Asparagus.png")}
    //     resizeMode="contain"
    //   />
    // </Button>
    // {/* Beet */}
    // <Button
    //   id={"5e5d08acf901cfd65b8f5e36"}
    //   key={veggies._id}
    //   onPress={() =>
    //     history.push("/RecepieIndex", {
    //       name: "Beet",
    //       search: "?Beet"
    //     })
    //   }
    // >
    //   <Icon
    //     source={require("../assets/VeggiesIcons/Beet.png")}
    //     resizeMode="contain"
    //   />
    // </Button>
    // {/* Broccoli */}
    // <Button
    //   id={"5e5d08acf901cfd65b8f5e2b"}
    //   key={veggies._id}
    //   onPress={() =>
    //     history.push("/RecepieIndex", {
    //       name: "Broccoli",
    //       search: "?Broccoli"
    //     })
    //   }
    // >
    //   <Icon
    //     source={require("../assets/VeggiesIcons/Broccoli.png")}
    //     resizeMode="contain"
    //   />
    // </Button>
    // {/* Cabage */}
    // <Button
    //   id={"5e5d08acf901cfd65b8f5e2e"}
    //   key={veggies._id}
    //   onPress={() =>
    //     history.push("/RecepieIndex", {
    //       name: "Cabage",
    //       search: "?Cabage"
    //     })
    //   }
    // >
    //   <Icon
    //     source={require("../assets/VeggiesIcons/Cabage.png")}
    //     resizeMode="contain"
    //   />
    // </Button>
    // {/* Cauliflower */}
    // <Button
    //   id={"5e5d08acf901cfd65b8f5e2c"}
    //   key={veggies._id}
    //   onPress={() =>
    //     history.push("/RecepieIndex", {
    //       name: "Cauliflower",
    //       search: "?Cauliflower"
    //     })
    //   }
    // >
    //   <Icon
    //     source={require("../assets/VeggiesIcons/Cauliflower.png")}
    //     resizeMode="contain"
    //   />
    // </Button>
    // {/* Spininch */}
    // <Button
    //   id={"5e5d08acf901cfd65b8f5e38"}
    //   key={veggies._id}
    //   onPress={() =>
    //     history.push("/RecepieIndex", {
    //       name: "Spininch",
    //       search: "?Spininch"
    //     })
    //   }
    // >
    //   <Icon
    //     source={require("../assets/VeggiesIcons/Spinich.png")}
    //     resizeMode="contain"
    //   />
    // </Button>

    // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    //   <IconContainer>
    //     {/* Cucumber */}
    //     <Button
    //       id={"5e5d08acf901cfd65b8f5e33"}
    //       key={veggies._id}
    //       onPress={() =>
    //         history.push("/RecepieIndex", {
    //           name: "Cucumber",
    //           search: "?Cucumber"
    //         })
    //       }
    //     >
    //       <Icon
    //         source={require("../assets/VeggiesIcons/Cucumber.png")}
    //         resizeMode="contain"
    //       />
    //     </Button>
    //     {/* Eggplant */}
    //     <Button
    //       id={"5e5d08acf901cfd65b8f5e30"}
    //       key={veggies._id}
    //       onPress={() =>
    //         history.push("/RecepieIndex", {
    //           name: "Eggplant",
    //           search: "?Eggplant"
    //         })
    //       }
    //     >
    //       <Icon
    //         source={require("../assets/VeggiesIcons/Eggplant.png")}
    //         resizeMode="contain"
    //       />
    //     </Button>
    //     {/* Mushroom */}
    //     <Button
    //       id={"5e5d08acf901cfd65b8f5e2f"}
    //       key={veggies._id}
    //       onPress={() =>
    //         history.push("/RecepieIndex", {
    //           name: "Mushroom",
    //           search: "?Mushroom"
    //         })
    //       }
    //     >
    //       <Icon
    //         source={require("../assets/VeggiesIcons/Mushroom.png")}
    //         resizeMode="contain"
    //       />
    //     </Button>
    //     {/* Pepper */}
    //     <Button
    //       id={"5e5d08acf901cfd65b8f5e2d"}
    //       key={veggies._id}
    //       onPress={() =>
    //         history.push("/RecepieIndex", {
    //           name: "Pepper",
    //           search: "?Pepper"
    //         })
    //       }
    //     >
    //       <Icon
    //         source={require("../assets/VeggiesIcons/Pepper.png")}
    //         resizeMode="contain"
    //       />
    //     </Button>
    //     {/* Pumpkin */}
    //     <Button
    //       id={"5e5d08acf901cfd65b8f5e35"}
    //       key={veggies._id}
    //       onPress={() =>
    //         history.push("/RecepieIndex", {
    //           name: "Pumpkin",
    //           search: "?Pumpkin"
    //         })
    //       }
    //     >
    //       <Icon
    //         source={require("../assets/VeggiesIcons/Pumkin.png")}
    //         resizeMode="contain"
    //       />
    //     </Button>
    //     {/* Tomato */}
    //     <Button
    //       id={"5e5d08acf901cfd65b8f5e3a"}
    //       key={veggies._id}
    //       onPress={() =>
    //         history.push("/RecepieIndex", {
    //           name: "Tomato",
    //           search: "?Tomato"
    //         })
    //       }
    //     >
    //       <Icon
    //         source={require("../assets/VeggiesIcons/Tomato.png")}
    //         resizeMode="contain"
    //       />
    //     </Button>
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
