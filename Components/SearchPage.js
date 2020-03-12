import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button } from 'react-native';

import styled from 'styled-components/native';

const SearchPage = () => {
    return (
        <Container>

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


            {/* <TestButton title='Search' onPress={() => history.push('/RecepieIndex')} >

            </TestButton> */}
            {/* <VeggieIcons />*/}
            <ButtonContainer >
                <SearchButton />
            </ButtonContainer>
            {/* </Link> */}
        </Container>

    )

}

const Container = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.Text`
color: black;
margin-top: 300px;
`

const TestButton = styled.Button`
justify-content: center;
`

const ButtonContainer = styled.View`
    padding: 15px;
    margin-top: 500px;
`
export default SearchPage;
