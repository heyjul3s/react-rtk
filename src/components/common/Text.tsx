import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type TTextsProps = {
  children: React.ReactNode;
} & TextProps;

const Typography = {
  LargeP({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TTextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="largeP"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  P({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TTextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="p"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  SmallP({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TTextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="smallP"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  }
};

export const { LargeP, P, SmallP } = Typography;
