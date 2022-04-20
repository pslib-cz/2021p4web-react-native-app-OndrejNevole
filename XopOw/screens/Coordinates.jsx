import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet  } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import * as Location from 'expo-location';
import { Button } from 'react-native-web';
import {Getlat, Getlon} from '../services/Location';

export const Coordinates = props => {
    let lat = Getlat();
    let lon = Getlon();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Current Coordinates</Text>
            <Text>{lat}, {lon}</Text>
        </SafeAreaView>
    );
}

export default Coordinates;