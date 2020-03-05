import React from 'react';
import { View } from 'react-native'
import { DataTable } from 'react-native-paper';
import styled from 'styled-components';

export default class TimeComponent extends React.Component {
    render() {
        return (
            <View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Prep time: </DataTable.Title>
                        <DataTable.Title numeric> Cook time: </DataTable.Title>
                        <DataTable.Title numeric> Total time: </DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell numeric>20 min</DataTable.Cell>
                        <DataTable.Cell numeric>23 min</DataTable.Cell>
                        <DataTable.Cell numeric>8 min</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        );
    }
}



// const Title = styled.h1`
// font-family: Poppins;
// font-weight: 600;
// font-size: 12px;
// line-height: 18px;
// `

