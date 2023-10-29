import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Login = () => {
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
        </View>

    )
}

export default Login;