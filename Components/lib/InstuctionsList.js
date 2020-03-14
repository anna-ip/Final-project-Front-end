import React from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components";

const InstructionsList = () => {

    return (
        <Container>
            <StyledFlatList
                data={[
                    { key: "1 | To make Cashew Ricotta: Preheat oven to 400°F. Slice off top of garlic head, drizzle with 1 tsp. oil, and wrap in parchment paper, then in foil. Roast 1 hour, or until soft.2 | Rinse and drain soaked cashews, and transfer to food processor." },
                    { key: '{results.analyzedInstructions.steps.number1}' },
                    { key: '{results.analyzedInstructions.steps.ingredients' },
                    { key: '{results.analyzedInstructions.steps.step' },
                ]}
                renderItem={({ item }) => <InstructionsText>{item.key}</InstructionsText>}
            />

        </Container>
    )
}

const Container = styled(View)`
    display: flex;
    padding-top: 22;
`
const StyledFlatList = styled(FlatList)`
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(247,247,247,1.0);
`;
const InstructionsText = styled(Text)`
    font-size: 18px;
    padding: 10px;
    height: 44px;
`;

export default InstructionsList