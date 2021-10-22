/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import BeatSelector from '../Components/BeatSelector';
import CircleButton from '../Components/CircleButton';
import { styles } from '../styles.js';
import BPMInputButton from '../Components/BPMInputButton';
import { beats } from '../lib/MSTStore';
// import { beats } from '../lib/MSTStore';

export default function InputScreen({navigation}) {

  return(
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
        <BeatSelector title='Lead Notes' valueName="lead" />
        <View style={styles.centerConsole}>
          <BPMInputButton />
          <CircleButton
            style={styles.startButton}
            title="Start"
            onPress={() => navigation.navigate('PlayScreen', {
              // leadBeats: numbers[selectedLeadIndex],
              // rhythmBeats: numbers[selectedRhythmIndex]
              // tempo: tempos[selectedTempoIndex]
            })}
          />
        </View>
        <BeatSelector title='Rhythm Notes' valueName="rhythm" />
        <Text style={styles.text}>{beats.getValue("lead")} Lead Notes</Text>
        <Text style={styles.text}>{beats.getValue("rhythm")} Rhythm Notes</Text>
      </ImageBackground>
    </View>
  )
}
