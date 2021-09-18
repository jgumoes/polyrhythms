import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, Modal } from 'react-native';
import { useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeatSelector from '../Components/BeatSelector';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CircleButton from '../Components/CircleButton';
import { styles } from '../styles.js';

export default function InputScreen({navigation}) {
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(1) // TODO: store values persistantly and recall them on startup
  const [selectedRhythmIndex, setSelectedRhythmIndex] = useState(1)
  const [bpmModalVisable, setBpmModalVisable] = useState(false)
  const [selectedTempoIndex, setSelectedTempoIndex] = useState(50)

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 22]; // TODO: this needs to be different for rhythm and lead, and needs to be mutable so that the user can add values
  const tempos = [...Array(100).keys()].map(x => x + 50)
  const leadCallback = (x) => {setSelectedLeadIndex(x)}
  const rhythmCallback = (x) => {setSelectedRhythmIndex(x)}
  const tempoCallback = (x) => {setSelectedTempoIndex(x)}

  return(
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
        <BeatSelector title='Lead Notes' callback={leadCallback} numbers={numbers} />
        <View style={styles.centerConsole}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={bpmModalVisable}
            onRequestClose={() => {setBpmModalVisable(!bpmModalVisable)}}
          >
            <View style={styles.bpmModal}>
              <Text style={styles.text}>there should probably be a thing here or something</Text>
              <Text style={styles.text}>Maybe a slider styled after a metronome, with a 
              bronze sliding tab and a static windowed nut?</Text>
              <BeatSelector
                title="Tempo (BPM)"
                callback={tempoCallback}
                numbers={tempos}
                initialIndex={selectedTempoIndex}
              />
              {/* TODO: Replace BeatSelector with a stylised metronome-like input*/}
              {/* TODO: react seems to struggle with such a large list of numbers.
                What are the implications for a custom picker component? */}
            </View>
          </Modal>
          <CircleButton
            style={styles.startButton}
            title="Tempo"
            onPress={() => setBpmModalVisable(!bpmModalVisable)}
          />
          <CircleButton
            style={styles.startButton}
            title="Start"
            onPress={() => navigation.navigate('PlayScreen', {
              leadBeats: numbers[selectedLeadIndex],
              rhythmBeats: numbers[selectedRhythmIndex],
              tempo: tempos[selectedTempoIndex]
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

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     flex: 1,
//     flexDirection: 'column',
//     // backgroundColor: '#242424',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   background: {
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%'
//   },
//   text: {
//     color: '#b9b18e'
//   },
//   startButton: {
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     color: '#b9b18e',
//     marginVertical: '5px',
//     paddingVertical: '5px',
//   },
//   centerConsole: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     width: "100%"
//   },
//   bpmModal: {
//     backgroundColor: "#000000",
//     // opacity: 0.5,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//   }
// });