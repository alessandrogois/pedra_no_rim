import React, {createContext, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {Config} from './screens/Config';
import {Dosage} from './screens/Dosage';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Stack = createNativeStackNavigator();

export const AppContext = createContext();

// const AppProvider = ({children}) => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => setCounter(counter + 1);
//   const decrement = () => setCounter(counter - 1);

//   return (
//     <AppContext.Provider
//       value={{
//         counter: counter,
//         increment: increment,
//         decrement: decrement,
//       }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

const App = () => (
  <PaperProvider>
    <Provider store={store}>
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
    </Provider>
  </PaperProvider>
);

export default App;
