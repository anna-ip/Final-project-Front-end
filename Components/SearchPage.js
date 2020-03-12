import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button } from "react-native";
import styled from "styled-components/native";

const SearchPage = ({ history }) => {
  return (
    <View>
      <Title>Welcome</Title>

      <VeggieIcons />

      <Button title="Search" onPress={() => history.push("/RecepieIndex")} />
    </View>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.Text`
  color: black;
  text-align: center;
`;

export default SearchPage;
