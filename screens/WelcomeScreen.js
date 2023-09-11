import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';


export default function WelcomeScreen({navigation}) {
  
  return (
    <View style={styles.container}>
       <View style={{ flexDirection: 'row',alignContent: 'center', marginTop: "2%" }}>
          <Image
            style={styles.image}
            source={require('../img/logo.png')}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
          />
          <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <Pressable onPress={() => navigation.navigate("Menu")}> 
        <Text style={styles.buttonText}>Menu</Text> 
      </Pressable> 
      <Pressable onPress={() => {navigation.navigate("Login")}}> 
        <Text style={styles.buttonText}>Log In</Text> 
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginLeft: "5%",
  },
  regularText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: "5%",
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: "5%",
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 25,
  },
});
