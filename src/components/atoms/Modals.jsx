import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Modals({visible, onModal}) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onModal}
      transparent
      animationType="fade"
      statusBarTranslucent>
      <TouchableOpacity style={styles.overlay} onPress={onModal} />
      <View style={styles.container}>
        
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  container: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
  },
});
