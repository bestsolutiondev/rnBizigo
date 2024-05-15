import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const FlightItem = ({ flight }) => {
  useFonts({
    pr: require('../../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Kalkış:{' '}
          <Text style={styles.text}>
            {flight.from.name} ({flight.from.code})
          </Text>
        </Text>
        <Text style={styles.title}>
          Varış:{' '}
          <Text style={styles.text}>
            {flight.to.name} ({flight.to.code})
          </Text>
        </Text>
        <Text style={styles.title}>
          Fiyat:{' '}
          <Text style={styles.price}>
            {flight.routePrice.total} {flight.routePrice.currencyCode}
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.selectContainer}>
        <Text style={styles.selectText}>Seç</Text>
        <MaterialIcons name="navigate-next" size={28} color="#2f2f22" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'pr',
    marginBottom: 5,
    fontSize: 16,
  },
  text: {
    fontFamily: 'pm',
    color: '#2f3c4e',
  },
  price: {
    fontFamily: 'psb',
    fontSize: 18,
    color: '#1a1d',
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectText: {
    fontFamily: 'pm',
    color: '#2f3c4e',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FlightItem;
