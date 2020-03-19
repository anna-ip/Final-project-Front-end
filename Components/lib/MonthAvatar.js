import React from 'react';
import { Button, Text } from "react-native";
import { Avatar } from 'react-native-paper';
import styled from 'styled-components';




const MonthAvatar = ({ veggies }) => {

    return (

        <Container>
            {/* {veggies.month.map((month, i) => ( */}
            <MonthButton
                // key={i}
                // Id={1}
                title={"Jan"}
                onPress={() => ('')}
            />

            <MonthButton
                title={"Feb"}
            />



            <MonthButton
                title={"Mar"}
            />

            <MonthButton
                title={"Apr"}
            />

            <MonthButton
                title={"May"}
            />


            <MonthButton
                title={"Jun"}
            />


            <MonthButton
                title={"Jul"}
            />

            <MonthButton
                title={"Aug"}
            />

            <MonthButton
                title={"Sept"}
            />

            <MonthButton
                title={"Oct"}
            />


            <MonthButton
                title={"Nov"}

            />


            <MonthButton
                title={"Dec"}
            />

            {/* ))} */}

        </Container>
    )
}

export default MonthAvatar

const Container = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 230px;
height: 153px;
`;

///* background: ${props => props.primary ? "green" : "white"}; */
const MonthButton = styled.Button`
display: flex;
background-color: #FFFFFF;

height: 45px;
width: 49px;
border-radius: 60;
justify-content: center;
align-content: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 3.5px;
`;
//font-family: Eczar;
//styling for the dif color MonthButton see styled components https://styled-components.com/docs/api under "using custom props"
// const Label = styled.Text`

// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 25px;
// text-align: center;
// right: 2px;
// /* color: #000000; */
// color:${props => props.primary ? "green" : "black"};
//`
