import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Homepage } from './src/screens';

export default function App() {

  //custom font imported
  let [fontsLoaded] = useFonts({
    'Montserrat_Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <Homepage/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
