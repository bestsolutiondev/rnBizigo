import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { useFonts } from 'expo-font';

import flightData from '../../flightData.json';

import FlightItem from '../../components/flight/flightItem';

const FlightList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useFonts({
    pr: require('../../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator
          style={styles.spinner}
          size="xlarge"
          color="#18d68f"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.resultCountWrapper}>
          <Text style={styles.resultCountText}>
            Toplam:{' '}
            <Text style={styles.resultCountNumber}>{flightData.length}</Text>{' '}
            sonuç gösteriliyor.
          </Text>
        </View>
        <ScrollView style={styles.listWrapper}>
          {flightData.map((flight) => (
            <View key={flight.routeId} style={styles.flightItem}>
              <FlightItem flight={flight} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    paddingBottom: '50%',
  },
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 20,
  },
  resultCountWrapper: {
    marginTop: 10,
    marginBottom: 26,
  },
  resultCountText: {
    fontFamily: 'pr',
    fontSize: 20,
  },
  resultCountNumber: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  listWrapper: {
    marginBottom: 50,
  },
  flightItem: {
    borderLeftColor: '#18d68f',
    borderLeftWidth: 3,
    marginBottom: 12,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 4,
    paddingBottom: 10,
    shadowColor: '#2f2f22',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default FlightList;
