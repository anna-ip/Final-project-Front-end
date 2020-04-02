import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";

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
        <TextBox>
          Check it out in Sweden <Highlight>{veggie.name}</Highlight> is
          available these months:
        </TextBox>
        <MonthView>
          {MONTHS.map(item => {
            if (veggie.month.includes(item)) {
              return (
                <OptimalAvatar key={item.name}>
                  <Label key={item.id}>{item}</Label>
                </OptimalAvatar>
              );
            } else {
              return (
                <StyledAvatar>
                  <Label>{item}</Label>
                </StyledAvatar>
              );
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
  background-color: #bde7ff;
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
  width: 300px;
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
  padding-top: 30px;
  padding-left: 15px;
`;

const StyledAvatar = styled.View`
  background: #ffffff;
  height: 45px;
  width: 49px;
  border-radius: 60;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3.5px;
`;

const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;

const OptimalAvatar = styled.View`
  background: #fee598;
  height: 45px;
  width: 49px;
  border-radius: 60;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3.5px;
`;

export default SeasonalView;
