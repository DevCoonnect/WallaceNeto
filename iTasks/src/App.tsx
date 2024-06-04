import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import './languages/i18n';

import {themes} from './themes/index';
import {ThemeProvider} from './storage/context';
import Routes from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={themes.light.primaryColor} />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
