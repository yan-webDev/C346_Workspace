import React from 'react';
//Import ToastAndroid instead of Alert
import {View, Text, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
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
            <TouchableOpacity
                onPress={ ()=> {
                    ToastAndroid.show("Welcome!", ToastAndroid.SHORT)
                }
                }>
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
//Modify onPress of TouchableOpacity as shown above to show ToastAndroid
};

export default MyApp;