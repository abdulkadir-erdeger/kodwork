import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Jobs from '../pages/Jobs';
import JobsDetail from '../pages/JobsDetail';

const Stack = createStackNavigator();

export default function JobsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ef5350',
        drawerActiveTintColor: '#ef5350',
        drawerInactiveTintColor: 'grey',
      }}>
      <Stack.Screen
        name="JobsScreen1"
        component={Jobs}
        options={{
          title: 'Jobs',
        }}
      />
      <Stack.Screen
        name="JobsDetailScreen"
        component={JobsDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
}
