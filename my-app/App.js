import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Màu nền cho toàn bộ màn hình
  },
  square: {
    width: 300, // Chiều rộng hình vuông
    height: 300, // Chiều cao hình vuông
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white', // Màu chữ
    fontSize: 40,
  },
});