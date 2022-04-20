import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import React, { useState, useEffect } from 'react';
import Angle from '../services/Compass';

export const Compass = props => {
  let angle = Angle() - 90;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.values}>
            <Text>{'Compass'}</Text>
            <Text>{angle}</Text>
            <Text style={{transform: [{ rotate: (-angle - 90) + 'deg' }], fontSize: 100}}>{'>'}</Text>
        </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  values: {
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default Compass;