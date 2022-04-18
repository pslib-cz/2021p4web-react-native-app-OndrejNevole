import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet  } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import * as Location from 'expo-location';
import { Button } from 'react-native-web';

export const Coordinates = props => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [dLat, setDLat] = useState("latitude");
    const [number, onChangeNumber] = React.useState(null);
  
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
            <Text>{_lat}, {_lon}</Text>
            <Text>Destination Coordinates</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDLat}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Coordinates;