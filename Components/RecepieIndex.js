import React from "react"
import { SafeAreaView, ScrollView } from 'react-native';
import RecepieCard from './RecepieCard'
import styled from 'styled-components/native'

const RecepieIndex = () => (
    <StyledView>
        <SafeAreaView>
            <Scroll horizontal={true}>
                <CardContainer>
                    <CardView>
                        <RecepieCard />
                    </CardView>
                </CardContainer>

                <CardContainer>
                    <CardView>
                        <RecepieCard />
                    </CardView>
                </CardContainer>

                <CardContainer>
                    <CardView>
                        <RecepieCard />
                    </CardView>
                </CardContainer>

                <CardContainer>
                    <CardView>
                        <RecepieCard />
                    </CardView>
                </CardContainer>
            </Scroll>
        </SafeAreaView>
    </StyledView>
)
export default RecepieIndex

//StyledView is the background
const StyledView = styled.View`
    z-index: -1; 
    margin-top: 25%;
 `;

//background for the Scrollwiev of the cards height
const Scroll = styled(ScrollView)`
    background-color: #FFFFFF;
 `;

const CardContainer = styled.View`
    display: flex;
    flex-direction: column;
`;

const CardView = styled.View`
    z-index: 1;
`;

