import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';

import Home from './pages/home';
import Flight from './pages/flight';
import Hotel from './pages/hotel';
import Car from './pages/car';
import Events from './pages/events';
import Requests from './pages/requests';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== 'Home' ? true : false,
          headerTitleAlign: 'center'
        })}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Flight" component={Flight} />
        <Stack.Screen name="Hotel" component={Hotel} />
        <Stack.Screen name="Car" component={Car} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Requests" component={Requests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
