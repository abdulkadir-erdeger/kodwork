import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FavoritedJobs from './pages/FavoritedJobs';
import JobsNavigation from './navigation/JobsNavigation';
import FavProvider from './context';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <FavProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#ef5350',
            headerLeft: () => <></>,
            drawerActiveTintColor: '#ef5350',
            drawerInactiveTintColor: 'grey',
          }}>
          <Drawer.Screen
            name="JobsScreen"
            component={JobsNavigation}
            options={{headerShown: false, title: 'Jobs'}}
          />
          <Drawer.Screen
            name="FavoritedJobsScreen"
            component={FavoritedJobs}
            options={{title: 'Favorited Jobs'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </FavProvider>
  );
}
