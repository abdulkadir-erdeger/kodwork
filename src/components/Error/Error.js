import React from 'react';
import LottieView from 'lottie-react-native';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

const Error = () => {
  return <LottieView source={require('../../asset/error.json')} autoPlay />;
};

export default Error;
