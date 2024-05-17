import React, { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import EventsSummary from '../components/homePage/eventsSummary';

const Home = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    pr: require('../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const menuItems = [
    {
      icon: <MaterialIcons name="flight" size={30} color="white" />,
      text: 'Uçuş',
      route: 'FlightList',
    },
    {
      icon: (
        <FontAwesome style={styles.img} name="hotel" size={28} color="white" />
      ),
      text: 'Otel',
      route: 'HotelList',
    },
    {
      icon: <FontAwesome5 name="car" size={28} color="white" />,
      text: 'Araç Kiralama',
      route: 'Car',
    },
    {
      icon: <MaterialIcons name="group" size={28} color="white" />,
      text: 'Etkinlikler',
      route: 'Events',
    },
    {
      icon: <AntDesign name="filetext1" size={28} color="white" />,
      text: 'Talepler',
      route: 'Requests',
    },
  ];

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.wrapper} onLayoutRootView={onLayoutRootView}>
      <LinearGradient
        colors={['#3548d1', '#1060ba']}
        style={styles.linearGradient}
      >
        <View>
          <View style={styles.welcomeWrapper}>
            <Text style={styles.title}>Hoşgeldin</Text>
            <Text style={styles.subtitle}>Oğuz Han Şahin</Text>
            <Text style={styles.welcomeText}>
              Yeni bir iş seyahati için doğru adrestesin.
            </Text>
          </View>

          <ScrollView
            style={styles.scrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {menuItems.map((item, index) => (
              <View
                style={[
                  styles.menuItemWrapper,
                  index === menuItems.length - 1 && styles.lastMenuItemWrapper,
                ]}
                key={index}
              >
                <TouchableOpacity
                  style={[
                    styles.imgWrapper,
                    index === menuItems.length - 1 && styles.lastItemImgWrapper,
                  ]}
                  onPress={() => navigation.navigate(item.route)}
                >
                  {item.icon}
                </TouchableOpacity>

                <Text style={styles.menuText}>{item.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>

      <View style={styles.eventsSummaryWrapper}>
        <EventsSummary />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    flexDirection: 'column',
  },
  linearGradient: {
    flex: 0.85,
    paddingTop: 30,
  },
  welcomeWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 30,
    fontFamily: 'pr',
  },
  subtitle: {
    fontSize: 36,
    color: 'white',
    marginBottom: 14,
    fontFamily: 'psb',
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    marginBottom: 30,
    fontFamily: 'pr',
  },
  scrollView: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  menuItemWrapper: {
    flex: 1,
    alignItems: 'center',
    marginRight: 24,
  },
  lastMenuItemWrapper: {
    marginRight: 50,
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: '#18d68f',
    borderRadius: 50,
  },
  lastItemImgWrapper: {
    backgroundColor: '#ffa500',
  },
  menuText: {
    paddingTop: 10,
    color: 'white',
    fontSize: 16,
    fontFamily: 'pm',
  },
  eventsSummaryWrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: -15,
  },
});

export default Home;
