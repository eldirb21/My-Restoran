import React from 'react';
import {dataTabs} from './nav-data';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Texts from '../components/atoms/Texts';
import {
  iLikeActive,
  iLikeInactive,
  iOrderActive,
  iOrderInactive,
  iRestorActive,
  iRestorInactive,
  iUserActive,
  iUserInactive,
} from '../assets/image';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabBg}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        var iconName = null;
        var isColor = isFocused ? '#673ab7' : '#222';
        if (label === 'Beranda') {
          iconName = isFocused ? iRestorActive : iRestorInactive;
          isColor = isFocused ? '#23a7af' : '#222';
        } else if (label === 'Pesanan') {
          iconName = isFocused ? iOrderActive : iOrderInactive;
          isColor = isFocused ? '#5cc060' : '#222';
        } else if (label === 'Favorit') {
          iconName = isFocused ? iLikeActive : iLikeInactive;
          isColor = isFocused ? '#e44e84' : '#222';
        } else if (label === 'Profile') {
          iconName = isFocused ? iUserActive : iUserInactive;
          isColor = isFocused ? '#54ad43' : '#222';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Image style={styles.icon} source={iconName} />
            <Texts textStyles={{color: isColor}}>{label}</Texts>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tabBg: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
    margin: 5,
  },
});

export default function NavTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      {dataTabs.map((x, i) => (
        <Tab.Screen
          key={i}
          name={x.name}
          component={x.component}
          options={{title: x.title}}
        />
      ))}
    </Tab.Navigator>
  );
}
