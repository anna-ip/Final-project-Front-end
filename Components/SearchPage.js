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


            {/* <Button id={props.id} title='Cucumber' onPress={() => 1} />
            <Button id={props.id} title='EggPlant' onPress={() => 2} />
            <Button id={props.id} title='Tomato' onPress={() => 3} />
            <Button id={props.id} title='Onion' onPress={() => 4} />
            <Button id={props.id} title='Carrot' onPress={() => 5} />
            <Button id={props.id} title='Potato' onPress={() => 6} />
            <Button id={props.id} title='Fennel' onPress={() => 7} /> */}


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
