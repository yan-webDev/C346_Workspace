import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const datasource = [
    {key: 'a', num: 1},
    {key: 'b', num: 2},
    {key: 'c', num: 3},
    {key: 'd', num: 4},
    {key: 'e', num: 5},
    {key: 'f', num: 6}

];

const view = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>

    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList data={datasource} renderItem={view} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    opacityStyle:{
        borderWidth: 1
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: "left"
    }
});