// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeatSelector from './Components/BeatSelector';

function InputScreen() {
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(1) // TODO: store values and 
  const [selectedRhythmIndex, setSelectedRhythmIndex] = useState(1)

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 22]; // TODO: this needs to be different for rhythm and lead, and needs to be mutable so that the user can add values

  const leadCallback = (x) => {setSelectedLeadIndex(x)}
  const rhythmCallback = (x) => {setSelectedRhythmIndex(x)}

  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
        <BeatSelector type='Lead Notes' callback={leadCallback} numbers={numbers} />
        <Text style={styles.startButton}>start</Text>
        <BeatSelector type='Rhythm Notes' callback={rhythmCallback} numbers={numbers}/>
        <Text style={styles.text}>{numbers[selectedLeadIndex]} Lead Notes</Text>
        <Text style={styles.text}>{numbers[selectedRhythmIndex]} Rhythm Notes</Text>
      </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();
const MetronomeTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#242424',
    text: '#b9b18e',
    border: '#b9b18e'
  }
}

export default function App() {
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(1) // TODO: store values and 
  const [selectedRhythmIndex, setSelectedRhythmIndex] = useState(1)

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 22]; // TODO: this needs to be different for rhythm and lead, and needs to be mutable so that the user can add values

  const leadCallback = (x) => {setSelectedLeadIndex(x)}
  const rhythmCallback = (x) => {setSelectedRhythmIndex(x)}
  return (
    <View style={{height: '100%'}}>
      <NavigationContainer theme={MetronomeTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="InputScreen" component={InputScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    color: '#b9b18e'
  },
  startButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#b9b18e',
    // borderRadius: '50%'
  }
});
