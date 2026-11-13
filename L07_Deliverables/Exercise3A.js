import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise3A = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text>
            <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
            <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 40,
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

export default Exercise3A;