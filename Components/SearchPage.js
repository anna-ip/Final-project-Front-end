import React, { useEffect } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import VeggieIcons from "./lib/VeggieIcons";
import SearchButton from "./lib/SearchButton";
import { View, Button, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { fetchVeggies } from "./Reducer/veggies"


const veggies = [
    {
        month: [6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e2b",
        name: "Broccoli",
        carbonprint: 0.56,
        __v: 0
    },
    {
        month: [5, 6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e2c",
        name: "Cauliflower",
        carbonprint: 0.43,
        __v: 0
    },
    {
        month: [7, 8],
        _id: "5e5d08acf901cfd65b8f5e2d",
        name: "Pepper",
        carbonprint: 0.64,
        __v: 0
    },
    {
        month: [7, 8],
        _id: "5e5d08acf901cfd65b8f5e2e",
        name: "Cabbage",
        carbonprint: 0.4,
        __v: 0
    },
    {
        month: [7, 8],
        _id: "5e5d08acf901cfd65b8f5e2f",
        name: "Mushrooms",
        carbonprint: 1.31,
        __v: 0
    },
    {
        month: [8],
        _id: "5e5d08acf901cfd65b8f5e30",
        name: "Aubergine",
        carbonprint: 0.29,
        __v: 0
    },
    {
        month: [5, 6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e32",
        name: "Potato",
        carbonprint: 0.4,
        __v: 0
    },
    {
        month: [7, 8],
        _id: "5e5d08acf901cfd65b8f5e33",
        name: "Cucumber",
        carbonprint: 0.45,
        __v: 0
    },
    {
        month: [5, 6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e34",
        name: "Carrot",
        carbonprint: 0.27,
        __v: 0
    },
    {
        month: [8],
        _id: "5e5d08acf901cfd65b8f5e35",
        name: "Pumpkin",
        carbonprint: 0.21,
        __v: 0
    },
    {
        month: [5, 6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e36",
        name: "Beetroot",
        carbonprint: 0.32,
        __v: 0
    },
    {
        month: [5, 6],
        _id: "5e5d08acf901cfd65b8f5e37",
        name: "Asparagus",
        carbonprint: 0.58,
        __v: 0
    },
    {
        month: [5, 6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e38",
        name: "Spinach",
        carbonprint: 0.29,
        __v: 0
    },
    {
        month: [6, 7, 8],
        _id: "5e5d08acf901cfd65b8f5e3a",
        name: "Tomato",
        carbonprint: 0.77,
        __v: 0
    }
];

//mappa igenom för buttons

const SearchPage = ({ history }) => {
    const dispatch = useDispatch();
    const allVeggies = useSelector((store) => store.veggies.veggies)
    const isLoading = useSelector((store) => store.veggies.isLoading)

    // useEffect(() => {
    //     fetch('http://localhost:8080/')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //         })
    // }, [])
    // useEffect(() => {
    //     dispatch(fetchVeggies)
    //     console.log("Veggie", allVeggies)
    // }, [])
    const veggieFetch = () => {
        console.log("Hej")
        fetch('http://localhost:8080/veggies')
            .then(res => res.json())
            .then(json => {
                console.log("Hallo", json)
            })
    }

    return (
        <Container>
            {isLoading && <Text>Loading</Text>}
            {!isLoading && <Title>Sustain</Title>}
            <Header>Seasonal vegetables, what do you have in your fridge</Header>
            <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
            <VeggieIcons />
            <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
            {/* <Button title="Search" onPress={() => history.push("/RecepieIndex")} /> */}
            <Button title="Search" onPress={veggieFetch} />
        </Container>
    );
};

const Container = styled(SafeAreaView)`
  margin: 12px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 64px;
`;
const Header = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export default SearchPage;
