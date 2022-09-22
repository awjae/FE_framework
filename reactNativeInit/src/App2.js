import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const App2 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Image
        style={styles.tinyLogo}
        source={'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   paddingTop: 50,
  // },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  // logo: {
  //   width: 66,
  //   height: 58,
  // },
});

export default App2;