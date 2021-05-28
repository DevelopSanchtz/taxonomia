import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationScreen } from './src/navigation/NavigationScreen';

 const App = () => {

  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  );
 };

 export default App;
