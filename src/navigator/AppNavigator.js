import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Import screens
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../component/login';
import HomeStack from './homestack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomStack = () => {
  // const Tabs = useCallback(props => <TabBar {...props} />, []);
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeStack">
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomStack" component={BottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
