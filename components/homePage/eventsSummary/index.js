import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import TabsView from '../../ui/TabsView/index';
import EventSummaryCard from '../eventsSummary/eventSummaryCard/index';

const EventsSummary = () => {
  const events = [
    {
      id: 0,
      name: 'Bursa Etkinlik',
      location: 'Antalya, Türkiye',
      dates: '16 May 2024 - 17 May 2024',
      invitedPersonsCount: 10,
      plannedPersonsCount: 20,
    },
    {
      id: 1,
      name: 'Ankara Etkinlik',
      location: 'Antalya, Türkiye',
      dates: '16 May 2024 - 17 May 2024',
      invitedPersonsCount: 10,
      plannedPersonsCount: 20,
    },
  ];

  const tabs = [
    {
      id: 0,
      title: 'Davet Edildiğim Etkinlikler',
    },
    {
      id: 1,
      title: 'Oluşturulan Etkinlikler',
    },
  ];

  return (
    <View>
      <View style={styles.wrapper}>
        <TabsView tabs={tabs} />
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {events.map((event) => (
          <View key={event.id} style={styles.eventSummaryCard}>
            <EventSummaryCard key={event.id} event={event} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  cardWrapper: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  eventSummaryCard: {
    marginRight: 16
  }
});

export default EventsSummary;
