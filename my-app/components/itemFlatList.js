import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
            <Icon
                name={item.status === 'done' ? 'check-circle' : 'person'}
                size={24}
                color={item.status === 'done' ? 'green' : 'blue'}
            />
        </View>

        {/* Nội dung thông báo */}
        <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        backgroundColor: '#ffffff',
        padding: 14,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    iconContainer: {
        marginRight: 12,
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
    },
    time: {
        fontSize: 12,
        color: '#999999',
    },
});

export default NotificationItem;
