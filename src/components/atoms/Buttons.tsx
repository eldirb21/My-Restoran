import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

interface Buttons {
  title: string;
  isFull: boolean;
  style: object;
  isBordered: boolean;
  color: string;
  bgColor: string;
  uppercase: boolean;
  props: any;
}
const Buttons: FC<Buttons> = ({
  title = 'Submit',
  isFull,
  isBordered,
  color,
  bgColor,
  uppercase,
  style,
  ...props
}) => {
  var styled = [
    styles.container,
    
    {
      backgroundColor: bgColor || 'green',
      borderColor: color || 'green',
    },
    isBordered && {
      backgroundColor: 'transparent',
      borderColor: color || 'green',
    },
    isFull ? { width: '100%' } : { width: '50%' },
    style,
  ];
  var styledText = [
    styles.title,
    { textTransform: uppercase },
    isBordered && {
      color: color || 'green',
    },
  ];
  return isFull ? (
    <TouchableOpacity style={styled} {...props}>
      <Text style={styledText}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styled} {...props}>
      <Text style={styledText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
  },
  title: {
    color: '#FFF',
    textTransform: 'capitalize',
  },
});
export default Buttons;
