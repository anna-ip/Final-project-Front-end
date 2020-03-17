import React from 'react';
import { View } from 'react-native'
import { DataTable } from 'react-native-paper';
import styled from 'styled-components';

const TimeComponent = ({ recipe }) => {

    return (
        <View>
            <StyledDataTable>
                <DataTable.Header>
                    <DataTable.Title>Prep time: </DataTable.Title>
                    <DataTable.Title numeric> Cook time: </DataTable.Title>
                    <DataTable.Title numeric> Total time: </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell numeric>{recipe.preparationMinutes} min</DataTable.Cell>
                    <DataTable.Cell numeric>{recipe.cookingMinutes} min</DataTable.Cell>
                    <DataTable.Cell numeric>{recipe.readyInMinutes} min</DataTable.Cell>
                </DataTable.Row>
            </StyledDataTable>
        </View>
    );

}



const StyledDataTable = styled(DataTable)`
    display: flex;
    justify-content: center;
    align-content: center;
    color: black;
`;

export default TimeComponent

