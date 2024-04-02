import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const styles= StyleSheet.create({
  container:{ 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  tittle:{
    fontSize: 40,
    color: '#40f2fe' 
  }
})

export default function app(){ 
  return <View style={styles.container}>
    <Text style={styles.tittle}> Hola mundo!! </Text>
  </View>

}