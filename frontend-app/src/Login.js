import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = (props) => {

    const submit = () => {
        props.navigation.navigate('Home');
    };    

    return (
        // create the login screen
        <View className="items-center justify-center bg-white">
            <View className="mb-10">
                <Text className="text-5xl">Login</Text>
            </View>

            <View className="flex flex-col text-2xl">
                <View className="flex flex-row">
                    <Text className="text-2xl">Username: </Text>
                    <TextInput className="text-2xl" placeholder="Email" />
                </View>
                <View className="flex flex-row">
                    <Text className="text-2xl">Password: </Text>
                    <TextInput className="text-2xl" placeholder="Password" />
                </View>
            </View>
            <TouchableOpacity onPress={submit}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Login;