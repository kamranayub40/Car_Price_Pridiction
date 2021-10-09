import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {NavigationContainer } from '@react-navigation/native'

import Home from '../Screens/Home/Home'
import { Navigation } from '@material-ui/icons'
import {Icon} from 'react-native-elements'
import Payment from '../Screens/Pyment/Pyment'
import Pridiction from '../Screens/carsModel/Pridiction'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../Screens/Profile/Profile'
// import Login from '../Screens/Login'
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const Tab = createBottomTabNavigator();
import About from '../Screens/About'
import Logout from '../Screens/Logout'
const navigationhandel=()=>({
  
    headerShown: false
  })
  // const LoginStack=()=>{
  //   return(
  //     <>
  //     <Stack.Screen name="Login" component={Login}/>
  //     <Stack.Screen name=" SignUp" component={ SignUp}/>
  //   </>
  //   )
  // }
  const HomeTab=()=>{
      return(
          <>
        <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name ==='Payment') {
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
        <Tab.Screen name="Payment" component={Payment} />
        <Tab.Screen name="Pridiction" component={Pridiction} />
        <Tab.Screen name="Profile" component={Profile} />



        </Tab.Navigator>
      
      </>
      )
  }

const HomeStack=()=>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={navigationhandel} name='HomeTab' component={HomeTab}/>
            <Stack.Screen options={navigationhandel} name='About' component={About}/>
            <Stack.Screen options={navigationhandel} name='Logout' component={Logout}/>
            {/* <Stack.Screen options={navigationhandel} name='LoginStack' component={LoginStack}/> */}
{/* 
            <Stack.Screen options={navigationhandel} name='Login' component={Login}/>
            <Stack.Screen  name='SignUp' component={SignUp}/> */}

            {/* <Stack.Screen options={navigationhandel} name='Home' component={Home}/> */}




           


        </Stack.Navigator>
    )


}
const AppStack=(props)=>{
    return(
        <NavigationContainer>
            

        <Drawer.Navigator>
        <Drawer.Screen name="HomeStack"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"HOME"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="home" color="red" size={24} 
    />)} } component={HomeStack}  />
     <Drawer.Screen name="About"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"About"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="address-card" type="font-awesome-5" color="red" size={24} 
    />)} } component={About}  />
    <Drawer.Screen name="Logout"  drawerStyle={{borderBottomWidth:2}} options={{drawerLabel:"Logout"  , drawerIcon: ({ name, size,color }) => (
    <Icon name="address-card" type="font-awesome-5" color="red" size={24} 
    />)} } component={Logout}  />
    

        </Drawer.Navigator>
        </NavigationContainer>

    )

}
export default AppStack