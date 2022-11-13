import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderCurrent from '../views/order/order-current';
import OrderHistory from '../views/order/order-history';
import Texts from '../components/atoms/Texts';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View style={styles.containerTab}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabItem, isFocused && {borderBottomWidth: 2}]}>
            <Texts
              textStyles={{
                fontSize: 15,
                color: isFocused ? '#5cc060' : '#000',
              }}>
              {label}
            </Texts>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function PesanTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="OrderCurrent"
        component={OrderCurrent}
        options={{title: 'Sedang Berlangsung'}}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{title: 'Riwayat'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#5cc060',
    paddingBottom: 10,
  },
});
