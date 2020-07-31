import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';


import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = props => {
  return (
    <View style={{
      ...styles.headerBase, ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid
      })
    }}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  // header: {
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    // backgroundColor: Colors.primary,
    // backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    // borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
    fontSize: 18
  }
});

export default Header;