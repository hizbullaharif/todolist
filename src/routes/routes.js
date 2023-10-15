import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import theme from '../theme/theme';

//* Navigators
// import AuthRoutes from './AuthRoutes';
import MainRoutes from './AppNavigator/main/main.routes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.palette.transparent} translucent />
      {true ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
            
          <Stack.Screen name="mainRoutes" component={MainRoutes} />
        </Stack.Navigator>
      ) : (
        // <AuthNavigator />
        <></>
      )}
    </NavigationContainer>
  );
};

export default Routes;
