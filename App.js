import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Config from 'react-native-config';
import Loading from './src/components/Loading';

const App = () => {
  if (1 == 1) {
    return <Loading />;
  }
  return <View></View>;
};

export default App;
