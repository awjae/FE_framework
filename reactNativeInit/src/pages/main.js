
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View, PermissionsAndroid, TouchableOpacity, Text } from 'react-native';
import ListHorizontal from '../components/ListHorizontal';
import { Camera, CameraType } from 'expo-camera';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "카메라 권한 주세요",
        message:
          "카메라 권한 주면 착한 사람",
        buttonNeutral: "나중에",
        buttonNegative: "취소",
        buttonPositive: "허용"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("수락");
    } else {
      console.log("거절");
    }
  } catch (err) {
    console.warn(err);
  }
};

const DisplayAnImage = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const goCameraHandler = () => {
    requestCameraPermission();
  }

  if (!permission) {
    console.log("permission false");
  }
  if (!permission?.granted) {
    console.log("permission granted false");
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ListHorizontal></ListHorizontal>
      <Button
        title='카메라 권한'
        onPress={ requestPermission }
      />
      <View>
        <Camera type={type} style={styles.camera}>
          <View>
            <TouchableOpacity onPress={toggleCameraType}>
              <Text>전환</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 10, 
  },
  camera: {
    height: 200,
  }
})

export default DisplayAnImage;