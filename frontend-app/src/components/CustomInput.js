import React from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({control, name, placeholder, id, type, secureTextEntry, rules = {}}) => {
    return (
        <View>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <>
                        <View
                            style={[{borderColor: error ? 'red' : 'black'},
                        ]}>
                            <TextInput
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={placeholder}
                                id={id}
                                type={type}
                                secureTextEntry={secureTextEntry}
                            />
                        </View>
                        {error && (
                            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                        )}
                    </>
                )}
            />
        </View>
    )
}

export default CustomInput;