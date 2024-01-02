import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ActivityIndicator } from 'react-native';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Homepage } from './src/screens';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  //custom font imported
  let [fonts] = useFonts({
    'Montserrat_Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2990A6" />
        <AppLoading
          startAsync={() => fonts}
          onFinish={() => setFontsLoaded(true)}
          onError={(error) => console.warn(error)}
        />
      </View>
  )} else {
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
