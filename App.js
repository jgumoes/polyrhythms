// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground, BackHandler } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './Screens/InputScreen';
import { styles } from './styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const Stack = createNativeStackNavigator(
  // {transparentCard: true}
);

function WrappedScreen(props) {
  return(
    <View style={[styles.container, {backgroundColor: '#242424'}]}>
      <ImageBackground source={require('./assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" >
        {props.children}
      </ImageBackground>
    </View>
  )
}

export default function App() {

  const wrappedInputScreen = (props) =>{ console.log("wrappedInputScreen" + props); return(<WrappedScreen><InputScreen props={props} /></WrappedScreen>)}
  const wrappedPlayScreen = (props) => { console.log("wrappedPlayScreen" + props.name); return(<WrappedScreen><PlayScreen props={props} /></WrappedScreen>)}
  return (
    <View style={{height: '100%'}}>
      <SafeAreaView />
      <NavigationContainer>
      {/* <ImageBackground source={require('./assets/Wood-Grain-Texture.png')} style={styles.background} resizeMode="cover" > */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
        </Stack.Navigator>
      {/* </ImageBackground> */}
      </NavigationContainer>
    </View>
  );
}