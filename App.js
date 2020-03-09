import React from "react"
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import SustainBadge from './Components/SustainBadge'
import RecepieIndex from './Components/RecepieIndex'
import styled from 'styled-components/native'


const App = () => (
  <StyledView>

    <Scroll horizontal={true}>
      <BadgeView>
        <SustainBadge />
      </BadgeView>
      <RecepieIndex />
    </Scroll>

  </StyledView>
)
export default App

const StyledView = styled.View`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-content: center;
 margin-top: -100px;
`
// const StyledSafeAreaView = styled(SafeAreaView)`
//  display: flex;
//  flex-direction: column;
//  justify-content: center;
//  align-content: center;
// `
const Scroll = styled(ScrollView)`
 background-color: #FFFFFF;
`;

const BadgeView = styled.View`
position: absolute;
top: 38%;
`


/*
const App = () => {
  return (
    <Container>
      <RecipieIndex />
      <Title>This is your cool app!</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

export default App */
