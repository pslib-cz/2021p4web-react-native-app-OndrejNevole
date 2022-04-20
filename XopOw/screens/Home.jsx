import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button  } from 'react-native';
import Angle from '../services/Compass';
import { Getlat, Getlon } from '../services/Location';
import SafeAreaView from 'react-native-safe-area-view';

export const Home = props => {
    const [dLat, setDLat] = useState(50.76526942546564);
    const [dLon, setDLon] = useState(15.053161193749785);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    //let lat = Getlat();
    //let lon = Getlon();
    let compass = Angle() - 90;
    let _Angle = 0;

    const locationReset = props => {
        let dklat = Getlat();
        let fklon = Getlon();
        setLat(dklat);
        setLon(fklon);
    }

    return (
        <SafeAreaView>
            <Text style={styles.h1}>set destination</Text>
            <TextInput style={styles.input} onChangeText={setDLat} placeholder="latitude"></TextInput>
            <TextInput style={styles.input} onChangeText={setDLon} placeholder="longitude"></TextInput>
            <Button onPress={() => {
                console.log('dLat: ' + dLat);
                console.log('dLon: ' + dLon);
                console.log('lat: ' + lat);
                console.log('lon: ' + lon);
                console.log('angle: ' + _Angle);
                _Angle = LatLonToAngle(lat, lon, dLat, dLon);
                console.log('angle: ' + _Angle);
            }} title='confirm' ></Button>
            <View style={styles.values}>
                <Text>{'Angle'}</Text>
                <Text style={{transform: [{ rotate: (-compass - _Angle - 90) + 'deg' }], fontSize: 100}}>{'>'}</Text>
                <Text>{compass + _Angle}</Text>
            </View>
            <View style={styles.values}>
                <Text>{lat}</Text>
                <Text>{lon}</Text>
                <Button title='reset position' onPress={() => {
                    locationReset();
                }} ></Button>
            </View>
        </SafeAreaView>
    );
}

function LatLonToAngle(Slat, Slon, Dlat, Dlon) {
    let DesLon = Dlon - Slon;
    let y = Math.sin(DesLon) * Math.cos(Dlat);
    let x = Math.cos(Slat) * Math.sin(Dlat) - Math.sin(Slat) * Math.cos(Dlat) * Math.cos(DesLon);
    //console.log('y: ' + y);
    //console.log('x: ' + x);
    let brng = Math.atan2(y, x);

    brng = brng * 180 / Math.PI;
    brng = (brng + 360) % 360;
    brng = 360 - brng;
    //console.log('brng: ' + brng);
    return brng;
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
    values: {
        margin: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        height: 40,
        margin: 12,
        padding: 10,
        textAlign: 'center',
    },
  });

export default Home;