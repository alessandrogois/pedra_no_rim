import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Config } from './screens/Config';
import { Dosage } from './screens/Dosage';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Config"
          component={Config}
          options={{ title: 'Config' }}
        />
         <Stack.Screen
          name="Dosage"
          component={Dosage}
          options={{ title: 'Dosage' }}
        />
      </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  textTitle: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default App;
