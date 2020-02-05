import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  footer: {
    position: 'relative',
    width: "100%",
    height: 50,
  }
})

export default function FooterList() {
  return(
    <View style={style.footer}>
      <ActivityIndicator animating color="#338FED" />
    </View>
  )
}