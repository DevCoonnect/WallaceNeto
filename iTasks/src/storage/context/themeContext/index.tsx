import {createContext, PropsWithChildren} from 'react';
import {themes} from '../../../themes';
import {IThemeContext} from './types';
import {useColorScheme} from 'react-native';

export const ThemeContext = createContext<IThemeContext>({
  colors: themes.light,
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{colors: theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
