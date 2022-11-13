import {View, Text} from 'react-native';
import React from 'react';
import Containers from '@components/atoms/Containers';
import {useIsFocused} from '@react-navigation/native';
import WebView from 'react-native-webview';

export default function Ajaib() {
  return (
    <Containers isFocused={useIsFocused()}>
      <WebView source={{uri: 'https://invest.ajaib.co.id/'}} />
    </Containers>
  );
}
