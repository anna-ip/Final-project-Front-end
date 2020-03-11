import React from 'react';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components';

const MonthAvatar = () => {
    return (

        <Container>
            <StyledAvatar>
                <Label> Jan </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Feb </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Mar </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Apr </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> May </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Jun </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Jul </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Aug </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Sep </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Oct </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Nov </Label>
            </StyledAvatar>
            <StyledAvatar>
                <Label> Dec </Label>
            </StyledAvatar>

        </Container>
    )
}

export default MonthAvatar

const Container = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 250px;
height: 153px;
`

const StyledAvatar = styled.View`
background-color: #FFFFFF;
height: 45px;
width: 49px;
border-radius: 60;
justify-content:center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 3.5px;
`
//font-family: Eczar;
const Label = styled.Text`

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #000000;
`