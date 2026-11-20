import React from 'react';
import { View, Text, Image, Button, SectionList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Builds the card image link from the card number
const getCardImage = (num) =>
    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + num + '-2x.png';

// Each section = one element, with its own icon and colours
const datasource = [
    {
        title: 'Electric',
        icon: 'flash',
        bgColor: '#FFE45C',
        textColor: '#7A6000',
        data: [
            { key: 'Pikachu', card: 25 },
            { key: 'Voltorb', card: 100 },
        ],
    },
    {
        title: 'Fire',
        icon: 'flame',
        bgColor: '#FF9C6B',
        textColor: '#7A2400',
        data: [
            { key: 'Charmander', card: 4 },
            { key: 'Growlithe', card: 58 },
        ],
    },
    {
        title: 'Water',
        icon: 'water',
        bgColor: '#8FD3F5',
        textColor: '#0B4F7A',
        data: [
            { key: 'Squirtle', card: 7 },
            { key: 'Psyduck', card: 54 },
        ],
    },
];

// One row: name on the left, card picture on the right
const renderItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.row}
            onPress={() => Alert.alert(item.key, 'Card number ' + item.card)}
        >
            <Text style={styles.name}>{item.key}</Text>
            <Image source={{ uri: getCardImage(item.card) }} style={styles.cardImage} />
        </TouchableOpacity>
    );
};

// Section header: icon + element name, in the element's colours
const renderSectionHeader = ({ section: { title, icon, bgColor, textColor } }) => {
    return (
        <View style={[styles.header, { backgroundColor: bgColor }]}>
            <Ionicons name={icon} size={20} color={textColor} />
            <Text style={[styles.headerText, { color: textColor }]}>{title.toUpperCase()}</Text>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonBox}>
                <Button title="Add Pokemon" onPress={() => {}} />
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={{ padding: 10 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: 'white',
    },
    buttonBox: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        marginTop: 10,
        borderWidth: 1,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 6,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E8E8F8',
        borderWidth: 1,
        padding: 10,
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardImage: {
        width: 150,
        height: 210,
        resizeMode: 'contain',
    },
});