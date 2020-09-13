import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  GestureResponderEvent,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

interface HomeProps {}
const Home = ({}: HomeProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default Home;
