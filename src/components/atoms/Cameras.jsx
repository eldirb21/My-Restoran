import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Texts from './Texts';
import Icons from './Icons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Cameras({
  title = 'Choose Photo',
  onClose,
  onCamera,
  onLibrary,
  visible,
  onChagePhoto,
}) {
  if (!visible) return null;

  const onOpenCamera = async () => {
    const options = {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result = await launchCamera(options);
    if (result.didCancel) {
      ToastAndroid.show('Canceled', 200);
    } else if (result.errorCode) {
      ToastAndroid.show(JSON.stringify(result.errorCode), 200);
    } else if (result.errorMessage) {
      ToastAndroid.show(JSON.stringify(result.errorMessage), 200);
    } else {
      onChagePhoto(result?.assets[0]);
    }
  };
  const onOpenLibrary = async () => {
    const options = {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result = await launchImageLibrary(options);
    if (result.didCancel) {
      ToastAndroid.show('Canceled', 200);
    } else if (result.errorCode) {
      ToastAndroid.show(JSON.stringify(result.errorCode), 200);
    } else if (result.errorMessage) {
      ToastAndroid.show(JSON.stringify(result.errorMessage), 200);
    } else {
      onChagePhoto(result?.assets[0]);
    }
  };
  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.overlay}
        onPress={onClose}
      />
      <View style={styles.container}>
        <Texts textStyles={styles.titleHeader}>{title}</Texts>
        <View style={styles.trashContainer}>
          <TouchableOpacity onPress={onClose} style={styles.trash}>
            <Icons name="ios-trash" type="Ionicons" size={22} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TouchableOpacity onPress={onOpenCamera} style={styles.btnCamera}>
            <Icons name="camera-alt" size={30} color="grey" />
            <Texts>Camera</Texts>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenLibrary} style={styles.btnCamera}>
            <Icons name="image" size={30} color="grey" />
            <Texts>Galery</Texts>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#DDDDDD',
    padding: 15,
  },
  titleHeader: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  trashContainer: {
    position: 'absolute',
    right: 10,
    top: 8,
    zIndex: 999,
  },
  trash: {
    padding: 8,
    borderRadius: 100,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  btnCamera: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    margin: 10,
    borderRadius: 10,
    marginBottom: 0,
    width: '25%',
  },
});
