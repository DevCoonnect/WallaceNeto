import React, { useContext } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@rneui/base';
import moment from 'moment';
import '../../../../node_modules/moment/locale/pt-br';

import { ThemeContext } from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import AlertModal from '../../Molecules/AlertModal';

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
            <TouchableOpacity onPress={() => navigation.navigate('settings')} activeOpacity={0.7}>
              <Icon name='sliders' type='font-awesome' color={colors.textPrimaryColor} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
          <AlertModal 
            type='error' 
            title={t('Erro')} 
            content={t('Descritivo do erro')} 
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <AlertModal 
            type='warn' 
            title={t('Aviso')} 
            content={t('Descritivo do aviso')} 
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <AlertModal 
            type='success' 
            title={t('Sucesso')} 
            content={t('Descritivo do sucesso')} 
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <AlertModal 
            type='info' 
            title={t('Informativo')} 
            content={t('Descritivo da informação')} 
          />
        </View>
      </ScrollView>
    </>
  );
}

export default Home;