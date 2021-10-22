/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './Screens/InputScreen';
import { styles } from './styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { beats } from './lib/MSTStore';

const PlayScreen = observer(props => {
  const { leadBeats, rhythmBeats } = props.route.params
  var tempo = beats.tempo
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
})

const Stack = createNativeStackNavigator(
  // {transparentCard: true}
);

export default function App() {

  return (
    <View style={{height: '100%'}}>
      <SafeAreaView />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}