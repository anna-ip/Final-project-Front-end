import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

const SearchPage = () => {
    return (
        <View>
            <Title>Welcome</Title>
            {/* <VeggieIcons /> */}
            {/* <SearchButton /> */}
            {/* <Link
                to={`/recepieIndex`}>

                <VeggieIcons />
                <SearchButton />
            </Link> */}
        </View>

    )

}

const Title = styled.Text`
color: black;
`
export default SearchPage;
