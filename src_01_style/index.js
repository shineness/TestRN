import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <Text style={[style.h1]}>index</Text>
      <Text style={[style.h2]}>index</Text>
    </View>
  )
}
const style = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: "bold"
  },
  h2: {
    fontSize: 30,
    fontWeight: "bold"
  }
})