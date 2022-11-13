import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Texts from '../../components/atoms/Texts';
import {useNavigation} from '@react-navigation/native';
import Icons from '../atoms/Icons';

export type AppBar = {
  isFocused: boolean;
  barColor: string;
  title: string;
  isGoBack: boolean;
  onBack: any;
};

const AppBar: FC<AppBar> = ({
  isFocused,
  barColor = '#FFF',
  title,
  isGoBack,
  onBack,
}) => {
  const nav = useNavigation();

  const onGoBack = () => {
    if (isGoBack) {
      nav.goBack();
    } else {
      onBack();
    }
  };

  return (
    <>
      {isFocused ? (
        <StatusBar barStyle={'dark-content'} backgroundColor={barColor} />
      ) : null}
      <View style={[style.header, {backgroundColor: barColor}]}>
        {(isGoBack || onBack) && (
          <TouchableOpacity onPress={() => onGoBack()}>
            <Icons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>
        )}
        <Texts textStyles={{fontSize: 18, marginLeft: 15}}>{title}</Texts>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 10,
  },
});

export default AppBar;
