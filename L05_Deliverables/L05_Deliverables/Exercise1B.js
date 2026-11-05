import React from 'react';
import {View, Text, TextInput} from 'react-native';

//Import picker
import {Picker} from '@react-native-picker/picker';


const MyApp = ()=> {
//Picker component added to view
    return (
        <View>
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => console.log(value)}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} />
        </View>
    );
};

export default MyApp;