import { View, Text } from 'react-native'
import React from 'react'
import Containers from '@components/atoms/Containers'
import { useIsFocused } from '@react-navigation/native'
import WebView from 'react-native-webview'

export default function Binance() {
  return (
    <Containers isFocused={useIsFocused()}>
       <WebView source={{uri: 'https://www.binance.com/en'}} />
    </Containers>
  )
}