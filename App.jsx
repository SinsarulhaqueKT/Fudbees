import { StyleSheet, Text, View } from 'react-native'
import {useContext} from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react'
import Home from './Componets/sections/Home';
import { NativeScreenContainer } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './Componets/ShopContext';
import Cart from './Componets/Cart';

const App = () => {
  const Stack = createStackNavigator();
  return (

    <CartProvider>
    <NavigationContainer>
<Stack.Navigator  screenOptions={{headerShown:false}}>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Cart" component={Cart} />

</Stack.Navigator>
</NavigationContainer>
</CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})