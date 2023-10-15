const {StyleSheet} = require('react-native');
const {default: theme} = require('../../theme/theme');
const {scale} = require('../../utils/scale');

const styles = StyleSheet.create({
  input: {
    fontSize: scale(16),
    fontFamily: theme.typography.type.med,
    marginTop: scale(15),
  },
  textArea: {
    fontSize: scale(12),
    fontFamily: theme.typography.type.med,
    marginTop: scale(18),
  },
  dateTxt: {
    color: theme.palette.SecondaryLight,
    fontFamily: theme.typography.type.med,
  },
});

export default styles;
