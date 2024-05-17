import React, {useCallback} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Tab = ({ tab, active }) => {
  const [fontsLoaded, fontError] = useFonts({
    pr: require('../../../../assets/fonts/Poppins-Regular.ttf'),
    pm: require('../../../../assets/fonts/Poppins-Medium.ttf'),
    psb: require('../../../../assets/fonts/Poppins-SemiBold.ttf'),
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
    <View onLayout={onLayoutRootView}>
      <Text style={[styles.tabTitle, active ? styles.activeTab : null]}>
        {tab.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabTitle: {
    color: 'grey',
    backgroundColor: 'white',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingBottom: 5,
    fontFamily: 'pr',
  },
  activeTab: {
    fontFamily: 'psb',
    color: '#3548d1',
    borderBottomColor: '#3548d1',
  },
});

export default Tab;
