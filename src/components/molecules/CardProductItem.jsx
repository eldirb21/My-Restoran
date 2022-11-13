import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Texts from '../atoms/Texts';
import FUNC from '../../utils/Func';

const {width, height} = Dimensions.get('window');
export default function CardProductItem({item, onNav, isPromo}) {
  return isPromo ? (
    <TouchableOpacity onPress={onNav} style={styles.containerIsPromo}>
      <Image
        resizeMode="contain"
        style={styles.imgPromo}
        source={{uri: item.image}}
      />
      <View style={styles.content}>
        <Texts textStyles={styles.names}>{item.name}</Texts>

        <Texts textStyles={styles.priceLine}>
          {FUNC.currency(item.price, true)}
        </Texts>
        <Texts textStyles={styles.promoPrice}>
          {FUNC.currency(item.price - parseFloat(5 / 100))}
        </Texts>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onNav} style={[styles.container, styles.shadow]}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: item.image}}
      />
      <View style={styles.content}>
        <Texts textStyles={styles.names}>{item.name}</Texts>
        <Texts>{FUNC.currency(item.price - parseFloat(5 / 100))}</Texts>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  containerIsPromo: {
    height: width / 1.8,
    width: width / 2.6,
    margin: 3,
    borderRadius: 8,
  },
  container: {
    height: width / 1.5,
    width: width / 2 - 20,
    margin: 3,
    borderRadius: 10,
    marginBottom: 4,
    backgroundColor: '#FFF',
  },
  imgPromo: {
    borderRadius: 8,
    width: '100%',
    height: width / 3.2,
    backgroundColor: '#FFF',
  },
  image: {
    borderRadius: 8,
    width: '100%',
    height: width / 2.5,
    backgroundColor: '#FFF',
  },
  content: {
    padding: 5,
    width: '100%',
  },
  names: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },
  priceLine: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  promoPrice: {
    color: 'red',
  },
});
