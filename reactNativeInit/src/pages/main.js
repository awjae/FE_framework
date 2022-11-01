
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View, PermissionsAndroid, TouchableOpacity, Text } from 'react-native';
import ListHorizontal from '../components/ListHorizontal';
import CameraLayer from '../components/CameraLayer';


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
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ListHorizontal></ListHorizontal>
      {/* <Button
        title='카메라 권한'
        onPress={ requestCameraPermission }
      /> */}
      <View>
        <CameraLayer></CameraLayer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 10, 
  },
})

export default DisplayAnImage;