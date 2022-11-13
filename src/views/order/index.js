import {View, StyleSheet} from 'react-native';
import React from 'react';
import PesanTabs from '../../nav/pesan-tabs';
import {useIsFocused} from '@react-navigation/native';
import AppBar from '../../components/molecules/AppBar';

export default function Order() {
  return (
    <View style={style.container}>
      <AppBar isFocused={useIsFocused()} title="Pesanan Saya" />
      <PesanTabs />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
