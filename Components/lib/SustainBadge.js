import * as React from 'react';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const SustainBadge = () => (
    <Button>
        <Text> Sustainable </Text>
    </Button>
);

export default SustainBadge

const Button = styled.View`
background-color: #7EDABE;
height: 100px;
width: 100px;
border-radius: 45;
justify-content:center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Text = styled.Text`
text-align:center;

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 30px;
color: #FBF4F4;
text-shadow: -1px -1px 0 #FBA896;
`
