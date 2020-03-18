import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Divider } from "react-native-elements";
import styled from "styled-components/native";
import VeggieIcons from "./lib/VeggieIcons";
import { PacmanIndicator } from "react-native-indicators";

const localUrl = "http://192.168.1.8:8080/veggies";
//exp://:19000

//exp://172.20.10.7:19004

const SearchPage = () => {
  const [veggies, setVeggies] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <Container>
      <Header> Sustian recipe app </Header>
      <Subtext> What vegetable's do you have in your fridge?</Subtext>
      <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
      {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
      {!loading && <VeggieIcons veggies={veggies} />}
      <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
      {/* <Button title="Search" onPress={() => history.push("/RecepieIndex")} /> */}
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  top: 20px;
  margin: 12px;
`;

const Subtext = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  line-height: 35px;
  margin-bottom: 20px;
  color: red;
`;
const Header = styled.Text`
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export default SearchPage;
