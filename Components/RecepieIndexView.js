import React from "react";
import RecepieIndex from "../Components/RecepieIndex";
import SustainBadge from "./lib/SustainBadge";
import styled from "styled-components/native";

const RecepieIndexView = () => {
    return (
        <StyledView>
            <Scroll horizontal={true}>
                <BadgeView>
                    <SustainBadge />
                </BadgeView>
                <RecepieIndex />
            </Scroll>
        </StyledView>
    )
}


const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: -80px;
`;
{/* const StyledSafeAreaView = styled(SafeAreaView)`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    `; */}

const Scroll = styled(ScrollView)`
    background-color: #ffffff;
`;

const BadgeView = styled.View`
              position: absolute;
              top: 38%;
            `;

export default RecepieIndexView            