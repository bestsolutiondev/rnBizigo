import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Tab = ({ tab, active }) => {
  return (
    <View>
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
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#3548d1',
    borderBottomColor: '#3548d1'
  },
});

export default Tab;
