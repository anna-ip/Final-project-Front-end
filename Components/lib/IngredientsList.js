import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const IngredientsList = () => {

    return (
        <Container>

            <StyledSectionList
                sections={[
                    { title: 'Ingredient', data: ['1 cup cashews', '1 clove garlic', '1 cup lemon juice'] },
                    { title: '{results.title}', data: ['{missedIngredients.results.amount.} {missedIngredients.results.unitLong}{missedIngredients.results.name}', '{missedIngredients.results.amount.} {missedIngredients.results.unitLong}{missedIngredients.results.name}', '{missedIngredients.results.amount.} {missedIngredients.results.unitLong}{missedIngredients.results.name}', '{missedIngredients.results.amount.} {missedIngredients.results.unitLong}{missedIngredients.results.name}', '{missedIngredients.results.amount.} {missedIngredients.results.unitLong}{missedIngredients.results.name}'] },
                ]}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            >
            </StyledSectionList>
        </Container>
    )

}

const Container = styled(View)`
    display: flex;
    padding-top: 22px;
`;

const StyledSectionList = styled(SectionList)`
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(247,247,247,1.0);

`;

// const styles = StyleSheet.create({
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })

export default IngredientsList