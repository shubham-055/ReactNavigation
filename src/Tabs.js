import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import Trainees from './Trainees';
import Mentor from './MentorInfo';
const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trainees" component={Trainees} />
        <Tab.Screen name="Mentor" component={Mentor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MyTabs;