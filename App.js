import { useState } from "react";
import { StyleSheet, ImageBackground, saveAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import Colors from "./constans/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen} // This go to the parent component that hold the image tage (in the background)
        imageStyle={styles.backgroundImage} // This go to the (image) tag in the background
      >
        <saveAreaView style={{ flex: 1 }}>{screen}</saveAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// There is no (inheritance of styles) in react native
// Button => 1)View 2)Text 3)Pressable
// ** alignItems => default value = ((stretch)), so it I make it (center) the width or height gets smaller
