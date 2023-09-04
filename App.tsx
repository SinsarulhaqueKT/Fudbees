import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react'
import Home from './Componets/sections/Home';
import { NativeScreenContainer } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
<Stack.Navigator  screenOptions={{headerShown:false}}>
<Stack.Screen name="Home" component={Home} />
</Stack.Navigator>
</NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})