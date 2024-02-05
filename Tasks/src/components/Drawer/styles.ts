import {Platform, StyleSheet} from 'react-native';

import commonStyles from '../../global/commonStyles';

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
    marginBottom: 5,
  },
  title: {
    color: '#000',
    fontFamily: commonStyles.fontFamily,
    fontSize: 30,
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    padding: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  avatar: {
    borderWidth: 2,
    borderRadius: 30,
    margin: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  name: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 20,
    marginBottom: 5,
  },
  email: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 15,
    marginBottom: 10,
  },
  logoutIcon: {
    margin: 10,
  },
});

export default styles;
