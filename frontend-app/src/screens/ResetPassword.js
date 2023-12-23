import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import CustomInput from '../components/CustomInput';

const ResetPassword = (props) => {

    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();

    const handleSendCode = (data) => {
        console.log("Send Code");
        // validate user
        navigation.navigate('NewPassword');
    };    

    const login = () => {
        navigation.navigate('Login');
    }

    return (
        <View className="flex-1 items-center justify-center bg-white w-screen">
            <View className="mb-10">
                <Text className="text-5xl">Reset Password</Text>
            </View>

            <View className="w-full max-w">
                <View className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-5">
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
                    <View className="flex items-center justify-between space-y-4">
                        <Pressable className="bg-blue-500 font-bold py-3 w-full rounded items-center" onPress={handleSubmit(handleSendCode)}>
                            <Text className="text-white">
                                Send Code  
                            </Text>
                        </Pressable>
                        <Pressable className="bg-white font-bold py-3 w-full rounded items-center" onPress={login}>
                            <Text className="text-gray-600">
                                Back to Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default ResetPassword;