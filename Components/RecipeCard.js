import React from "react"
import { SafeAreaView, ScrollView } from 'react-native';
import RecipeC from "./RecipeC"
import styled from 'styled-components/native'

const RecepieCard = ({ recipe }) => {
    return (
        <StyledSafeAreaView>
            <StyledView>

                <CardContainer>
                    <CardView>
                        <RecipeC recipe={recipe} />
                    </CardView>
                </CardContainer>


            </StyledView>
        </StyledSafeAreaView>
    )
}

const StyledSafeAreaView = styled(SafeAreaView)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
`;

const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    z-index: -1;
    /* background-color: blue; */
    border-radius: 8px;
    /* height: 100%; */
`;

const CardContainer = styled.View`
    display: flex;
    flex-direction: column;
    /* bottom: 500px; */
`;

const CardView = styled.View`
    width: 100%;
    z-index: 1;
`;

export default RecepieCard