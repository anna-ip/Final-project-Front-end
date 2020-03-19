import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import Constants from "expo-constants";
import styled from "styled-components";

import { Card } from "react-native-paper";
import { setWorldAlignment } from "expo/build/AR";
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
      <CardContainer>
        <Title>SEASONAL AVALIBILITY</Title>
        <Textfield>
          Check it out in Sweden {veggie.name} is avalible these months
        </Textfield>
        <MonthView>
          {MONTHS.map(item => {
            if (veggie.month.includes(item)) {
              return <OptimalMonthButton key={item} style={{ background: "yellow" }} title={item} disable />
            } else {
              return <MonthButton key={item} title={item} disable />
            }
          })}
        </MonthView>
      </CardContainer>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;
  border-radius: 8px;
  background-color: #BDE7FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
`;


const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 294px;
  /* height: 153px; */
  right: 45px;
  top: 80px;
  align-items: center;
  width: 100%;
  margin: 4px;
`;

const Title = styled.Text`
  display: flex;
  flex-direction: row;
  text-align: center;
  position: absolute;
  /* left: 52.2%; */
  right: 0%;
  top: 10.81%;
  bottom: 81.87%;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #FFFCFC;
`;

const Textfield = styled.Text`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:300px;
  font-family: Avenir Next;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  position: absolute;
  /* left: 8.07%;*/
  right: -65%;
  top: 13.73%;
  /* bottom: 57.98%; */
  
 
  /* color: #111010; */
  color: black;
`
const MonthView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 230px;
  height: 153px;
  position: absolute;
  right: -150px;
  top: 110px;
`;

const MonthButton = styled(Button)`
  /* display: flex; */
  background-color: #FFFFFF;
  height: 45px;
  width: 49px;
  border-radius: 60;
  /* border-color: black; */
  border: 1px solid black;
  justify-content: center;
  align-content: center;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  margin: 3.5px;
  color: black;
`;



const OptimalMonthButton = styled.Button`
  /* display: flex; */
  background: #fee598;
  height: 45px;
  width: 49px;
  border-radius: 60;
  /* border-color: black; */
  border: 1px solid black;
  /* justify-content: center;
  align-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3.5px; */
  color: black;
`;





export default SeasonalView;
