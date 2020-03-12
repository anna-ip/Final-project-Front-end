import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button } from 'react-native';

import styled from 'styled-components/native';
const veggies = [
    {
        "month": [
            6,
            7,
            8],
        "_id": "5e5d08acf901cfd65b8f5e2b",
        "name": "Broccoli",
        "carbonprint": 0.56,
        "__v": 0
    },
    {
        "month": [
            5,
            6,
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e2c",
        "name": "Cauliflower",
        "carbonprint": 0.43,
        "__v": 0
    },
    {
        "month": [
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e2d",
        "name": "Pepper",
        "carbonprint": 0.64,
        "__v": 0
    },
    {
        "month": [
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e2e",
        "name": "Cabbage",
        "carbonprint": 0.4,
        "__v": 0
    },
    {
        "month": [
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e2f",
        "name": "Mushrooms",
        "carbonprint": 1.31,
        "__v": 0
    },
    {
        "month": [
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e30",
        "name": "Aubergine",
        "carbonprint": 0.29,
        "__v": 0
    },
    {
        "month": [
            5,
            6,
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e32",
        "name": "Potato",
        "carbonprint": 0.4,
        "__v": 0
    },
    {
        "month": [
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e33",
        "name": "Cucumber",
        "carbonprint": 0.45,
        "__v": 0
    },
    {
        "month": [
            5,
            6,
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e34",
        "name": "Carrot",
        "carbonprint": 0.27,
        "__v": 0
    },
    {
        "month": [
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e35",
        "name": "Pumpkin",
        "carbonprint": 0.21,
        "__v": 0
    },
    {
        "month": [
            5,
            6,
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e36",
        "name": "Beetroot",
        "carbonprint": 0.32,
        "__v": 0
    },
    {
        "month": [
            5,
            6
        ],
        "_id": "5e5d08acf901cfd65b8f5e37",
        "name": "Asparagus",
        "carbonprint": 0.58,
        "__v": 0
    },
    {
        "month": [
            5,
            6,
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e38",
        "name": "Spinach",
        "carbonprint": 0.29,
        "__v": 0
    },
    {
        "month": [
            6,
            7,
            8
        ],
        "_id": "5e5d08acf901cfd65b8f5e3a",
        "name": "Tomato",
        "carbonprint": 0.77,
        "__v": 0
    }
]

//mappa igenom för buttons
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
