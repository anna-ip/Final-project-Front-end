import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { Avatar } from 'react-native-paper';



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
        {/* <TitleText>SEASONAL AVALIBILITY</TitleText> */}
        <TextBox>
          Check it out in Sweden <Highlight>{veggie.name}</Highlight>  is available these months:
        </TextBox>
        <MonthView>
          {MONTHS.map(item => {
            if (veggie.month.includes(item)) {
              return <OptimalAvatar
              // key={item} title={item} color="orange" 
              >
                <Label>{item}</Label>
              </OptimalAvatar>;
            } else {
              return <StyledAvatar >
                {/* // key={item} title={item} color="black" */}
                <Label>{item}</Label>
              </StyledAvatar>;

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
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px; 
`;


const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-top: 35px;
`;

const TextBox = styled(Text)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: Avenir Next;
  width:300px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  padding-bottom: 10px;
  color: #111010; 
`;

const Highlight = styled.Text`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  color: white;
`;

const MonthView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 300px;
  height: 153px;
  padding-top:30px;
  padding-left:15px;
`;

const StyledAvatar = styled.View`
background: #FFFFFF;
height: 45px;
width: 49px;
border-radius: 60;
justify-content:center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 3.5px;
`;

const Label = styled.Text`
/* font-family: Eczar; */
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #000000;
`

const OptimalAvatar = styled.View`
background: yellow;
height: 45px;
width: 49px;
border-radius: 60;
justify-content:center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 3.5px;
`

// const MonthButton = styled.Button`
//   /* display: flex; */
//   background: #ffffff;

//   height: 45px;
//   width: 49px;
//   border-radius: 60;
//   /* border-color: black; */
//   border: 2px solid palevioletred;
//   /* border: 1px solid black; */
//   /* justify-content: center;
//   align-content: center; */
//   /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
//   /* margin: 3.5px; */
//   color: black;
// `;



const OptimalMonthButton = styled.Button`

  display: flex;
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
