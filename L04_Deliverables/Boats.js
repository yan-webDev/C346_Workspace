import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>
                <FontAwesome6 name="sailboat" size={24} color="gray" /> {name}
            </Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
    },
    name: {
        fontSize: 26,
        textTransform: 'uppercase',
        color: '#444',
    },
    description: {
        fontSize: 15,
        color: '#666',
        marginBottom: 4,
    },
    image: {
        width: '100%',
        height: 330,
    },
});

export default Boat;