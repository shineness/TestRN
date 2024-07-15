import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function flex() {
  return (
    <ScrollView>
      <Text style={[styles.h2]}>主轴方向</Text>
      <View>
      <Text style={[styles.h3]}>flexD:"column(默认)"</Text>
      <View style={[styles.container]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>flexD:"column reverse"</Text>
      <View style={[styles.container,styles.flexColumnReverse]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>flexD:"row "</Text>
      <View style={[styles.container,styles.flexRow]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>flexD:"row reverse"</Text>
      <View style={[styles.container,styles.flexRowReverse]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>justifyContent:"flex-start"</Text>
      <View style={[styles.container,styles.flexRow,styles.justifyContentStart]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>justifyContent:"flex-end"</Text>
      <View style={[styles.container,styles.flexRow,styles.justifyContentEnd]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>justifyContent:"space-around"</Text>
      <View style={[styles.container,styles.flexRow,styles.justifyContentAround]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>justifyContent:"space-evenly"</Text>
      <View style={[styles.container,styles.flexRow,styles.justifyContentEvenly]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      <Text style={[styles.h3]}>justifyContent:"space-between"</Text>
      <View style={[styles.container,styles.flexRow,styles.justifyContentBetween]}>
        <Text style={[styles.itemBase]}>1111</Text>
        <Text style={[styles.itemBase]}>2223</Text>
        <Text style={[styles.itemBase]}>3333</Text>
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        height:150,
        margin:10,
        borderWidth:1,
        borderColor:"#ddd"
    },
    h2:{
        fontSize:30,
        marginHorizontal:10
    },
    h3:{
        fontSize:24,
        marginHorizontal:10
    },
    itemBase:{
        height:30,
        borderWidth:1,
        borderColor:"green",
        backgroundColor:"yellow",
        padding:4,
        textAlign:"center"
    },
    flexColumn:{
        flexDirection:"column"
    },
    flexColumnReverse:{
        flexDirection:"column-reverse"
    },
    flexRow:{
        flexDirection:"row"
    },
    flexRowReverse:{
        flexDirection:"row-reverse"
    },
    justifyContentStart:{
        justifyContent:"flex-start"
    },
    justifyContentEnd:{
        justifyContent:"flex-end"
    },
    justifyContentAround:{
        justifyContent:"space-around"
    },
    justifyContentEvenly:{
        justifyContent:"space-evenly"
    },
    justifyContentBetween:{
        justifyContent:"space-between"
    }

})