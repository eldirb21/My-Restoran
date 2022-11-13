import {View, Text} from 'react-native';
import React from 'react';
import Containers from '../../components/atoms/Containers';
import {useIsFocused} from '@react-navigation/native';
import Texts from '../../components/atoms/Texts';

export default function Products() {
  return (
    <Containers isFocused={useIsFocused()}>
      <View>
        <Texts>Promo</Texts>
        <View></View>
      </View>
      <View>
        <Texts>Combo</Texts>
        <View></View>
      </View>
      <View>
        <Texts>Fried Chicken</Texts>
        <View></View>
      </View>
      <View>
        <Texts>Coffee</Texts>
        <View></View>
      </View>
      <View>
        <Texts>Non Coffee</Texts>
        <View></View>
      </View>
      <View>
        <Texts>Food</Texts>
        <View></View>
      </View>
    </Containers>
  );
}
