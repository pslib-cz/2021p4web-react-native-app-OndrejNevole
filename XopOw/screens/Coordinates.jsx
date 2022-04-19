import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet  } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import * as Location from 'expo-location';
import { Button } from 'react-native-web';
//import Geo_Location from '../services/Location';

export const Coordinates = props => {
    const [errorMsg, setErrorMsg] = useState('null');
    const [lat, setLat] = useState('null');
    const [lon, setLon] = useState('null');
  /*
    let dkLat = 'null';
    let dkLon = 'null';

    Geo_Location(dkLat, dkLon);

    setLat(dkLat);
    setLon(dkLon);*/

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
  
    let _lat = 'Waiting..';
    let _lon = 'waiting..';
    if (errorMsg) {
        _lat = errorMsg;
    } else if (lat) {
        _lat = JSON.stringify(lat);
        console.log(_lat);
        _lon = JSON.stringify(lon);
        console.log(_lon);
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Current Coordinates</Text>
            <Text>{lat}, {lon}</Text>
        </SafeAreaView>
    );
}

export default Coordinates;