import * as React from 'react';
import { View, Text, Image,Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TopTabNav } from '../App.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HEADER_HEIGHT =100;

function Header({animatedValue}) {
    const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignContent: 'space-between',
                height: headerHeight,
      }}>
      <View style={styles.nameContainer}>
        <Text style={styles.music}>
          Music <Text style={styles.podcasts}> Podcasts</Text>
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 32,
    fontWeight: '800',
    marginTop:30,
    fontFamily: 'proxima',
  },
  common: {
    fontFamily: 'proxima',
  },
  music: {
    ...this.common,
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  podcasts: {
    ...this.common,
    color: '#808080',
  },
});

export default Header;
