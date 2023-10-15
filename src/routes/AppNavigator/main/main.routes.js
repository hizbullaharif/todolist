import {StyleSheet} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../../constants/constants';
import Home from '../../../screens/Home';
import AddTask from '../../../screens/Addtask';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Home}
        component={Home}
        screenOptions={{headerShown: false}}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Screens.AddTask} component={AddTask} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainRoutes;

const styles = StyleSheet.create({});
