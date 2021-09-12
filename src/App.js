import React, {createContext, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {Config} from './screens/Config';
import {Dosage} from './screens/Dosage';

const Stack = createNativeStackNavigator();

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <AppContext.Provider
      value={{
        counter: counter,
        increment: increment,
        decrement: decrement,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const App = () => (
  <AppProvider>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="Config"
            component={Config}
            options={{title: 'Config'}}
          />
          <Stack.Screen
            name="Dosage"
            component={Dosage}
            options={{title: 'Dosage'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </AppProvider>
);

export default App;
