import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../BodyText';
import TitleText from '../TitleText';
import Colors from '../../constants/colors';
import MainButton from '../../components/MainButton';

const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is over!</TitleText>
        <View style={{ ...styles.imageContainer, ...{ width: availableDeviceWidth * .7, height: availableDeviceHeight * .7, borderRadius: (availableDeviceWidth * .7) / 2, marginVertical: availableDeviceHeight / 30 } }}>
          {/* <Image style={styles.image} resizeMode="cover" source={require('../../assets/success.png')} /> */}
          {/* images from remote/network must set width/height bc react unable to detect while loading */}
          <Image style={styles.image} resizeMode="cover" source={{ uri: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80' }} />
        </View>
        <View style={{ ...styles.resultContainer, ...{ marginVertical: availableDeviceHeight / 60 } }}>
          {/* <Text> nested in <Text> will inherit styles from upper layer */}
          <BodyText style={{ ...styles.resultBody, ...{ fontSize: setAvailableDeviceHeight < 400 ? 16 : 20 } }}>Number of rounds:
            <Text style={styles.highlight}>{props.roundsNumber}</Text>
            {/* </BodyText>
          <BodyText style={styles.resultBody}> */}
            Number was:
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    // width: Dimensions.get('window').width * .7,
    // height: Dimensions.get('window').width * .7,
    // borderRadius: Dimensions.get('window').width * .7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    // marginVertical: Dimensions.get('window').height / 20
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
    // marginVertical: Dimensions.get('window').height / 40
  },
  resultBody: {
    textAlign: 'center',
    // fontSize: 20
  }
});

export default GameOverScreen;