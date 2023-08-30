/**
 * Tab Navigation example - optional navigation using tabs to move between screens
 * It is similar to stack navigation but has Tabs on the bottom of the screen
 * allowing users to move to the different screens by pressing on a Tab
 * React Navigaton provides different option for Tab navigation:
 * 
 *    bottom Tab navigation
 *    Material design-base bottom tab navigation
 *    Material design-base top tab navigation
 * 
 * 
 * Moving between screens:
 * 
 * 
 * 
 */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*
      Vector icons has many font packages to choose from.
	  		e.g.: FontAwesome - a package with close to 800 quality fonts
			To view the fonts and get their names see:
			https://oblador.github.io/react-native-vector-icons/
*/
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

import {ozStore} from './lib/OzStore';

ozStore['new'] = 'New Element';

// create an instance of the createBottomTabNavigator
// This will return an object with two properties: navigator screen.
// This is very similar to the Stack Navigator API 
const Tab = createBottomTabNavigator();

const MyIcon = () => {
  return(
    <Icon name="rocket" size={30} color="#900" />
  );
}

export default function App() {
  const myicons = {
    Welcome: 'sign-in',
    Menu: 'map-o',
  }

  /**
   * Tab.Navigator - options set here apply to all Tab.Screen children.
   * 
   *  screenOptions - is a function with hash param route, inside it the different
   *          actions are defined.
   * 
   *   tabBarIcon - by setting it inside Tab.Navigator->ScreenOptions, its
   *        definition applies to all Tab.Navigator children.
   * 
   *     color - param passed is set by either tabBarActiveTintColor or the inactive
   *             depedning if the given Tab.Screen tab-menu is active or not.
   * 
   *   tabBarIcon - can be also defined inside Tab.Screen tabs inside the options parameter, 
   *                but then you lose generality and you need to define it in each and 
   *                every Tab.Screen tab.
   * 
   **/

  return (
   <>
   <NavigationContainer>
     <Tab.Navigator
        initialRouteName="Welcome"
        screenOptions={({ route }) => ({
           tabBarInactiveTintColor: 'grey',
           tabBarActiveTintColor: 'blue',
           tabBarIcon: ({ color, size }) => {
              return(<Icon name={myicons[route.name]} size={20} color={color} />);
           },
        })}
     >
        <Tab.Screen
            name="Welcome" 
            component={WelcomeScreen} 
            options={{
              tabBarLabel: 'Hello',
            }}
        />
        <Tab.Screen 
            name="Menu" 
            component={MenuItems} 
            options={{
              tabBarLabel: 'Menu',
            }}
        />
      </Tab.Navigator>
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

