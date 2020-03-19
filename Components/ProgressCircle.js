import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import ProgressCircle from "react-native-progress-circle";
import styled from "styled-components";

const progressCircle = ({ veggie }) => {

  console.log('veggie in PROGRESSCIRCLE', veggie) // We're passing the veggie as a prop to this component.


  const value = 0.62;
  // const value = { name.carbonprint };
  // const percent = {`${value * 100}`
  //add another caculation to take the 0. away
  const coFrontPrint = 0;

  return (
    <Container>
      <Title>{`${veggie.name}`}</Title>
      <ProgressCircle
        percent={30}
        radius={60}
        borderWidth={10}
        color="#FBA896"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 18 }}>{`${veggie.carbonprint * 100}%`}</Text>
      </ProgressCircle>
      <Rubrik>C02 footprint of {`${veggie.carbonprint}`}</Rubrik>
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
