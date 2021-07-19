// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import BeatSelector from './Components/BeatSelector';

export default function App() {
  const [selectedLead, setSelectedLead, selectedRythm, setSelectedRhythm] = useState(1) // TODO: store values and 
  const leadCallback = (x) => {setSelectedLead(x)}
  const rhythmCallback = (x) => {setSelectedRhythm(x)}
  return (
    <View style={{height: '100%'}}>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <ImageBackground source={require('./assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
          <BeatSelector type='Lead Notes' callback={leadCallback}/>
          <BeatSelector type='Rhythm Notes' callback={rhythmCallback}/>
          <Text style={styles.text}>{selectedLead} Lead Notes</Text>
          <Text style={styles.text}>{selectedRhythm} Rhythm Notes</Text>
          {/* <Text>These are some words</Text> */}
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
