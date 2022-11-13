import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './Icons';

export default function Inputs({
  isIcon,
  lable,
  colors,
  error,
  isSecuries,
  isRight,
  iconRight,
  ...props
}) {
  /**
   *<Inpustlable="Password" isSecuries error={''} colors={'green'} />
   */
  var errstyle = error ? 'red' : colors;
  const styledContainer = [styles.container, {borderColor: errstyle}];
  const styledInput = [styles.inputs, {color: errstyle}];

  const [ShowSecury, setShowSecury] = useState(true);
  const setSecury = () => {
    setShowSecury(!ShowSecury);
  };
  var left = () => (
    <View
      style={[
        styles.isIcon,
        {backgroundColor: error ? errstyle : colors ? colors : 'grey'},
      ]}>
      <Icons name="home" color={'#FFF'} size={25} />
    </View>
  );
  var right = () => (
    <>
      {isSecuries && (
        <TouchableOpacity onPress={setSecury} style={styles.isIcon}>
          <Icons
            name={ShowSecury ? 'eye-closed' : 'eye'}
            type="Octicons"
            color={errstyle}
            size={20}
          />
        </TouchableOpacity>
      )}
      {isRight && (
        <View style={styles.isIcon}>
          <Icons name={iconRight} color={errstyle} size={20} />
        </View>
      )}
    </>
  );
  var renderLabel = () => {
    if (lable === '' || lable === undefined) return null;
    else return <Text style={[styles.label, {color: errstyle}]}>{lable}</Text>;
  };
  var renderError = () => {
    if (error === '' || error === undefined) return null;
    else return <Text style={{color: 'red'}}>{error}</Text>;
  };
  return (
    <>
      {isIcon ? (
        <View style={styles.content}>
          {renderLabel()}
          <View style={styledContainer}>
            {left()}
            <TextInput
              placeholder={lable}
              placeholderTextColor={errstyle}
              style={styledInput}
              secureTextEntry={isSecuries && ShowSecury}
              {...props}
            />
            {right()}
          </View>
          {renderError()}
        </View>
      ) : (
        <View style={styles.content}>
          {renderLabel()}
          <View style={styledContainer}>
            <TextInput
              placeholder={lable}
              placeholderTextColor={errstyle}
              style={styledInput}
              secureTextEntry={isSecuries && ShowSecury}
              {...props}
            />
            {right()}
          </View>
          {renderError()}
        </View>
      )}
    </>
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
