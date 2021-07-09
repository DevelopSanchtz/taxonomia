import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationScreen } from './src/navigation/NavigationScreen';
import { StackNavigation } from './src/navigation/StackNavigation';

 const App = () => {

  return (
    <NavigationContainer>
      {/* <NavigationScreen /> */}
        <StackNavigation />
    </NavigationContainer>
  );
 };

 export default App;
