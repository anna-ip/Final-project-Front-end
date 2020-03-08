import React from "react"
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import RecepieIndex from './Components/RecepieIndex'
import SustainBadge from './Components/SustainBadge'
import styled from 'styled-components/native'



const App = () => {
  return (
    <Container>
      <ScrollView horizontal={true}>
        <RecepieIndexContainer>
          <BadgeView>
            <SustainBadge />
          </BadgeView>
          <RecepieIndex />
        </RecepieIndexContainer>
      </ScrollView>
    </Container>
  )
}
export default App

const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`
const RecepieIndexContainer = styled.View`

`
const BadgeView = styled.View`
    z-index: 2;
    position: absolute;
    right:0%;
    left: 0%;
    top: 90px;
    bottom:0%;
`;



