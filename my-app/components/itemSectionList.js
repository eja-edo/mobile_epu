import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
);

export const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#ffffff',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
    },
    description: {
        fontSize: 12,
        color: '#666666',
    },
    time: {
        fontSize: 10,
        color: '#999999',
    },
});
