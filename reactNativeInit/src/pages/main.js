
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListHorizontal from '../components/ListHorizontal';

const DisplayAnImage = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <ListHorizontal></ListHorizontal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 10, 
  }
})

export default DisplayAnImage;