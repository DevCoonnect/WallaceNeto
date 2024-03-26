import {ColorValue} from 'react-native';

type Colors = {
  today: ColorValue;
  tomorrow: ColorValue;
  week: ColorValue;
  month: ColorValue;
  secondary: ColorValue;
  mainText: ColorValue;
  subText: ColorValue;
};

type Theme = {
  fontFamily: string;
  colors: Colors;
};

const theme: Theme = {
  fontFamily: 'Lato',
  colors: {
    today: '#B13B44',
    tomorrow: '#C9742E',
    week: '#15721E',
    month: '#1631BE',
    secondary: '#FFF',
    mainText: '#222',
    subText: '#555',
  },
};

export default theme;
