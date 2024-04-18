import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../../Atoms/Text';
import TextButton from '../../../Atoms/TextButton';
import ReturnButton from '../../../Atoms/ReturnButton';
import Form from './components/Form';

const Signup: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  return (
    <ScrollView style={style.container}>
      <View style={style.goBack}>
        <ReturnButton onPress={() => navigation.navigate('initial')} color={colors.white} />
      </View>

      <View style={style.titles}>
        <TextComponent styles={style.mainTitle}>
          {t('Signup.Welcome')}
        </TextComponent>

        <TextComponent styles={style.subtitle}>
          {t('Signup.Start to menagement you tasks')}
        </TextComponent>
      </View>

      <Form />

      <View style={style.loginTextContainer}>
        <TextComponent styles={style.loginTextButton}>
          {t('Signup.Has an acount?')}
        </TextComponent>

        <TextButton onPress={() => navigation.navigate('signin')}>
          <TextComponent color={colors.white}>
            {t('Signup.Login')}
          </TextComponent>
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default Signup;