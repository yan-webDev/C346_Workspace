import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise3E = () => {
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
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 40,
        justifyContent: 'flex-start',      // Result 1: all at the top
        // justifyContent: 'flex-end',     // Result 2: all at the bottom
        // justifyContent: 'space-around', // Result 3: space before, between and after
        // justifyContent: 'space-between',// Result 4: first at top, last at bottom
    },
    Child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

export default Exercise3E;