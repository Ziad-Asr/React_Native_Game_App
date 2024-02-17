import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

// There is no (inheritance of styles) in react native
// Button => 1)View 2)Text 3)Pressable
// ** alignItems => default value = ((stretch)), so it I make it (center) the width or height gets smaller
