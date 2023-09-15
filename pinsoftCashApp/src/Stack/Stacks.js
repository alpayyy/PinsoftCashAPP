import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import HomePage from '../screens/HomePage';
import TransactionsScreen from '../screens/TransactionsScreen';
import FriendsScreen from '../screens/FriendsScreen';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import SendMoneyScreen from '../screens/SendMoneyScreen';
import LoginScreen from '../screens/LoginScreen';


const Stacks = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{}} />
      <Stack.Screen name='HomePage' component={HomePage} options={{}} />
      <Stack.Screen
        name='TransactionsScreen'
        component={TransactionsScreen}
        options={{}}
      />
      <Stack.Screen name='SendMoneyScreen' component={SendMoneyScreen} />
      <Stack.Screen
        name='FriendsScreen'
        component={FriendsScreen}
        options={{}}
      />
      {/* <Stack.Screen
        name='QRScannerScreen'
        component={QRScannerScreen}
        options={{}}
      /> */}
      <Stack.Screen name='Stacks' component={Stacks} options={{}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stacks;