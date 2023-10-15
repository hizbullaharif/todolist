import {StyleSheet} from 'react-native';

import theme from '../../theme/theme';
import {scale} from '../../utils/scale';

const styles = StyleSheet.create({
  heading: {
    fontSize: scale(20),
    fontFamily: theme.typography.type.semi,
    color: theme.palette.TypographyDarkBrown,
  },
  addButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: scale(50),
  },
  addButton: {
    height: scale(70),
    width: scale(70, true),
    backgroundColor: theme.palette.SecondaryLight,
    borderRadius: theme.radius.rounded,
    justifyContent: 'center',
    alignContent: 'center',
  },
  addButtonText: {
    color: theme.palette.white,
    fontSize: scale(32),
    fontFamily: theme.typography.type.bold,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: scale(15),
  },
  button: {
    padding: scale(10),
    borderRadius: theme.radius.r1,
    borderColor: theme.palette.borderColorLight,
    borderWidth: 2,
  },
  selectedButton: {
    backgroundColor: theme.palette.SecondaryLight,
  },
  buttonText: {
    fontFamily: theme.typography.type.bold,
  },
  taskContainer: {
    borderColor: theme.palette.borderColorLight,
    borderWidth: scale(2),
    borderRadius: theme.radius.r1,
    paddingHorizontal: scale(14, true),
    paddingVertical: scale(10),
    marginBottom: scale(10),
    flexDirection: 'row',
  },
  checkBoxContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskInfoContainer: {
    flex: 3,
  },
  titleText: {
    fontSize: scale(16),
    fontFamily: theme.typography.type.reg,
    color: theme.palette.TypographyLight,
    marginTop: scale(17),
  },
  dateText: {
    fontSize: scale(13),
    fontFamily: theme.typography.type.reg,
    color: theme.palette.TypographyLight,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
  },
  emtyContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: scale(30),
  },
  emptyText: {
    color: theme.palette.TypographyLight,
    fontFamily: theme.typography.type.med,
    fontSize: scale(12),
    textAlign: 'center',
  },
});

export default styles;
