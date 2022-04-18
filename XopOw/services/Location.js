import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet  } from 'react-native';
import * as Location from 'expo-location';
import { Button } from 'react-native-web';

const Geo_Location = ({Lat, Lon}) => {
    const [errorMsg, setErrorMsg] = useState('null');
    const [lat, setLat] = useState('null');
    const [lon, setLon] = useState('null');
  
    let laat;
    let loon;

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let Glat = await (await Location.getCurrentPositionAsync({})).coords.latitude;
        let Glon = await (await Location.getCurrentPositionAsync({})).coords.longitude;
        setLat(Glat);
        setLon(Glon);
      })();
    }, []);

    if (errorMsg) {
        laat = errorMsg;
    } else if (lat) {
        laat = JSON.stringify(lat);
        console.log(laat);
        loon = JSON.stringify(lon);
        console.log(loon);
    }

    return {
        Lat: laat,
        Lon: loon
    };
}

export default Geo_Location;