import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function TextArea({lable = '',numberLines=3, colors, error, ...props}) {
  /** <TextArea
        isIcon
        isSecuries
        lable="Notes"
        error={''}
        colors={'green'}
      /> */
  var errstyle = error ? 'red' : colors;
  const styledContainer = [styles.container, {borderColor: errstyle}];
  const styledInput = [styles.inputs, {color: errstyle}];

  var renderLabel = () => {
    if (lable === '' || lable === undefined) return null;
    else return <Text style={[styles.label, {color: errstyle}]}>{lable}</Text>;
  };
  var renderError = () => {
    if (error === '' || error === undefined) return null;
    else return <Text style={{color: 'red'}}>{error}</Text>;
  };
  return (
    <View style={styles.content}>
      {renderLabel()}
      <View style={styledContainer}>
        <TextInput
          multiline
          numberOfLines={numberLines}
          placeholder={lable}
          placeholderTextColor={errstyle}
          style={styledInput}
          {...props}
        />
      </View>
      {renderError()}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginBottom: 15,
  },
  container: {
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 1,
  },
  inputs: {
    color: '#000',
    flex: 1,
    padding: 8,
    borderRadius: 15,
    textAlignVertical: 'top',
  },
  isIcon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  iconFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '600',
  },
});
