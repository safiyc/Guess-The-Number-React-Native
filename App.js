import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; // prolong screen loading until evertying, ex font, is loaded

import Header from './components/Header';
import StartGameScreen from './components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen';
import GameOverScreen from './components/screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  // content = (
  //   <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  // );

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* <View style={styles.screen} style={styles.screen}> */}
      <Header title={'Guess a Number'} />
      {content}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
