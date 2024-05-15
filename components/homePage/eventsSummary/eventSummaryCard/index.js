import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useFonts } from 'expo-font';

const EventSummaryCard = ({ event }) => {
  const { name, location, dates, invitedPersonsCount, plannedPersonsCount } =
    event;

  useFonts({
    pr: require('../../../../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../../../../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../../../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.informationWrapper}>
        <View style={styles.information}>
          <Entypo
            style={styles.icon}
            name="location-pin"
            size={24}
            color="#18d68f"
          />
          <Text style={styles.informationText}>{location}</Text>
        </View>
        <View style={styles.information}>
          <AntDesign
            style={styles.icon}
            name="calendar"
            size={24}
            color="#18d68f"
          />
          <Text style={styles.informationText}>{dates}</Text>
        </View>
      </View>
      <View style={styles.seperator} />
      <View>
        <View style={styles.persons}>
          <Text style={styles.bold}>Davet Edilen:</Text>
          <Text style={styles.count}>{invitedPersonsCount} Kişi</Text>
        </View>
        <View style={styles.persons}>
          <Text style={styles.bold}>Planlayan:</Text>
          <Text style={styles.count}>{plannedPersonsCount} Kişi</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Düzenle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    direction: 'column',
    padding: 12,
    borderColor: '#ccc',
    paddingLeft: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: 'psb'
  },
  informationWrapper: {
    marginTop: 20,
    marginBottom: 30,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  informationText: {
    fontSize: 16,
    fontFamily: 'pr'
  },
  seperator: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 30,
  },
  bold: {
    fontFamily: 'psb',
    fontSize: 16,
    marginRight: 5,
  },
  persons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 16,
    fontFamily: 'pr'
  },
  button: {
    backgroundColor: 'rgb(53, 72, 209)',
    padding: 8,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'pm'
  },
});

export default EventSummaryCard;
