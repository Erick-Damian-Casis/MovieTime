/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import ImageScreen from './screen/ImageScreen';
import DetailsScreen from './screen/DetailsScreen';

const Stack = createStackNavigator();

const App=()=>{
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App_to_home" screenOptions={{
        headerTintColor: "white",
        headerStyle:{backgroundColor: "orange",    
      }
      }}>
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{
            title: 'Movie Time',
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize:30
            }
          }}
          />
        <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
          options={({route})=>({
            title: route.params.movie.title,
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize:30
            }}
            )}
          />
          <Stack.Screen
          name="Details_to_Details"
          component={DetailsScreen}
          options={({route})=>({
            title: route.params.movie.title,
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize:30
            }
          })}
          />
        <Stack.Screen
          name="BigImageView"
          component={ImageScreen}
          options={({route})=>({
            title: route.params.movie.title,
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize:30
            }
          })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

