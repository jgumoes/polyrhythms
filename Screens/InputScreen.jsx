/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import BeatSelector from '../Components/BeatSelector';
import CircleButton from '../Components/CircleButton';
import { styles } from '../styles.js';
import BPMInputButton from '../Components/BPMInputButton';
// import { beats } from '../lib/MSTStore';

export default function InputScreen({navigation}) {
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(1) // TODO: store values persistantly and recall them on startup
  const [selectedRhythmIndex, setSelectedRhythmIndex] = useState(1)
  // const [selectedTempoIndex, setSelectedTempoIndex] = useState(50)

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 22]; // TODO: this needs to be different for rhythm and lead, and needs to be mutable so that the user can add values
  // const tempos = [...Array(100).keys()].map(x => x + 50)
  const leadCallback = (x) => {setSelectedLeadIndex(x)}
  const rhythmCallback = (x) => {setSelectedRhythmIndex(x)}
  // const tempoCallback = (x) => {setSelectedTempoIndex(x)}

  return(
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
        <BeatSelector title='Lead Notes' callback={leadCallback} numbers={numbers} />
        <View style={styles.centerConsole}>
          <BPMInputButton />
          <CircleButton
            style={styles.startButton}
            title="Start"
            onPress={() => navigation.navigate('PlayScreen', {
              leadBeats: numbers[selectedLeadIndex],
              rhythmBeats: numbers[selectedRhythmIndex]
              // tempo: tempos[selectedTempoIndex]
            })}
          />
        </View>
        <BeatSelector title='Rhythm Notes' callback={rhythmCallback} numbers={numbers}/>
        <Text style={styles.text}>{numbers[selectedLeadIndex]} Lead Notes</Text>
        <Text style={styles.text}>{numbers[selectedRhythmIndex]} Rhythm Notes</Text>
      </ImageBackground>
    </View>
  )
}
