import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';


const MyApp = ()=> {
    const [pw, setPw] = useState('');
    //Add useStates for name and type
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    return (
        <View>
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => setType(value)}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>
            <Text>User Name:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)} />
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)}/>
            <TouchableOpacity
                onPress={ ()=> {
                    ToastAndroid.show("Welcome!", ToastAndroid.SHORT)
                }
                }>
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyApp;