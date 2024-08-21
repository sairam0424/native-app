import { Text, View } from "react-native";

import {StyleSheet} from 'react-native';

import React from "react";
import FlexDirectionBasics from "./components/FlexDimesions";
const styles = StyleSheet.create({

  container:{

    marginTop:50,
  },
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  red:{
    color:'red',
  }
})

export default function Index() {
  return (

    <View>

      <h1>React Native 👌</h1>
    <FlexDirectionBasics/>
    </View>
  );
}



