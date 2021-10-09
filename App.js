

import { HomeWork } from '@material-ui/icons';
import AppStack from './src/Config/ScreensNavigation'
import React from 'react';
import Provider from './src/Config/Auth'
// import SignUp from './src/Screens/SignUp'
import Navigation from './src/Config/Navgation';
// import Login from './src/Screens/Auth/Login/Login'
import SignUp from './src/Screens/Auth/SignUp/SignUp'
import {
 
  StyleSheet,
  
  View,
} from 'react-native';
// import Login from './src/Screens/Login'
import Home from './src/Screens/Home'
import Login from './src/Iminn/Auth/Login'
import FindGame from './src/Iminn/Auth/FindGame/findGame'
import Search from './src/Iminn/Auth/Search/Search';



const App=()=> {
  

  return (
    // <View>
      <Search/>
    //  </View> */
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
