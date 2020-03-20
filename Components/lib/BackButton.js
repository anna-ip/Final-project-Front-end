import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from "styled-components";
import { withRouter } from "react-router-native"

const BackButton = ({ history }) => {
  return (

    <IconContainer>
      <ButtonContainer
        onPress={() => history.push("/")}
        activeOpacity={0.5}>
        <Icon
          name="angle-left"
          type="material"
          color="white"
          containerStyle={{ alignSelf: "center" }}
          reverse={40}
          size={80}
          raised={60}
        />
      </ButtonContainer>
    </IconContainer>

  );
};


const IconContainer = styled.View`
display: flex;
align-self:center;
  flex-direction: column;
  justify-content:center;
  background-color: #FBA896;
  box-shadow: 0px 10px -20px rgba(75, 44, 56, 0.16);
  width: 80;
  height: 80;
  border-radius: 80;
  z-index: 10;
margin-top:20px;
`;

const ButtonContainer = styled.TouchableOpacity`
display: flex;
align-items: center;
`

export default withRouter(BackButton);