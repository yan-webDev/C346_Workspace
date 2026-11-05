import React from 'react';
//Add Alert to import
import {View, Text, TextInput, Button, Alert} from 'react-native';
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
            <Button title="LOG IN" onPress={()=>Alert.alert("Welcome!")}/>/>
        </View>
    );
//Add onPress event to Button above to show Alert
};

export default MyApp;