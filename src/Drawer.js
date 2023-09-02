import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Trainees from './Trainees';
import Mentor from './MentorInfo';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Trainees" component={Trainees} />
        <Drawer.Screen name="Mentor" component={Mentor} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNav;
