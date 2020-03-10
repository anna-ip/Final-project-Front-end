import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button } from 'react-native';

import styled from 'styled-components/native';

const SearchPage = ({ history }) => {
    return (
        <View>

            {/* <VeggieIcons /> */}
            {/* <SearchButton /> */}
            {/* <Link
                to={`/recepieIndex`}> */}
            <Title>Welcome</Title>
            <Button title='Search' onPress={() => history.push('/RecepieIndex')} />
            {/* <VeggieIcons />*/}
            {/* <SearchButton /> */}
            {/* </Link> */}
        </View>

    )

}

const Title = styled.Text`
color: black;
`
export default SearchPage;
