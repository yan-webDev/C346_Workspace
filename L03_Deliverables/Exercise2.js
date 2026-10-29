import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
/*
Exercise #2
Modify the Movie function component by doing the following: Add a 3rd property named "icon_name". The value of
the Icon component's "name" property is equal to the value of this "icon_name" property.
*/

const Movie = ({title, year, icon_name})=> {
    return (
        <View>
            <Text>
                {title} {year} <FontAwesome6 name={icon_name} size={24} color="black"/>
            </Text>
        </View>
    );
};



export default function App() {
    return (
        <View style={styles.container}>
            <Movie title ="Avenger 5" year="2026" icon_name={"pager"}/>
            <Movie title ="Titanic" year ="1997"icon_name={"pager"} />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
