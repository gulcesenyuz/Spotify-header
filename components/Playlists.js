import React from 'react';
import {Text,ScrollView, View,SafeAreaProvider,AnimatedHeader,SafeAreaView,Animated, StyleSheet} from 'react-native';
import DATA from './data';



export default function Playlists ({offset}){
  return(

        <ScrollView
          style={{ flex: 1, backgroundColor: 'white' }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          {DATA.map(item => (
            <View
              key={item.id}
              style={{
                marginBottom: 20
              }}
            >
              <Text style={{ color: '#101010', fontSize: 32 }}>
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>

  );

}
 
