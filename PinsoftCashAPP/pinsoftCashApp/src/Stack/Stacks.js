import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomePage from '../screens/HomePage';
import TransactionsScreen from '../screens/TransactionsScreen';
import FriendsScreen from '../screens/FriendsScreen';

const Stacks = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name='loginScreen' component={loginScreen} options={{}} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{}} />
      <Stack.Screen name='HomePage' component={HomePage} options={{}} />
      <Stack.Screen
        name='TransactionsScreen'
        component={TransactionsScreen}
        options={{}}
      />
      <Stack.Screen
        name='FriendsScreen'
        component={FriendsScreen}
        options={{}}
      />
      <Stack.Screen name='Stacks' component={Stacks} options={{}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stacks;
