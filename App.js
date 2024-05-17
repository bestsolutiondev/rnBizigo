import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';

import Home from './pages/home';
import FlightList from './pages/flight/flightList';
import HotelList from './pages/hotel/hotelList';
import Car from './pages/car';
import Events from './pages/events';
import Requests from './pages/requests';
import HotelDetail from './pages/hotel/hotelDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Ana Sayfa',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FlightList"
        component={FlightList}
        options={{
          title: 'Uçuş',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="flight" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HotelList"
        component={HotelList}
        options={{
          title: 'Otel',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              style={styles.img}
              name="hotel"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== 'Home' ? true : false,
          headerTitleAlign: 'center',
        })}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ title: 'Ana Sayfa' }}
        />
        <Stack.Screen
          name="FlightList"
          component={FlightList}
          options={{ title: 'Uçuş' }}
        />
        <Stack.Screen
          name="HotelList"
          component={HotelList}
          options={{ title: 'Otel' }}
        />
        <Stack.Screen
          name="Car"
          component={Car}
          options={{ title: 'Araç Kiralama' }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{ title: 'Etkinlikler' }}
        />
        <Stack.Screen
          name="Requests"
          component={Requests}
          options={{ title: 'Talepler' }}
        />
        {/* detail */}
        <Stack.Screen
          name="HotelDetail"
          component={HotelDetail}
          options={{ title: 'Otel Detay' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
