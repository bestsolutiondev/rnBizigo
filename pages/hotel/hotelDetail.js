import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const HotelDetail = ({ route }) => {
  const { hotel } = route.params;

  const [fontsLoaded, fontError] = useFonts({
    pr: require('../../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.wrapper} onLayoutRootView={onLayoutRootView}>
      <View style={styles.imgWrapper}>
        <Image
          source={{ uri: hotel.images[0].path }}
          style={styles.imgWrapper}
        ></Image>
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
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>Otel Hakkında: </Text>
          <Text style={styles.aboutText}>{hotel.desc}</Text>
        </View>
        <View style={styles.extras}>
          <Text style={styles.extrasItem}>{hotel.boardType}</Text>
          <Text style={styles.extrasItem}>{hotel.roomNames[0]}</Text>
        </View>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceTitle}>Toplam Fiyat: </Text>
          <Text style={styles.price}>
            {hotel?.price?.amount} {hotel?.price?.currency}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Ödeme Sayfasına ilerle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f6f8fa',
    height: '100%',
    padding: 20,
  },
  imgWrapper: {
    height: '100%',
    flex: 1,
    shadowColor: '#2f2f22',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  img: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    resizeMode: 'stretch',
    height: '100%',
  },
  informationWrapper: {
    flex: 1.3,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'pm',
    fontSize: 24,
    color: '#2f3c4e',
  },
  text: {
    fontFamily: 'pr',
    fontSize: 16,
    color: '#2f3c4e',
  },
  rating: {
    marginTop: 8,
    backgroundColor: '#88cce785',
    padding: 4,
    borderRadius: 8,
    display: 'flex',
    width: 50,
    color: '#2f3c4e',
    textAlign: 'center',
    fontSize: 18,
  },
  rate: {
    fontSize: 20,
    fontFamily: 'pm',
    color: 'black',
  },
  aboutTitle: {
    fontFamily: 'psb',
    fontSize: 13,
  },
  aboutText: {
    fontSize: 13,
    fontFamily: 'pr',
  },
  extras: {
    flexDirection: 'row',
  },
  extrasItem: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: 'pm',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  priceWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  priceTitle: {
    fontFamily: 'pm',
    fontSize: 16,
    color: '#2c2c22',
  },
  price: {
    fontFamily: 'psb',
    fontSize: 24,
    color: '#1060ba',
  },
  nextButton: {
    backgroundColor: '#11aa58',
    padding: 10,
    borderRadius: 4,
    paddingVertical: 16,
    marginVertical: 10,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: 'rgba(0,0,0, .6)',
    elevation: 3,
  },
  nextButtonText: {
    fontSize: 18,
    fontFamily: 'psb',
    textAlign: 'center',
    color: '#fff',
  },
});

export default HotelDetail;
