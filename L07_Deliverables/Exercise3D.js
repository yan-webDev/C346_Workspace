import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise3D = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>Child One</Text>
            <Text style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>Child Two</Text>
            <Text style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>Child Three</Text>
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

export default Exercise3D;