import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import MonthSeason from "./lib/MonthSeason";
import Constants from "expo-constants";
import styled from "styled-components";

import { Card } from "react-native-paper";
//use selector to find store.veggie.month
//use selector to find store.veggie.co2

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const SeasonalView = ({ veggie }) => {

  return (
    <Container>
      <CardConatiner>
        <Title>SEASONAL AVALIBILITY</Title>
        <Textfield>
          Check it out in Sweden {veggie.name} is avalible these months
        </Textfield>
        <MonthView>
          {MONTHS.map(item => {
            if (veggie.month.includes(item)) {
              return <OptimalMonthButton key={item} title={item} />
            } else {
              return <MonthButton key={item} title={item} />
            }
          })}
        </MonthView>
      </CardConatiner>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-content: center;
  /* width: 100%; */
  height: 153px;

  padding: 8px;
`;

const CardConatiner = styled(Card)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* width: 100%; */
  /* margin: 4px; */
`;

const MonthView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 230px;
  height: 153px;
`;

const MonthButton = styled.Button`
  display: flex;
  background-color: #FFFFFF;
  height: 45px;
  width: 49px;
  border-radius: 60;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3.5px;
`;

const OptimalMonthButton = styled.Button`
  display: flex;
  background-color: #FEE598;
  height: 45px;
  width: 49px;
  border-radius: 60;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3.5px;
`;

const Textfield = styled.Text`
  position: absolute;
  left: 8.07%;
  right: 10.8%;
  top: 19.73%;
  bottom: 57.98%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  /* color: #111010; */
  color: black;
`

const Title = styled.Text`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 52.2%;
  right: 0%;
  top: 5.81%;
  bottom: 81.87%;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #FFFCFC;
`

export default SeasonalView;
