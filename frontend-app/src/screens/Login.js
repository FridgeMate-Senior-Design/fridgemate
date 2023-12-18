import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {

    const navigation = useNavigation();

    const login = () => {
        console.log("Log In");
        // validate user
        // navigation.navigate('Home');
    };    

    // const forgotPassword = () => {
    //     console.log("Forgot Password");
    // }

    const signUp = () => {
        console.log("Sign Up");
        navigation.navigate('Signup');
    }

    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 items-center justify-center bg-white w-screen">
            <View className="mb-10">
                <Text className="text-5xl">Login</Text>
            </View>

            <View className="w-full max-w">
                <View className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-5">
                    <View className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </Text>
                        <TextInput className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChangeText={setUsername}/>
                    </View>
                    <View className="mb-6">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </Text>
                        <TextInput className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChangeText={setPassword}/>
                        <Text className="text-red-500 text-xs italic">Please choose a password.</Text>
                    </View>
                    <View className="flex items-center justify-between space-y-4">
                        <Pressable className="bg-blue-500 font-bold py-3 w-full rounded items-center" onPress={login}>
                            <Text className="text-white">
                                Submit
                            </Text>
                        </Pressable>
                        {/* <Pressable className="bg-white font-bold py-3 w-full rounded items-center" onPress={forgotPassword}>
                            <Text className="text-gray-600">
                                Forgot Password?
                            </Text>
                        </Pressable> */}
                        <Pressable className="bg-white font-bold py-3 w-full rounded items-center" onPress={signUp}>
                            <Text className="text-gray-600">
                                Don't have an account? Sign up!
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Login;