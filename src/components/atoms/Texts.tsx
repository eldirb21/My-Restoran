import {Text} from 'react-native';
import React, {FC} from 'react';

interface Texts {
  textStyles: object;
  weight: string;
  color: string;
  size: number;
  type: string;
  props: any;
  children: any;
}
const Texts: FC<Texts> = ({
  textStyles,
  size = 14,
  type = 'Roboto',
  weight = '400',
  color = '#000',
  children,
  props,
}) => {
  const defStyle = {
    fontSize: size,
    fontFamily: type,
    fontWeight: weight,
    color: color,
  };
  const incStyle = Array.isArray(textStyles) ? textStyles : [textStyles];

  return (
    <Text {...props} style={[defStyle, ...incStyle]}>
      {children}
    </Text>
  );
};
export default Texts;
