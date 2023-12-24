import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import { useForm, Controller } from "react-hook-form";

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

    const {control, handleSubmit, watch, formState: {errors}} = useForm();
    const password = watch('password', '')

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
                        <CustomInput 
                            control={control} 
                            name="username" 
                            placeholder="Username" 
                            id="username" 
                            type="text" 
                            secureTextEntry={false} 
                            rules={{
                                required: 'Username is required',
                                minLength: {
                                    value: 4, 
                                    message: 'Username must be at least 4 characters long'
                                },
                                maxLength: {
                                    value: 20, 
                                    message: 'Username must be at most 20 characters long'
                                }
                            }}
                        />
                    </View>
                    <View className="mb-4">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </Text>
                        <CustomInput 
                            control={control} 
                            name="email" 
                            placeholder="Email" 
                            id="email" 
                            type="text" 
                            secureTextEntry={false} 
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            }}
                        />
                    </View>
                    <View className="mb-6">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </Text>
                        <CustomInput
                            control={control}
                            name="password"
                            placeholder="Password"
                            id="password"
                            type="password"
                            secureTextEntry={true}
                            rules={{
                                required: 'Password is required', minLength: {
                                    value: 8, 
                                    message: 'Password must be at least 8 characters long'
                                }
                            }}
                        />
                    </View>
                    <View className="mb-6">
                        <Text className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Re-enter Password
                        </Text>
                        <CustomInput
                            control={control}
                            name="password-repeat"
                            placeholder="Password"
                            id="password-repeat"
                            type="password-repeat"
                            secureTextEntry={true}
                            rules={{
                                validate: value => value === password || "Passwords do not match"
                            }}
                        />
                    </View>
                    <View className="flex items-center justify-between space-y-4">
                        <Pressable className="bg-blue-500 font-bold py-3 w-full rounded items-center" onPress={handleSubmit(signup)}>
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