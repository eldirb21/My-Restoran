import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
export type Props = {
  isCenter: boolean;
  isPadding: boolean;
  isFocused: boolean;
  isTranslucent: boolean;
  barColor: string;
  children: any;
};

const Containers: React.FC<Props> = ({
  isCenter,
  isPadding,
  isFocused,
  barColor = '#F8F8F8',
  isTranslucent = false,
  children,
}) => {
  var styled = {};
  var styledArr = [];
  if (isCenter) {
    styledArr.push({
      alignItems: 'center',
      justifyContent: 'center',
    });
  }
  if (isPadding) {
    styledArr.push({
      padding: 20,
    });
  }
  styled = Object.assign({}, ...styledArr);

  return (
    <View style={{ ...styles.container, ...styled }}>
      {isFocused ? (
        <StatusBar
          // showHideTransition={'slide'}
          // hidden
          // networkActivityIndicatorVisible
          translucent={isTranslucent}
          backgroundColor={barColor}
          barStyle={isTranslucent ? "light-content" : "dark-content"}
        />
      ) : null}
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F7',
  },
});
export default Containers;
