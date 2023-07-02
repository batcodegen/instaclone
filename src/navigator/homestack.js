import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import screens
import HomeScreen from '../component/home';
import ProfileScreen from '../component/profile';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
