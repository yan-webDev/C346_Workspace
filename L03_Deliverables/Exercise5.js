import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

/*
Exercise #5
Create a function component named AllMovies in App.js. It displays 2 Movie components.
*/

const Movie = ({ title, year, icon_name, poster }) => {
    return (
        <View>
            <Image
                source={poster}
                style={{ width: 400, height: 400 }}
            />
            <Text>
                {title} {year} <FontAwesome6 name={icon_name} size={24} color="black" />
            </Text>
        </View>
    );
};

const AllMovies = () => {
    return (
        <View style={styles.container}>
            <Movie
                title="Doctor Sleep"
                year="2019"
                icon_name="skull"
                poster={require('./img/doctor-sleep.jpg')}
            />
            <Movie
                title="Midway"
                year="2020"
                icon_name="person-rifle"
                poster={require('./img/midway.jpg')}
            />
            <StatusBar style="auto" />
        </View>
    );
};

export default AllMovies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});