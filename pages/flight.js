import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const Flight = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Flight</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper : {
    height: '100%',
    padding: 20
  }
});

export default Flight;
