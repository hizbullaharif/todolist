import {StyleSheet, View} from 'react-native';
import React from 'react';

import {scale} from '../utils/scale';
import theme from '../theme/theme';

const Frame = ({children}) => (
  <View style={styles.mainContainer}>{children}</View>
);

export default Frame;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.palette.PrimaryLight,
    padding: scale(20),
  },
});

/**
 * `Frame` is a reusable wrapper component that provides a consistent layout for its children.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The content or components to be placed within the frame.
 * @return {JSX.Element} - A view component that wraps and styles its children with a consistent layout.
 *
 * @example
 * // Basic usage
 * <Frame>
 *   {/* Your content or components go here *
 * </Frame>
 */
