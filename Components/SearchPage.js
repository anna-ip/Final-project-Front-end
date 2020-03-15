import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import styled from 'styled-components/native'
import VeggieIcons from './lib/VeggieIcons'

const localUrl = 'http://192.168.1.37:8080/veggies'

const SearchPage = () => {
    const [veggies, setVeggies] = useState([])
    const [loading, setLoading] = useState(false)

    // THIS WORKS ✅
    // fetching the veggies from DB here.
    // passing them along to VeggieIcons component 👇
    useEffect(() => {
        setLoading(true)
        fetch(localUrl)
            .then(res => res.json())
            .then(json => {
                setVeggies(json)
                setLoading(false)
            })
    }, [])

    return (
        <Container>
            <Header>Seasonal vegetables, what do you have in your fridge</Header>
            <Divider style={{ height: 3, backgroundColor: '#7EDABE' }} />
            {loading && <Text>Loading</Text>}
            {!loading && <VeggieIcons veggies={veggies} />}
            <Divider style={{ height: 3, backgroundColor: '#7EDABE' }} />
            {/* <Button title="Search" onPress={() => history.push("/RecepieIndex")} /> */}
        </Container>
    )
}

const Container = styled(SafeAreaView)`
  margin: 12px;
`

const Title = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 64px;
`
const Header = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
`

export default SearchPage