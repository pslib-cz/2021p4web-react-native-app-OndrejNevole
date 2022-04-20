import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet  } from 'react-native';
import * as Location from 'expo-location';


export function Getlat() {
  const [lat, setLat] = useState('null');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let Glat = await (await Location.getCurrentPositionAsync({})).coords.latitude;
      setLat(Glat);
    })();
  }, []);

  return JSON.stringify(lat);
}

export function Getlon() {
  const [lon, setLon] = useState('null');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let Glon = await (await Location.getCurrentPositionAsync({})).coords.longitude;
      setLon(Glon);
    })();
  }, []);

  return JSON.stringify(lon);
}