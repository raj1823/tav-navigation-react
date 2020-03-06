import * as React from 'react';
import Home from './src/components/home';
import Second from './src/components/second';
import Third from './src/components/third';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={()=><Home/>} />
      <Tab.Screen name="Second" component={()=><Second/>} />
      <Tab.Screen name="Third" component={()=><Third />} />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
