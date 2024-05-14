import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import flightData from '../flightData.json';

const Flight = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
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
              <View>
                <Text>Seç</Text>
                <MaterialIcons name="navigate-next" size={28} color="#2f2f22" />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'normal',
    marginBottom: 5,
    fontSize: 16,
  },
  text: {
    fontWeight: 'bold',
    color: '#2f3c4e',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1a1d',
  },
});

export default Flight;
