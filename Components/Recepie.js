import React from 'react'
import { Text, Button, ScrollView, SafeAreaView } from 'react-native'
import SeasonalView from "./SeasonalView"
import ProgressCircle from "./ProgressCircle"
import RecepieCard from "./RecepieCard"
import BackButton from './lib/BackButton'
import styled from "styled-components";

const Recepie = ({ hitstory, location }) => {

    return (
        <SafeAreaView>
            <StyledView>

                <Text>Recepies</Text>
                <Scroll >

                    <SeasonConatiner>
                        <SeasonalView />

                    </SeasonConatiner>
                    <Text>{JSON.stringify(location.state)}</Text>
                    <ProgressContainer>
                        <ProgressCircle />
                    </ProgressContainer>
                    <RecepieCardContainer>
                        <RecepieCard />

                    </RecepieCardContainer>

                    <ButtonContainer >
                        <BackButton />
                    </ButtonContainer>
                </Scroll>

            </StyledView >
        </SafeAreaView>
    )

}

console.log(location, name)

const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    width: 100%;  
    margin-top: 100px;
`;

const Scroll = styled(ScrollView)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    background-color: pink;
`;

const SeasonConatiner = styled.View`
    margin-top: 100px;
    padding: 8px;
`
const ProgressContainer = styled.View`
    margin-top: 150px;
    padding: 8px;
`
const RecepieCardContainer = styled.View`
    margin-top: 200px;
    padding: 8px;
`
const ButtonContainer = styled.View`
    padding: 15px;
    margin-bottom: 170px;
`

export default Recepie