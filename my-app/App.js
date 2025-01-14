// File: App.js
import React from 'react';
import { View, SectionList, StyleSheet, FlatList, Text } from 'react-native';
import { renderSectionHeader, renderItem } from './components/itemSectionList';
import { notificationsData } from './data/notificationsSectionList';

import Icon from 'react-native-vector-icons/MaterialIcons';
import notifications from './data/notifications'; // Import dữ liệu

const App = () => {
  const renderItem1 = ({ item }) => <NotificationItem item={item} />;



  return (
    <View style={styles.container}>
      {/* Header tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      {/* Danh sách thông báo */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.headerText}>Section list</Text>
      <SectionList
        sections={notificationsData}
        keyExtractor={(item) => item.id}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  headerText: {
    top: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
  },
});

export default App;
