import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import { useFonts } from 'expo-font';

import hotelData from '../../hotelData.json';
import HotelItem from '../../components/hotel/hotelItem';

const HotelList = () => {
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
          color="#1060ba"
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
            <Text style={styles.resultCountNumber}>{hotelData.length}</Text>{' '}
            sonuç gösteriliyor.
          </Text>
        </View>
        <ScrollView style={styles.listWrapper}>
          {hotelData.map((hotel) => (
            <View key={hotel.id} style={styles.hotelItem}>
              <HotelItem hotel={hotel} />
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
  hotelItem: {
    height: 200,
    borderLeftColor: '#1060ba',
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

export default HotelList;
