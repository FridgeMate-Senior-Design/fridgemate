import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getTemperatureHumidity from './src/api/FetchTempHumidity';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Navigation from './src/components/Navigation';

export default function App() {

  // const [temperature, setTemperature] = useState(0);
  // const [humidity, setHumidity] = useState(0);

  // useEffect(() => {
  //   getTemperatureHumidity().then((response) => {
  //     setTemperature(response.temperature);
  //     setHumidity(response.humidity);
  //   });
  // });


  return (

    // <View className="flex-1 items-center justify-center bg-white">
    //   <Navigation />
    // </View>
    <Navigation />
  );
}
