import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const datasource = [
    {data:[
            {key:'a'},
            {key:'e'},
        ],
        title:"Vowels", bgcolor:"skyblue"},
    {data:[{key:'b'},
            {key:'c'},
            {key:'d'},
        ],
        title:"Consonants", bgcolor:"khaki"}
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <SectionList contentContainerStyle={{padding: 10}}
                         sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgcolor}})=>(
                             <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
                         )}/>
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
    },

    headerText:{
        fontSize:20,
        margin: 10,
        textAlign: "center",
        fontWeight:"bold",
    }
});