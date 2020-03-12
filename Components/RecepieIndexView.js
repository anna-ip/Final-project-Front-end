import React from "react";
import RecepieIndex from "../Components/RecepieIndex";
import SustainBadge from "./lib/SustainBadge";
import BackButton from "./lib/BackButton"
import styled from "styled-components/native";

const RecepieIndexView = () => {
    return (
        <StyledView>
            <StyledSafeAreaView>
                <Scroll horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <BadgeView>
                        <SustainBadge />
                    </BadgeView>
                    <RecepieIndex />
                </Scroll>

                <ButtonContainer>
                    <BackButton />
                </ButtonContainer>
            </StyledSafeAreaView>
        </StyledView>
    )
}


const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    /* margin-top: -200px; */
    background-color: blue;
`;
const StyledSafeAreaView = styled(SafeAreaView)`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      background-color: blue;
    `;

const Scroll = styled(ScrollView)`
    /* background-color: #ffffff; */
    background-color: blue;
`;

const BadgeView = styled.View`
    position: absolute;
    top: 38%;
`;

const ButtonContainer = styled.View`
    position: absolute;
    /* top: 138%; */
    /* padding: 15px;
    margin-bottom: 170px; */
    /* padding: 15px;
    margin-top: 500px; */
    background-color:pink;
`

export default RecepieIndexView            