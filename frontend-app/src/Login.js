import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

const Login = (props) => {

    const submit = () => {
        props.navigation.navigate('Home');
    };    

    return (
        // create the login screen
        <View className="items-center justify-center bg-white w-screen">
            <View className="mb-10">
                <Text className="text-5xl">Login</Text>
            </View>

            {/* <View className="flex flex-col text-2xl">
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
                <Button title="Submit"/>
            </TouchableOpacity> */}

            <View className="w-full max-w">
                <View className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-5">
                    <View className="mb-4">
                    <Text className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </Text>
                    <TextInput className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </View>
                    <View className="mb-6">
                    <Text className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </Text>
                    <TextInput className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <Text className="text-red-500 text-xs italic">Please choose a password.</Text>
                    </View>
                    <View className="flex items-center justify-between">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" title="Submit" />
                    <TouchableOpacity className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        <Text> Forgot Password? </Text> 
                    </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

    )
}

export default Login;