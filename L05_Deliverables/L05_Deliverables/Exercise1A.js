import React from 'react';
import {View, Text, TextInput} from 'react-native';

const MyApp = ()=> {
    return (
        <View>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} />
        </View>
    );
};

export default MyApp;