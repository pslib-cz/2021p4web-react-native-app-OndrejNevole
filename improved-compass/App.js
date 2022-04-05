import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Compass Omorodec</Text>
      <View style={styles.buttonContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Compass"
            component={Compass}
            options={{ title: 'Compass' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});