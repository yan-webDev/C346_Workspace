import React from 'react';
//Import TouchableOpacity instead of Button
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';


const MyApp = ()=> {
    return (
        <View>
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => console.log(value)}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} />
            <TouchableOpacity onPress={()=>Alert.alert("Welcome!")}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
    //Add TouchableOpacity component as shown above
};

export default MyApp;