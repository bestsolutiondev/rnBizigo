import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions, TouchableOpacity } from 'react-native';

import Tab from './Tab/index';

const TabsView = ({ tabs }) => {
  const layout = useWindowDimensions();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <View style={styles.wrapper}>
      {tabs.map((tab) => (
        <TouchableOpacity onPress={() => setActiveTabIndex(tab.id)} key={tab.id} >
          <Tab tab={tab} active={tab.id === activeTabIndex} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TabsView;
