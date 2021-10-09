import React, { useContext,useState,useEffect } from 'react'
import {NavigationContainer } from '@react-navigation/native'
import AppStack from '../Config/ScreensNavigation'
import auth from '@react-native-firebase/auth'
// import Navigation from '../config/navigation'
// import Navigation from '../config/navigation'
import Navigation from '../Config/Navgation'
// import {AuthContext}  from '../config/Auth'
import {AuthContext} from '../Config/Auth'
// import AppStack from '../config/AppStak'
// import AppStack from '../config/AppStack'
const Routes=()=>{
  //   const {user,setUser}=useContext(AuthContext)
  //   const[intializing,setInitializing]=useState(true)
  //   const onAuthStateChanged=(user)=>{
  //   setUser(user);
  //   if(intializing)setInitializing(false)

  // }
  //   useEffect(()=>{
  //   const subscriber=auth().onAuthStateChanged(onAuthStateChanged)
  //   return subscriber

  // },[])
  // if(intializing)return null;
  
    return(
        <NavigationContainer>
           {/* {<Navigation/> ? <AppStack/> :<Navigation/>} */}
           <Navigation/>
        </NavigationContainer>
    )
    }
    export default Routes