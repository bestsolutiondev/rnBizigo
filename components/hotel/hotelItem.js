import React from 'react';

import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';

const HotelItem = ({ hotel }) => {
  useFonts({
    pr: require('../../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('HotelDetail', { hotel: hotel })}
    >
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{
            uri: hotel.images[0].path,
          }}
        />
      </View>
      <View style={styles.informationWrapper}>
        <View>
          <Text style={styles.title}>{hotel?.name}</Text>
          <Text style={styles.text}>
            {hotel?.cityName} / {hotel?.districtName}
          </Text>
          <Text style={styles.rating}>
            <Text style={styles.rate}>{hotel?.star}</Text>/5
          </Text>
        </View>
        <View>
          <Text style={styles.price}>
            {hotel?.price?.amount} {hotel?.price?.currency}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imgWrapper: {
    height: '100%',
    flex: 1.5,
  },
  img: {
    borderRadius: 4,
    resizeMode: 'stretch',
    height: '100%',
  },
  informationWrapper: {
    flex: 1,
    paddingLeft: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'pm',
    fontSize: 16,
    color: '#2f3c4e',
  },
  text: {
    fontFamily: 'pr',
    fontSize: 12,
    color: '#2f3c4e',
  },
  rating: {
    marginTop: 8,
    backgroundColor: '#88cce785',
    padding: 4,
    borderRadius: 8,
    display: 'flex',
    width: 34,
    color: '#2f3c4e',
    textAlign: 'center',
  },
  rate: {
    fontFamily: 'pm',
    color: 'black',
  },
  price: {
    fontFamily: 'psb',
    fontSize: 21,
    color: '#1060ba',
  },
});

export default HotelItem;
