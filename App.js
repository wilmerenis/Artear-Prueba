import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
/* OWN COMPONENTS */
import InfinityScroll from './components'
/* OWN COMPONENTS */

export default function App() {
  return (
    <>
      <View style={styles.navbar}>
        <StatusBar
          translucent={true}
          backgroundColor="#338fed"
        />
        <View style={styles.navbarContent}>
          <Text style={styles.navbarText} >Artear</Text>
          <Text><Icon name="menu" size={30} color="#FFF"/></Text>
        </View>
      </View>
      <View style={styles.container}>
        <InfinityScroll/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: "#338FED",
    paddingTop: 25,
    paddingRight: 10,
  },
  navbarText: {
    padding: 20,
    color: "#fff",
    fontWeight: "600",
    fontSize: 18
  },
  navbarContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
