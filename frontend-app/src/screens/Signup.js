import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Signup = (props) => {

    const navigation = useNavigation();

    const signup = () => {
        // props.navigation.navigate('Home');
        console.log("Submit");
        // handle registration
    }; 

    const login = () => {
        console.log("login");
        navigation.navigate('Login');
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View className="flex-1 items-center justify-center bg-white w-screen">
            <View className="mb-10">
                <Text className="text-5xl">Sign Up</Text>
            </View>

            <View className="w-full max-w">
                <View className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-5">
                    <View className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </Text>
                        <TextInput className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChangeText={setUsername}/>
                    </View>
                    <View className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </Text>
                        <TextInput className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChangeText={setEmail}/>
                    </View>
                    <View className="mb-6">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </Text>
                        <TextInput className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChangeText={setPassword}/>
                        <Text className="text-red-500 text-xs italic">Please choose a password.</Text>
                    </View>
                    <View className="flex items-center justify-between space-y-4">
                        <Pressable className="bg-blue-500 font-bold py-3 w-full rounded items-center" onPress={signup}>
                            <Text className="text-white">
                                Submit
                            </Text>
                        </Pressable>
                        <Pressable className="bg-white font-bold py-3 w-full rounded items-center" onPress={login}>
                            <Text className="text-gray-600">
                                Already have an account? Log in!
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>

    )
}

export default Signup;