/**
 * Stack Navigation example
 * 
 * Moving between screens:
 * 
 *  See:
 * 
 *  Navigating to a new screen:
 *    https://reactnavigation.org/docs/navigating/
 * 
 *  Passing parameters:
 *    https://reactnavigation.org/docs/params/
 * 
 *  Configuring the header bar:
 *    https://reactnavigation.org/docs/headers/
 *  
 * 
 * Navigation example:
 * 
 *  From any given screen, e.g. WelcomeScreen.js, use the navigation param then
 *  call navigation.navigate("Login") and pass the screen name "Login" in this case
 *      e.g.:

export default function WelcomeScreen({navigation}) {
  
  return (
    <View style={styles.container}>

    ....

      <Pressable onPress={() => navigation.navigate("Login")}> 
        <Text style={styles.buttonText}>Log In</Text> 
      </Pressable> 

    .....
 * 
 * 
 *   Note: to navigate the the first/top screen you can used PopToTop
 *          https://reactnavigation.org/docs/stack-actions/
 * 
 *       e.g.
 *       import { StackActions } from '@react-navigation/native'; 
 *       navigation.dispatch(StackActions.popToTop());
 * 
 * 
 */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

import {ozStore} from './lib/OzStore';

ozStore['new'] = 'New Element';

// define the navigation Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <>
   <NavigationContainer>
       <View style={styles.container}>
          <LittleLemonHeader />

          <Stack.Navigator
              initialRouteName='Welcome'
              screenOptions={{headerStyle: {backgroundColor: 'white',}, headerTitleAlign: 'center' }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
       </View>

        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});   

