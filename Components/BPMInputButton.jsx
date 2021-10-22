import React, { useState} from "react"
import { Modal, View, Text } from "react-native"
import { beats } from "../lib/MSTStore.js";
import { styles } from '../styles.js';
import BeatSelector from "./BeatSelector.jsx";
import CircleButton from "./CircleButton.jsx";

export default function BPMInputButton(){
  const [bpmModalVisable, setBpmModalVisable] = useState(false)
  
  const tempos = [...Array(100).keys()].map(x => x + 50)
  
  // const tempoCallback = (x) => {setSelectedTempoIndex(x)}
  const tempoCallback = (i) => { beats.setIndex("tempo", i) }

  return(
    <>
    <Modal
      animationType="fade"
      transparent={true}
      visible={bpmModalVisable}
      onRequestClose={() => { setBpmModalVisable(!bpmModalVisable) } }
    >
      <View style={styles.bpmModal}>
        <Text style={styles.text}>there should probably be a thing here or something</Text>
        <Text style={styles.text}>Maybe a slider styled after a metronome, with a
          bronze sliding tab and a static windowed nut?</Text>
        <BeatSelector
          title="Tempo (BPM)"
          callback={tempoCallback}
          numbers={tempos}
          initialIndex={beats.tempo} />
        {/* TODO: Replace BeatSelector with a stylised metronome-like input*/}
        {/* TODO: react seems to struggle with such a large list of numbers.
                  What are the implications for a custom picker component? */}
      </View>
    </Modal>
    <CircleButton
        style={styles.startButton}
        title="Tempo"
        onPress={() => setBpmModalVisable(!bpmModalVisable)} />
    </>
  )
}