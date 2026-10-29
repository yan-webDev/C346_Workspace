import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
/*
Exercise #3
Modify the Movie function component by doing the following: Add an Image component above the text. The source
will be the image file named "doctor-sleep.jpg" found in the img folder. The width is 400. The height is 500.

*/

const Movie = ({title, year, icon_name})=> {
    return (
        <View>
            <Image source ={require('./img/doctor-sleep.jpg')}
                   style={{width:400, height:400}}
                   />
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
