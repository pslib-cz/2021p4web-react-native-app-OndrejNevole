import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Magnetometer, MagnetometerUncalibrated } from 'expo-sensors';
import React, { useState, useEffect } from 'react';
import Angle from '../services/Compass';

export const Compass = props => {
  let angle = Angle();
  const _degree = (angle) => {
    return angle - 90 >= 0 ? angle - 90 : angle + 271;
  };
  let realAngle = _degree(angle);
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Compass</Text>
            <Text>{realAngle}</Text>
            <Text style={{transform: [{ rotate: 360 - realAngle + 'deg' }]}}>{'>'}</Text>
        </SafeAreaView>
    );
}

export default Compass;