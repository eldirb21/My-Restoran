import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Containers from '../../components/atoms/Containers';
import {useIsFocused} from '@react-navigation/native';
import Texts from '../../components/atoms/Texts';
import {datas} from '../../services/data';
import CardProductItem from '../../components/molecules/CardProductItem';
import CardProductCarousel from '../../components/molecules/CardProductCarousel';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.titleContainer}>
      <Texts textStyles={styles.titles}>{title}</Texts>
      <TouchableOpacity onPress={onPress}>
        <Texts textStyles={styles.nextBtn}>Selengkapnya</Texts>
      </TouchableOpacity>
    </View>
  );
};
export default function Home({navigation}) {
  const [ActiveSlide, setActiveSlide] = useState(0);
  const [Items, setItems] = useState(datas.home);

  const onNext = screen => {
    navigation.navigate('Products', screen);
  };
  return (
    <Containers isFocused={useIsFocused()} barColor="transparent" isTranslucent>
      <ScrollView>
        <CardProductCarousel
          data={Items.slide}
          activeDotIndex={ActiveSlide}
          isPagination
          onSnapToItem={index => setActiveSlide(index)}
        />

        <View style={{paddingLeft: 20}}>
          <Header title={'Promo Spesial'} onPress={() => onNext('Promo')} />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Items.promoSpesial.map((item, index) => (
              <CardProductItem
                isPromo
                key={index}
                item={item}
                onNav={() => navigation.navigate('ProductDetail', item)}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.content}>
          <Header title={'Makanan'} onPress={() => onNext('Food')} />

          <View style={styles.wrapArr}>
            {Items.makanan.map((item, index) => (
              <CardProductItem
                key={index}
                item={item}
                onNav={() => navigation.navigate('ProductDetail', item)}
              />
            ))}
          </View>
        </View>

        <View style={styles.content}>
          <Header title={'Coffee'} onPress={() => onNext('Coffee')} />

          <View style={styles.wrapArr}>
            {Items.coffee.map((item, index) => (
              <CardProductItem
                key={index}
                item={item}
                onNav={() => navigation.navigate('ProductDetail', item)}
              />
            ))}
          </View>
        </View>

        <View style={styles.content}>
          <Header title={'Non Coffee'} onPress={() => onNext('Non Coffee')} />

          <View style={styles.wrapArr}>
            {Items.nonCoffee.map((item, index) => {
              return (
                <CardProductItem
                  key={index}
                  item={item}
                  onNav={() => navigation.navigate('ProductDetail', item)}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Containers>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  titles: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  nextBtn: {
    color: 'blue',
  },
  content: {
    paddingLeft: 20,
    marginTop: 20,
  },
  wrapArr: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
