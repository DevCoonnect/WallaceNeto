import React, { useContext } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@rneui/base';
import moment from 'moment';
import '../../../../node_modules/moment/locale/pt-br';

import {ThemeContext} from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';

const Home: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t, i18n} = useTranslation();

  const userName = 'Lucas Calabreso';
  const today = moment().locale(i18n.language).format(t('HomeScreen.CurrentDate'));

  return (
    <>
      <StatusBar backgroundColor={colors.primaryBackground} barStyle='dark-content' />
      <ScrollView style={style.container}>
        <View style={style.header}>
          <View>
            <TextComponent styles={style.dateText}>
              {today.toString()}
            </TextComponent>

            <TextComponent styles={style.userNameText}>
              {t('HomeScreen.Title', {user: userName})}
            </TextComponent>
          </View>
          <View style={style.menuButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon name='sliders' type='font-awesome' color={colors.textPrimaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Home;