import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import ProgressCircle from "react-native-progress-circle";
import styled from "styled-components";

const progressCircle = (veggie) => {
  const value = 0.66;
  const coFrontPrint = 0;
  return (
    <Container>
      <Title>{veggie.name}</Title>
      <ProgressCircle
        percent={30}
        radius={60}
        borderWidth={10}
        color="#FBA896"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 18 }}>{`${value * 100}%`}</Text>
      </ProgressCircle>
      <Rubrik>C02 footprint of {`${coFrontPrint}`}</Rubrik>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 300px;
  border-radius: 8px;
  background-color: #7EDABE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
`;

const Title = styled.Text`
  top: -20px;
  font-size: 20px;
`
const Rubrik = styled.Text`
  margin-top: 20;
  text-align: center;
`;

export default progressCircle;
