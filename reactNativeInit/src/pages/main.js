
import React from 'react';
import { View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const DisplayAnImage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container}
        horizontal={true}
        >
        {/* <Image
          style={styles.tinyLogo}
          source={require('@expo/snack-static/react-native-logo.png')}
        /> */}
        <Image
          style={styles.image}
          source={require('../../assets/favicon.png')}
        />

        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Image
          style={styles.image}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 10, 
  },
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row'
    // overflow: 'auto',
  },
  image: {
    width: 150,
    margin: 10,
    height: 150,
    //display: 'inline-block', Failed %s type: %s%s, prop, Invalid prop `display` of value `inline-block` supplied to `Image`, expected one of ["none","flex"]
  },
});

export default DisplayAnImage;