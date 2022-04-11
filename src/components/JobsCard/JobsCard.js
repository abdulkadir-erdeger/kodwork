import {View, Text} from 'react-native';
import React from 'react';
import styles from './JobsCard.styles';

export default function JobsCard({data, children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.jobName}>{data.name}</Text>
      <Text style={styles.jobType}>{data.company.name}</Text>
      <View style={styles.jobLocationContainer}>
        <Text style={styles.jobLocation}>{data.locations[0].name}</Text>
      </View>
      <Text style={styles.jobLevel}>{data.levels[0].name}</Text>
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
}
