import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Divider } from "react-native-elements";

const SearchPage = ({ history }) => {
  return (
    <Container>
      <Title>Sustain</Title>
      <Header>Seasonal vegetables, what do you have in your fridge</Header>
      <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
      <VeggieIcons />
      <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
      <Button title="Search" onPress={() => history.push("/RecepieIndex")} />
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  margin: 12px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 64px;
`;
const Header = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export default SearchPage;
