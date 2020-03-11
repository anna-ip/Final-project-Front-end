import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MonthSeason from "./lib/MonthSeason"
import Constants from 'expo-constants';
import styled from "styled-components";

import { Card } from 'react-native-paper';

const SeasonalView = () => {

    return (
        <Container>
            <CardConatiner>
                <MonthSeason />
            </CardConatiner>
        </Container>
    );

}

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 250px;
    height: 153px;
    background-color: #ecf0f1;
    padding: 8px;
`

const CardConatiner = styled(Card)`
margin: 8px;
`

export default SeasonalView