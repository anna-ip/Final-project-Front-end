// import "react-native-gesture-handler";

import React from "react";
import Routes from "./Components/Routes/Routes";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import ErrorBoundary from "./Components/ErrorBoundary";
// import SearchPage from './Components/SearchPage'
// import RecepieIndex from "./Components/RecepieIndex";
// import SustainBadge from './Components/lib/SustainBadge'
// import Recepie from './Components/Recepie'
// import BackButton from "./Components/lib/BackButton";
import { NativeRouter, Switch, Route, Link } from "react-router-native";
import styled from "styled-components/native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { food } from "./Components/Reducer/food";

// const Stack = createStackNavigator();

const reducer = combineReducers({
  food: food.reducer
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Container>
          <Switch>
            <Routes />
          </Switch>
        </Container>
      </NativeRouter>
    </Provider>

    // <StyledView>
    //   <Scroll horizontal={true}>
    //     <BadgeView>
    //       <SustainBadge />
    //     </BadgeView>
    //     <RecepieIndex />
    //   </Scroll>
    //   {/* <SearchPage /> */}
    //   {/* <Recepie /> */}

    //   {/* <BackButton /> */}

    // </StyledView>

    // <View>
    //   <ErrorBoundary>
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen name="Home" component={SearchPage} />
    //         <Stack.Screen name="Recepie Index" component={RecepieIndex} />
    //       </Stack.Navigator>
    //     </NavigationContainer>

    //   </ErrorBoundary>
    // </View>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default App;
