// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Modal } from 'react-native';
import { useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeatSelector from './Components/BeatSelector';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CircleButton from './Components/CircleButton';
import InputScreen from './Screens/InputScreen';
import { styles } from './styles.js';

function PlayScreen({ route }) {
  const { leadBeats, rhythmBeats, tempo } = route.params
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
        <Text style={styles.text}>{leadBeats} Lead Beats</Text>
        <Text style={styles.text}>{rhythmBeats} Rhythm Beats</Text>
        <Text style={styles.text}>{tempo} BPM</Text>
        <Text style={styles.text}>Someone should finish making this screen...</Text>
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
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}