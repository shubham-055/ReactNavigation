import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/Navigation/Tabs';
import Stack from './src/Navigation/Stack';
import Drawer from './src/Navigation/Drawer';
import SuT from './src/Nested Navigation/SuT'; // Stack under tab
import TuS from './src/Nested Navigation/TuS'; // tab under stack
import SuD from './src/Nested Navigation/SuD'; //stack under drawer
//UnComment one at a Time
// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Tabs /> */}
//       {/* <Stack /> */}
//       <Drawer />
//     </NavigationContainer>
//   );
// };

import ReduxCounter from './src/Component/ReduxCounter';
import Counter from './src/Component/Counter';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default App;
