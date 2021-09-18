import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SmoothPicker from "react-native-smooth-picker";

export default function BeatSelector({title, callback, numbers, initialIndex = 1}) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  function handleChange (props) {
    setSelectedIndex(props.index);
    callback(props.index)
  };

  const renderItem = ({item, index}) => {
    const selected = index === selectedIndex;
    const selectedStyle = (selected) && styles.selected;
    const componentStyle = StyleSheet.compose(styles.item, selectedStyle);
    return(
      <Text style={componentStyle} selected={selected} >{item}</Text>
    );
  };

  console.log(`${title} initial index: ${initialIndex}`)  // FIXME: this log suggests that interacting with the slider causes the entire page to re-render, not just the component
  // FIXME: the "SmoothPicker" isn't very smooth and is actually quite janky.
  // Maybe look for (or create) an alternative?
  return(
    <View style={styles.container}>
      <Text style={styles.itemText}>{title}</Text>
      <SmoothPicker
        // style={{alignItems: 'center', justifyContent: 'center'}}
        initialScrollToIndex={selectedIndex}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        scrollAnimation={false}
        showsHorizontalScrollIndicator={false}
        magnet
        data={numbers}
        onSelected={(option) => handleChange(option)}
        renderItem={option => renderItem(option)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 150,
    width: '80%',
    borderColor: '#b9b18e',
    borderWidth: 2,
    margin: 20
  },

  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#b9b18e',
    opacity: 0.8,
    width: 40,
    height: 80,
    // borderColor: 'white',
    // borderWidth: 2
  },

  selected: {
    opacity: 1,
    fontSize: 40,
    width: 80
  },

  itemText: {
    textAlign: 'center',
    color: '#b9b18e'
  }
})