import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ResetPassword from '../screens/ResetPassword';
import NewPassword from '../screens/NewPassword';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
            {/* <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}} initialRouteName='Login'> */}
                <Stack.Screen name="Login" component={Login} options={{gestureEnabled: false}}/>
                <Stack.Screen name="Signup" component={Signup} options={{gestureEnabled: false}}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{gestureEnabled: false}}/>
                <Stack.Screen name="NewPassword" component={NewPassword} options={{gestureEnabled: false}}/>
                <Stack.Screen name="Home" component={Home} options={{gestureEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;