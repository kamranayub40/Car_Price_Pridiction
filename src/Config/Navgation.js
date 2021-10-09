import React,{useState,useEffect} from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
import { createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Auth/Login/Login';
import SignUp from '../Screens/Auth/SignUp/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage'
import onboardingui from '../Screens/onboardingui'
import AppStack from '../Config/ScreensNavigation'
import { createDrawerNavigator } from '@react-navigation/drawer'
import About from '../Screens/About'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from '../Screens/Home/Home';
import Pridiction from '../Screens/carsModel/Pridiction';
import Payment from '../Screens/Pyment/Pyment';
import Profile from '../Screens/Profile/Profile';
import {Icon} from 'react-native-elements'
import {NavigationContainer } from '@react-navigation/native'
import EasyPaisa from '../Screens/Pyment/EasyPaisa'
import JazzCash from '../Screens/Pyment/JazzCash';
import Bank from '../Screens/Pyment/Bank'

const Drawer=createDrawerNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const navigationhandel=()=>({

  headerShown: false
}
)

// const LoginStack=()=>{
//   return(
//     <>
//     <Stack.Navigator initialRouteName>

//     <Stack.Screen name="Login" component={Login}/>
//     <Stack.Screen name=" SignUp" component={ SignUp}/>
//     <Stack.Screen options={navigationhandel} name="onboardingui" component={onboardingui}/>
//     </Stack.Navigator>

//   </>
//   )
// }
const PaymentTab =()=>{
  return(
    <Stack.Navigator initialRouteName="Payment">
      <Stack.Screen name="Payment"  options={navigationhandel} component={Payment} />
      <Stack.Screen name="EasyPaisa"  options={navigationhandel} component={EasyPaisa} />
      <Stack.Screen name="JazzCash"  options={navigationhandel} component={JazzCash} />
      <Stack.Screen name="Bank"  options={navigationhandel} component={Bank} />



    </Stack.Navigator>
  )
}
const HomeTab=()=>{
    return(
        <>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name ==='PaymentTab') {
              iconName = focused ? 'dollar-sign' : 'dollar-sign';
            }
            else if (route.name ==='Pridiction') {
              iconName = focused ? 'car' : 'car';
            }
            else if (route.name ==='Profile') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return <Icon type="font-awesome-5" name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PaymentTab" component={PaymentTab}   options={{tabBarLabel:'Inbox',headerShown:false}}/>
      <Tab.Screen name="Pridiction" component={Pridiction} />
      <Tab.Screen name="Profile" component={Profile} />




      </Tab.Navigator>
    
    </>
    )
}
const LoginStack=()=>{
  return(
    <Stack.Navigator initialRouteName='onboardingui'>
            <Stack.Screen options={navigationhandel} name='Login' component={Login}/>
            <Stack.Screen options={navigationhandel} name='SignUp' component={SignUp}/>
          <Stack.Screen options={navigationhandel} name='onboardingui' component={onboardingui}/>



    </Stack.Navigator>
  )
}

const HomeStack=()=>{
  
  return(
      <Stack.Navigator initialRouteName='HomeTab'>
          <Stack.Screen options={navigationhandel} name='HomeTab' component={HomeTab}/>
          <Stack.Screen options={navigationhandel} name='LoginStack' component={LoginStack}/>

          {/* <Stack.Screen options={navigationhandel} name='About' component={About}/>
          <Stack.Screen options={navigationhandel} name='onboardingui' component={onboardingui}/>
          <Stack.Screen options={navigationhandel} name='Login' component={Login}/>
          <Stack.Screen options={navigationhandel} name='SignUp' component={SignUp}/> */}
          {/* <Stack.Screen options={navigationhandel} name='Login2' component={Login2}/> */}




          {/* <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name=" SignUp" component={SignUp}/>
    <Stack.Screen options={navigationhandel} name="onboardingui" component={onboardingui}/> */}


          {/* <Stack.Screen options={navigationhandel} name='Home' component={Home}/> */}




         


      </Stack.Navigator>
  )


}
function Navigation(){
  // const [fristLounchstate,setFristLaounchState]=useState(null)
  // let routeName
  // useEffect(()=>{
  //   AsyncStorage.getItem('alreadyLaunched').then(value=>{
  //       if(value==null){
  //         AsyncStorage.setItem('alreadylaunched','true')
  //       setFristLaounchState(true)
  //       }
  //       else{
  //         setFristLaounchState(false)
  //       }
  //   })

  // },[])  
  // if(fristLounchstate==null){
  //   return <Text> <ActivityIndicator size="large" color="teal" style={{justifyContent:'center',alignItems:'center'}}/></Text>
  // }else if(fristLounchstate==true){
  //   routeName="onboardingui"
  // }else{
  //     routeName= "Login"
  
  //   }

    
    return(
      <>
      {/* <Stack.Navigator initialRouteName={routeName} >
            <Stack.Screen options={navigationhandel} name="onboardingui" component={onboardingui}/>
            <Stack.Screen options={navigationhandel}   name="Login"component={Login}/>
            <Stack.Screen options={navigationhandel}   name="SignUp"component={SignUp}/>
            <Stack.Screen options={navigationhandel}   name="ScreensNavigation"component={AppStack}/>

  
  
        </Stack.Navigator> */}
        <NavigationContainer>

        <Drawer.Navigator >
        <Drawer.Screen name="HomeStack"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"HOME"  , drawerIcon: ({ name, size,color }) => (
          <Icon name="home" color="red" size={24} 
          />)} } component={HomeStack}  />
     <Drawer.Screen name="About"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"About"  , drawerIcon: ({ name, size,color }) => (
       <Icon name="address-card" type="font-awesome-5" color="red" size={24} 
    />)} } component={About}  />
    <Drawer.Screen name="Login"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"Logout"  , drawerIcon: ({ name, size,color }) => (
      <Icon name="address-card" type="font-awesome-5" color="red" size={24} 
      />)} } component={Login}  />
    

        </Drawer.Navigator>
  
      </NavigationContainer>
    
       
  
      
      
      
  
  
      </>
    
      
      
      )
  
  }
  export default Navigation