import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import Feed from './Screens/Feed';
import Home from './Screens/Home';

// declare const global: {HermesInternal: null | {}};

interface RoutesProps {}

type StackParams = {
  Home: undefined;
};

export type StackNavProps<T extends keyof StackParams> = {
  navigation: StackNavigationProp<StackParams, T>;
  route: RouteProp<StackParams, T>;
};

const Stack = createStackNavigator<StackParams>();
const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Feed') {
            iconName = 'feed';
          }
          return <Icon name="rowing" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};
const Routes = ({}: RoutesProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function App() {
  return <Routes />;
}

export default App;
