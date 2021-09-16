import React from 'react';
import { Pressable, StyleSheet, Text, Dimensions } from "react-native";

export default function CircleButton({title, onPress}){
  const screenWidth = Math.round(Dimensions.get("window").width);
  const diameter = screenWidth / 5; //TODO: move constant into a param
  return(
      <Pressable
        onPress={onPress}
        style={[circleStyles.button, {
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2
        }]}
      >
        <Text style={circleStyles.text}>{title}</Text>
      </Pressable>
  )
}

const circleStyles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    borderColor: '#b9b18e',
    borderWidth: 2,
  },
  text: {
    color: '#b9b18e',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})