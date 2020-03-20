import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Divider } from "react-native-elements";
import styled from "styled-components/native";
import VeggieIcons from "./lib/VeggieIcons";
import { PacmanIndicator } from "react-native-indicators";


const localUrl = "http://192.168.1.8:8080/veggies";


// import * as Font from 'expo-font';
// // import { AppLoading } from 'expo';
// // import { startAsync } from "expo/build/AR";

// // const fetchFonts = () => {
// //     return Font.loadAsync({
// //         "Eczar": {
// //             uri: require("./assets/Fonts/Eczar-SemiBold")
// //             // fontDisplay: FontDisplay.FALLBACK,
// //         }
// //         // 'Eczar-regular': require('./assets/Fonts/Eczar-Regular.ttf')
// //     });
// // };
// componentDidMount() {
//     Font.loadAsync({
//       'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.tff'),
//     });
//   }

const SearchPage = () => {

  const [veggies, setVeggies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  //console.log("searchPage", veggies);

  // THIS WORKS ✅
  // fetching the veggies from DB here.
  // passing them along to VeggieIcons component 👇
  useEffect(() => {
    setLoading(true);
    fetch(localUrl)
      .then(res => res.json())
      .then(json => {
        setVeggies(json);
        setLoading(false);
      });
  }, []);

  // if (!dataLoaded) {
  //     return (
  //         <AppLoading
  //             startAsync={fetchFonts}
  //             onFinish={() => setDataLoaded(true)}
  //         />
  //     )
  // }

  return (
    <Container>
      <HeaderView>
        <Header>Seasonal vegetables, what do you have in your fridge</Header>
      </HeaderView>
      <Section>
        <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
        {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
        {!loading && <VeggieIcons veggies={veggies} />}
        <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
      </Section>
      {/* <Button title="Search" onPress={() => history.push("/RecepieIndex")} /> */}
    </Container>
  );

};

//top: 20px;
//padding: 12px; 
const Container = styled(SafeAreaView)`

  margin: 12px;

`;


// height: auto;
//width: 100%;
// position: absolute;
//top: 2px;
const HeaderView = styled.View`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 150px;
  padding: 10px;

`;

// margin-bottom: 20px;
//font-family: Baskerville-Bold;
const Header = styled.Text`

  text-align: center;
  font-weight: 900;
  font-size: 30px;
  line-height: 25px;
  padding-top: 30px;

`;

// position: absolute;
//bottom: 20px;

const Section = styled.View`
  height: 300px;
`;


export default SearchPage;
