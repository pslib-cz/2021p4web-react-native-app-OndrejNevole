import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Compass = ({ navigation }) => {
const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _fast = () => {
    Magnetometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener(result => {
        setData(result);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Magnetometer:</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
        <View style={[styles.box, {
          transform: [{ rotate: z.toString() + 'deg' }]
          }]}>
        <Text style={styles.text}>{'>'}</Text>
      </View>
      </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

export default Compass;