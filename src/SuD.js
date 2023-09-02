import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Trainees from './Trainees';
import Mentor from './MentorInfo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SuD = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="SuT" component={SuT} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const SuT = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackNav" component={StackNav} />
      <Tab.Screen name="Trainees" component={Trainees} />
      <Tab.Screen name="Mentor" component={Mentor} />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default SuD;
