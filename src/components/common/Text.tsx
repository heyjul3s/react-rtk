import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type TTextsProps = {
  children: React.ReactNode;
} & TextProps;

const Typography = {
  LargeP({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: TTextsProps): React.ReactElement {
    return (
      <Text as={as} variant="largeP" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  P({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: TTextsProps): React.ReactElement {
    return (
      <Text as={as} variant="p" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  SmallP({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: TTextsProps): React.ReactElement {
    return (
      <Text as={as} variant="smallP" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  }
};

export const { LargeP, P, SmallP } = Typography;
