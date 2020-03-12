import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { Line } from "react-native-svg";

const SearchPage = ({ history }) => {
  return (
    <View>
      <Title>Welcome</Title>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginLeft: 5,
          marginRight: 5
        }}
      />
      <VeggieIcons />

      <Button title="Search" onPress={() => history.push("/RecepieIndex")} />
    </View>
  );
};

const Title = styled.Text`
  color: black;
  text-align: center;
`;

export default SearchPage;
