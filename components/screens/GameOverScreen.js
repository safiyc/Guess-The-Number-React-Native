import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import BodyText from '../BodyText';
import TitleText from '../TitleText';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} resizeMode="cover" source={require('../../assets/success.png')} /> */}
        {/* images from remote/network must set width/height bc react unable to detect while loading */}
        <Image style={styles.image} resizeMode="cover" source={{ uri: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80' }} />
      </View>
      <View style={styles.resultContainer}>
        {/* <Text> nested in <Text> will inherit styles from upper layer */}
        <BodyText style={styles.resultBody}>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
        <BodyText style={styles.resultBody}>Number was: <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
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
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: '20%',
    marginVertical: 15
  },
  resultBody: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;