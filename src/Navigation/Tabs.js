import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import Api from '../Axios/API';
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Indian News">{() => <Api country="in" />}</Tab.Screen>
      <Tab.Screen name="US News">{() => <Api country="us" />}</Tab.Screen>
    </Tab.Navigator>
  );
};
export default MyTabs;
