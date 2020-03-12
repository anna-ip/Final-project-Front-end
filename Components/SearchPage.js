import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button } from "react-native";
import styled from "styled-components/native";



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

const SearchPage = ({ history }) => {
    return (
        < Container>
            <Title>Welcome</Title>

            <VeggieIcons />


            <Button title="Search" onPress={() => history.push("/RecepieIndex")} />
        </ Container>
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
