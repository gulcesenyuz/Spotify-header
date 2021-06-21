import React, { useState, useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, Animated, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Playlists from './components/Playlists';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Header from './components/Header';

const Tab = createMaterialTopTabNavigator();
export function TopTabNav({ offset }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Playlists') {
              return <Text size={size} color={color} />;
            } else if (route.name === 'Artists') {
              return <Text size={size} color={color} />;
            } else if (route.name === 'Albums') {
              return <Text size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          labelStyle: { textTransform: 'none', fontFamily: 'proxima', fontWeight: '600' },
          style: {
            backgroundColor: '#121212', borderTopColor: "red",
            elevation: 0,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 0 }, // change this for more shadow
            shadowOpacity: 0.0,
            shadowRadius: 0

          },
          indicatorStyle: { backgroundColor: '#1DB954' },

          activeTintColor: 'white',
          inactiveTintColor: '#999999',
        }}>
        <Tab.Screen
          name="Playlists"
          component={Playlists(offset)
          }
          options={{ title: 'Playlists' }}
        />
        <Tab.Screen
          name="Artists"
          component={Artists}
          options={{ title: 'Artists' }}
        />
        <Tab.Screen
          name="Albums"
          component={Albums}
          options={{ title: 'Albums' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const offset = useRef(new Animated.Value(0)).current;
  const [loaded] = useFonts({
    proxima: require('./assets/fonts/Proxima.ttf'),
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <Header animatedValue={offset} />
        <TopTabNav offset={offset} />


      </SafeAreaView>

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  tabtext: {
    color: '#999999',
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'proxima',
  },
});
