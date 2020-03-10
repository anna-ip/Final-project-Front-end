import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from './lib/VeggieIcons'
import SearchButton from "./lib/SearchButton";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SearchPage = () => {
    return (
        <>
            <VeggieIcons />
            <SearchButton />
            {/* <Link
                to={`/recepieIndex`}>

                <VeggieIcons />
                <SearchButton />
            </Link> */}
        </>

    )

}
export default SearchPage;