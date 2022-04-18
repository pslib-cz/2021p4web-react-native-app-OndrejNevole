import * as React from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export const Compass = props => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Compass!</Text>
        </SafeAreaView>
    );
}

export default Compass;