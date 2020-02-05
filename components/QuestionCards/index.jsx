import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardHeader: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#338fed",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowRadius: 7,
    shadowOpacity: 0.4
  },
  cardContent: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 3,
    shadowRadius: 6.27,
    shadowOpacity: 1,
  },
  cardText: {
    padding: 10
  }
})

export default function Card({pregunta, respuesta, numero}) {
  return(
    <View style={styles.cardContent}>
      <View style={styles.cardHeader}>
        <Text style={{ color: '#333', textTransform: "capitalize" }} >{`${numero}. ${pregunta.toLowerCase()}`}</Text>
      </View>
      <View style={styles.cardText} >
        <Text style={{ color: '#333', textTransform: "capitalize" }} >{respuesta}</Text>
      </View>
    </View>
  )
}