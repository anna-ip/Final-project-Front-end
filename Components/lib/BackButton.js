import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { TouchableOpacity } from "react-native";
//import { Icon } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from "styled-components";
import { withRouter } from "react-router-native"

const BackButton = ({ history }) => {
  return (
    <Container>
      <IconContainer>
        <ButtonContainer
          onPress={() => history.push("/")}
          activeOpacity={0.5}>
          <Icon
            name="angle-left"
            type="material"
            // color="#FBA896"
            color="white"
            containerStyle={{ alignSelf: "center" }}
            reverse={40}
            size={80}
            raised={60}
          />
        </ButtonContainer>
      </IconContainer>
    </Container>
  );
};



const Container = styled.View`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px -20px rgba(75, 44, 56, 0.16);
  
`;

const IconContainer = styled.View`
  position: absolute;
  align-self: center;
  background-color: #FBA896;
  box-shadow: 0px 10px -20px rgba(75, 44, 56, 0.16);
  width: 80;
  height: 80;
  border-radius: 80;
  top: 40;
  bottom: 0;
  z-index: 10;

`;

const ButtonContainer = styled.TouchableOpacity`
display: flex;
align-items: center;
top: -4px;
left: -2px;

`

export default withRouter(BackButton);