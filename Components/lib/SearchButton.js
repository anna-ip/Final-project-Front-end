import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
// import { Icon } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from "styled-components";
import { withRouter } from "react-router-native"



const SearchButton = ({ history }) => {
  return (
    <Container>
      <IconContainer>
        <ButtonContainer
          onPress={() => history.push('/RecepieIndex')}

          activeOpacity={0.5}>

          <Icon
            name="check"
            type="material"
            color="#FBA896"
            containerStyle={{ alignSelf: "center" }}
            reverse={40}
            size={40}
            raised={60}
          />

        </ButtonContainer>
      </IconContainer>
    </Container>
  );
};




const Container = styled.View`
  flex: 1;
  flex-direction: column;
  box-shadow: 0px 6px -20px rgba(75, 44, 56, 0.16);
`;

const IconContainer = styled.View`
  position: absolute;
  align-self: center;
  background-color: pink;
  box-shadow: 0px 10px -20px rgba(75, 44, 56, 0.16);
  width: 80;
  height: 80;
  border-radius: 80;
  top: 50;
  bottom: 0;
  z-index: 10;
`;

const ButtonContainer = styled.TouchableOpacity`
display: flex;
align-items: center;
top: 15px;
`;

export default withRouter(SearchButton);