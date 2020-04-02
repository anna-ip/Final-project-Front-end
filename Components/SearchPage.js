import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Divider } from "react-native-elements";
import styled from "styled-components/native";
import VeggieIcons from "./lib/VeggieIcons";
import { PacmanIndicator } from "react-native-indicators";

const Url = "https://final-backend-project-1.herokuapp.com/veggies";

const SearchPage = () => {
  const [veggies, setVeggies] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetching the veggies from DB here.
  // passing them along to VeggieIcons component 👇
  useEffect(() => {
    setLoading(true);
    fetch(Url)
      .then(res => res.json())
      .then(json => {
        setVeggies(json);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <HeaderView>
        <Header>Seasonal vegetables, what do you have in your fridge</Header>
      </HeaderView>
      <Section>
        <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
        <VeggieContainer>
          {loading && <PacmanIndicator color={"#7EDABE"} size={60} />}
          {!loading && <VeggieIcons veggies={veggies} />}
        </VeggieContainer>
        <Divider style={{ height: 3, backgroundColor: "#7EDABE" }} />
      </Section>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  margin: 12px;
`;

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 150px;
  padding: 10px;
`;

const Header = styled.Text`
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  line-height: 25px;
  padding-top: 30px;
`;

const Section = styled.View`
  height: 300px;
`;

const VeggieContainer = styled.View`
  padding-top: 35px;
`;

export default SearchPage;
