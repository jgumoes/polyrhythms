import { StyleSheet } from "react-native";

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
    width: '100%',
    height: '100%',
    backgroundColor: '#242424'
  },
  text: {
    color: '#b9b18e'
  },
  startButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#b9b18e',
    marginVertical: '5px',
    paddingVertical: '5px',
  },
  centerConsole: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  bpmModal: {
    backgroundColor: "#000000",
    // opacity: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }
});

export { styles }