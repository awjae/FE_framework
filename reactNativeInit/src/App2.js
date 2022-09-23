import React from 'react';
import { Text, View, Image, StyleSheet, TextInput  } from 'react-native';

const App2 = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
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