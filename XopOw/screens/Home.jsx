import * as React from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Getlat, Getlon} from '../services/Location';
import Angle from '../services/Compass';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const Home = props => {
    let lat = Getlat();
    let lon = Getlon();
    let data = Angle().toString();
    console.log(data);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Text style={{transform: [{ rotate: data + 'deg' }]}}>{'>'}</Text>
        </SafeAreaView>
    );
}

export default Home;