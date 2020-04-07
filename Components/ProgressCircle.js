import * as React from "react";
import { Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import styled from "styled-components";

const progressCircle = ({ veggie }) => {
  return (
    <Container>
      <Title>{`${veggie.name}`}</Title>
      <ProgressCircle
        key={veggie}
        percent={`${veggie.carbonprint * 100}`}
        radius={60}
        borderWidth={10}
        color="#FBA896"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 18 }}>{veggie.carbonprint} CO2</Text>
      </ProgressCircle>

      <Rubrik>
        {" "}
        4 portions of this recipe with {`${veggie.name}`} is the equivalent of{" "}
        {`${veggie.carbonprint}`}CO2-Emission (kg)
      </Rubrik>
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
  background-color: #7edabe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
`;

const Title = styled.Text`
  top: -20px;
  font-size: 25px;
  font-weight: 600;
`;

const Rubrik = styled.Text`
  padding: 20px;
  text-align: center;
  font-size: 16px;
`;

export default progressCircle;
