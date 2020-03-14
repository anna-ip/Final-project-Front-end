import React from 'react'
import { Text, Button, ScrollView, SafeAreaView } from 'react-native'
import SeasonalView from "./SeasonalView"
import ProgressCircle from "./ProgressCircle"
import RecipeCard from "./RecipeCard"
import BackButton from "./lib/BackButton"
import styled from "styled-components";

const Recepie = ({ hitstory, location }) => {

    return (
        <SafeAreaView>
            <StyledView>

                <Text>Recepies</Text>
                <Scroll >
                    <ProgressContainer>
                        <ProgressCircle />
                    </ProgressContainer>

                    <Text>{JSON.stringify(location.state)}</Text>

                    <SeasonConatiner>
                        <SeasonalView />
                    </SeasonConatiner>



                    <RecepieCardContainer>
                        <RecipeCard />
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
    background-color: pink;
    margin-bottom: 5px;
`;

const ProgressContainer = styled.View`
    top: 1px;
    padding: 8px;
`

const SeasonConatiner = styled.View`
    top: 85px;
    padding: 8px;
`

const RecepieCardContainer = styled.View`
    top: 250px;
    padding: 8px;
`
const ButtonContainer = styled.View`
    top: 400px;
    padding: 15px;
    
`

export default Recepie