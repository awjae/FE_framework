import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

const CameraLayer = () => {

  const [type, setType] = useState(CameraType.back);

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <Camera type={type} style={styles.camera}>
      <View>
        <TouchableOpacity onPress={toggleCameraType}>
          <Text>전환</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 10, 
  },
  camera: {
    height: 400,
  }
})

export default CameraLayer