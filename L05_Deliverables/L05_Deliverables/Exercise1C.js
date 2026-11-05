import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Exercise1C = () => {
    return (
        <View style={{ marginTop: 40 }}>
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => console.log(value)}>
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Guest" value="Guest" />
            </Picker>

            <Text>Password:</Text>
            <TextInput style={{ borderWidth: 1 }} />

            <Button title="LOG IN" />
        </View>
    );
};

export default Exercise1C;