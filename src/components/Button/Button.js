import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Button({title, onPres, iconName, buttonType}) {
  return (
    <TouchableOpacity onPress={onPres}>
      <View
        style={buttonType == 'remove' ? styles.container2 : styles.container}>
        <Icon name={iconName} size={22} color="white" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
