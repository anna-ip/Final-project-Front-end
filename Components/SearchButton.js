import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components";

const SearchButton = () => {
  return (
    <Container>
      <IconContainer>
        <TouchableOpacity onPress={() => Icon} activeOpacity={0.5}>
          <Icon
            name="done"
            type="material"
            color="#FBA896"
            containerStyle={{ alignSelf: "center" }}
            reverse={40}
            size={40}
            raised={60}
          />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
};

export default SearchButton;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 6px -20px rgba(75, 44, 56, 0.16);
`;

const IconContainer = styled.View`
  position: absolute;
  align-self: center;
  box-shadow: 0px 10px -20px rgba(75, 44, 56, 0.16);
  width: 80;
  height: 80;
  border-radius: 80;
  top: 200;
  bottom: 0;
  z-index: 10;
`;
