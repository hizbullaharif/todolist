import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import theme from '../theme/theme';

const input = props => {
  return (
    <TextInput
      {...props}
    />
  );
};

export default input;

const styles = StyleSheet.create({});
