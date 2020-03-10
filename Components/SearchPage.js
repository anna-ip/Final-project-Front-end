import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Vibration } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const SearchPage = () => {
  return (
    <View>
      <VeggieIcons />
      <SearchButton />
    </View>
  );
};
export default SearchPage;
