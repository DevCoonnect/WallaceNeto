import React, { useContext, useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@rneui/base';
import moment from 'moment';
import '../../../../node_modules/moment/locale/pt-br';

import { ThemeContext } from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import AlertModal from '../../Molecules/AlertModal';
import ButtonComponent from '../../Atoms/Button';

const Home: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t, i18n} = useTranslation();

  const userName = 'Lucas Calabreso';
  const today = moment().locale(i18n.language).format(t('HomeScreen.CurrentDate'));

  // temporary
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('info');

  const handleToaster = (type: string) => {
    setToastType(type);
    setShowToast(!showToast);
  } 

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={colors.primaryBackground} barStyle='dark-content' />
  
      <ScrollView>
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

        <View style={{ marginTop: 50, paddingHorizontal: 80 }}>
          <ButtonComponent rounded color='#a00' onPress={() => handleToaster('error')}>
            Mostrar erro
          </ButtonComponent>
        </View>
        
        <View style={{ marginTop: 50, paddingHorizontal: 80 }}>
          <ButtonComponent rounded color='#aa0' onPress={() => handleToaster('warn')}>
            Mostrar aviso
          </ButtonComponent>
        </View>
        
        <View style={{ marginTop: 50, paddingHorizontal: 80 }}>
          <ButtonComponent rounded color='#0a0' onPress={() => handleToaster('success')}>
            Mostrar sucesso
          </ButtonComponent>
        </View>
      </ScrollView>

      { 
        showToast && 
        <AlertModal 
          type={toastType}
          title={toastType}
          onClose={() => setShowToast(false)}
        >
          Mensagem de {toastType} do toaster
        </AlertModal> 
      }
    </View>
  );
}

export default Home;