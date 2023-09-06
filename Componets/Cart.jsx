import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Cart = () => {
  return (
<View>
    <View style={{backgroundColor:'black',width:'100%',height:'100%',alignItems:'center'}}>
       <View style={{height:500,marginTop:140}}>
    <ScrollView style={{backgroundColor:'yellow',width:350}}>

<View style={{width:50,height:100,backgroundColor:'blue'}}>

</View>


    </ScrollView>
    </View>
  <View style={{backgroundColor:'blue',width:350,height:100,marginTop:20}}></View>
    </View>
</View>
  )
}

export default Cart

const styles = StyleSheet.create({})