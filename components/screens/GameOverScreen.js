import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';

import BodyText from '../BodyText';
import TitleText from '../TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} resizeMode="cover" source={require('../../assets/success.png')} /> */}
        {/* images from remote/network must set width/height bc react unable to detect while loading */}
        <Image style={styles.image} resizeMode="cover" source={{ uri: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80' }} />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default GameOverScreen;