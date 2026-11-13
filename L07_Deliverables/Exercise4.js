import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
                <Text style={styles.squareText}>Square 1</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'mediumaquamarine' }]}>
                <Text style={styles.squareText}>Square 2</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'crimson' }]}>
                <Text style={styles.squareText}>Square 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
    },
    Child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        fontSize: 12,
    },
});

export default Exercise4;