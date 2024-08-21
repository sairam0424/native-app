import { Text, View, Image, StyleSheet, Button } from "react-native";
import React from "react";
import FlexDirectionBasics from "./components/FlexDimesions";
import ButtonBasics from "./components/ButtonComp";
// import { NavigationContainer } from "@react-navigation/native";
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center', // Center content horizontally
  },
  bigBlue: {
    color: '#00ffff',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20, // Add some space below the text
  },
  red: {
    color: 'red',
  },
});

export default function Index() {
  return (

    <View style={styles.container}>
      <Text style={styles.bigBlue}>React Native 👌</Text>
      <Text style ={ styles.bigBlue}>🙈🙊🐵</Text>
      <Image source={require('../assets/images/react-logo.png')} style={{ width: 100, height: 100 }} />

      <Button onPress={() => {

        console.log("You Pressed")
        
      }}
      title="Touch Me"/>
      <ButtonBasics/>
      {/* <FlexDirectionBasics /> */}
    </View>

  );
}
