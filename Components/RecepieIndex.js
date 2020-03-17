import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Text
} from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import { Alert } from 'react-native'
import RecepiesCards from './RecepiesCards'
import styled from 'styled-components/native'
import BackButton from './lib/BackButton'
import { PacmanIndicator } from 'react-native-indicators';

const localUrl = 'http://192.168.1.23:8080/recipes/'

const RecepieIndex = ({ history, location, veggie }) => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  console.log('location', location.state.name)

  // THIS WORKS ✅
  // fetching the recipies from DB here.
  // getting the name from that location.state that was passed from prev screen.
  // setting recipies array to be from the fetch and then mapping through them to get the title to show up as a text. The cards needs to be filled of course. But at least this works :D 
  useEffect(() => {
    setLoading(true)
    fetch(localUrl + location.state.name)
      .then(res => res.json())
      .then(json => {
        setRecipes(json)
        setLoading(false)
      })
  }, [])

  return (
    <StyledView>
      <SafeAreaView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {recipes.map(recipe => (
            <Link
              key={recipe.id}
              to={{
                pathname: '/recepie',
                state: recipe // passing along the whole recipe object to next screen
              }}
              component={TouchableOpacity}
              activeOpacity={0.8}
            >
              {/* <Link to="/recepie/${recepie.id}" component={TouchableOpacity} activeOpacity={0.8}> */}
              {/* skicka med ett id från recept db som i Movie project*/}
              {/* link to */}
              <CardContainer>
                {loading && <Text>Test</Text>}
                {!loading && <Text>{recipe.title}</Text>}
                <CardView>
                  <RecepiesCards veggie={veggie} recipe={recipe} />
                </CardView>
              </CardContainer>
            </Link>
          ))}

          {/* <Link to='/recepie' component={TouchableOpacity} activeOpacity={0.8}>
            <CardContainer>
              <CardView>
                <RecepieCard />
              </CardView>
            </CardContainer>
          </Link>
​
          <Link to='/recepie' component={TouchableOpacity} activeOpacity={0.8}>
            <CardContainer>
              <CardView>
                <RecepieCard />
              </CardView>
            </CardContainer>
          </Link>
​
          <Link to='/recepie' component={TouchableOpacity} activeOpacity={0.8}>
            <CardContainer>
              <CardView>
                <RecepieCard />
              </CardView>
            </CardContainer>
          </Link> */}
        </ScrollView>
        <BackButton />
        {/* <Button title='Search' onPress={() => history.push('/recepie')} /> */}
      </SafeAreaView>
    </StyledView>
  )
}
export default RecepieIndex

//StyledView is the background
const StyledView = styled.View`
  z-index: -1;
  margin-top: 25%;
`

//background for the Scrollwiev of the cards height
// const Scroll = styled(ScrollView)`
//     background-color: #FFFFFF;
//  `;

const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
`

const CardView = styled.View`
  z-index: 1;
`