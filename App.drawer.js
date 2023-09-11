/**
 * Drawer Navigator example - drawer navigation uses the hamburger at the top left,
 * when pressed by default the menu dropdown swings from left to right.
 * However, it is also possible to bring out the menu by swiping from left to right.
 * The drawer can also be placed on the right, it will then slide from right to left.
 * 
 * Drawer navigaton needs to be installed first:
 * 
 *      npm install @react-navigation/drawer
 * 
 * https://reactnavigation.org/docs/drawer-based-navigation/
 * https://reactnavigation.org/docs/drawer-navigator/
 * 
 * Nesting drawers:
 * https://reactnavigation.org/docs/multiple-drawers/
 * 
 * 
 * NOTE: 1) We can only navigate to routes that have been defined on our navigator, we cannot navigate to an arbitrary component.
 *           Only screens/components defined between the container <NavigationContainer>...</ NavigationContainer>
 *           Any component/screen we want to navigate to, must first be defined inside navigator
 *       2) While we must define all routes inside the <NavigationContainer>, we can hide an item via
 *           the hide option, see example LoginScreen below.
 * 
 *      E.G.
 *          To navigate to LoginScreen from WelcomeScreen button, we must define login inside
 *          App.js <NavigationContainer>. See example in this file & inside WelcomeScree.js
 * 
 */
import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

/*
      Vector icons has many font packages to choose from.
	  		e.g.: FontAwesome - a package with close to 800 quality fonts
			To view the fonts and get their names see:
			https://oblador.github.io/react-native-vector-icons/
*/
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuItems from './screens/MenuItems';
import LoginScreen from './components/LoginScreen';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

import {ozStore} from './lib/OzStore';

const Drawer = createDrawerNavigator ();

ozStore['new'] = 'New Element';


export default function App() {
  const myicons = {
    Welcome: 'sign-in',
    Menu: 'map-o',
  }

  /**
   * Drawer.Navigator - options set here apply to all Drawer.Screen children.
   * 
   *  screenOptions - is a function with hash param route, inside it the different
   *          actions are defined.
   * 
   *   drawerIcon - by setting it inside Drawer.Navigator->ScreenOptions, its
   *        definition applies to all Drawer.Navigator children.
   * 
   *     color - param passed is set by either drawerActiveTintColor or the inactive
   *             depedning if the given Drawer.Screen tab-menu is active or not.
   * 
   *   drawerIcon - can also be defined inside Drawer.Screen inside the options parameter, 
   *                but then you lose generality and you need to define it in each and 
   *                every Drawer.Screen
   * 
   **/


  return (
   <>
   <NavigationContainer>
    <View style={styles.container}>
     <LittleLemonHeader />
     <Drawer.Navigator
        initialRouteName="Welcome"
        screenOptions={({ route }) => ({
           drawerStyle: {backgroundColor: "white", width: "50%"},
           drawerInactiveTintColor: 'grey',
           drawerActiveTintColor: 'blue',
           drawerIcon: ({ color, size }) => {
              return(<Icon name={myicons[route.name]} size={20} color={color} />);
           },
        })}

     >
        <Drawer.Screen
            name="Welcome" 
            component={WelcomeScreen} 
        />
        <Drawer.Screen 
            name="Menu" 
            component={MenuItems} 
        />
        <Drawer.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
                  drawerItemStyle: { height: 0 }
            }}
        />
      </Drawer.Navigator>
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

