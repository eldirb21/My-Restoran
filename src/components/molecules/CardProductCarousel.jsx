import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Texts from '../atoms/Texts';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function CardProductCarousel({
  data,
  activeDotIndex,
  isPagination,
  ...props
}) {
  function _renderItemWithParallax({item, index}) {
    return (
      <ImageBackground
        onPress={() => useNavigation().navigate('Products')}
        key={index}
        source={{uri: item.image}}
        style={{
          height: '100%',
          width: width,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => useNavigation().navigate('Products')}
          style={{
            padding: 10,
            width: '70%',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,.2)',
            marginBottom: 30,
            zIndex: 9999,
          }}>
          <Texts textStyles={{color: '#FFF', fontSize: 20}}>
            {item.subject}
          </Texts>
          <Texts textStyles={{color: '#FFF'}}>{item.desc}</Texts>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
  return (
    <View style={{height: width / 1.8}}>
      <Carousel
        data={data}
        renderItem={_renderItemWithParallax}
        sliderWidth={data.length}
        firstItem={activeDotIndex}
        itemWidth={width}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        autoplay={true}
        autoplayDelay={1000}
        {...props}
      />
      {isPagination && (
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeDotIndex}
          dotContainerStyle={{marginBottom: -25}}
          containerStyle={styles.paginContain}
          dotStyle={styles.paginDot}
          inactiveDotStyle={{backgroundColor: 'yellow'}}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  paginContain: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  paginDot: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  titles: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  nextBtn: {
    color: 'blue',
  },
  slider: {
    overflow: 'visible',
  },
  sliderContentContainer: {
    height: '100%',
  },
});
