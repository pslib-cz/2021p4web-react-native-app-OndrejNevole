import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Magnetometer, MagnetometerUncalibrated } from 'expo-sensors';

export function Compass_dk() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  Magnetometer.setUpdateInterval(160);
  Magnetometer.addListener(result => {
    setData(result)
  });
/*
  function _angle(){
    let angle = 0;
    if (data) {
      let { x, y, z } = data;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(angle);
  }
*/
  return data;
}

export default function Angle() {
  let angle = 0;
  let _data = Compass_dk();
  let { x, y, z } = _data;
  if (Math.atan2(y, x) >= 0) {
    angle = Math.atan2(y, x) * (180 / Math.PI);
  } else {
    angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
  }
  return Math.round(angle);
}