import React,{useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { View,Text } from 'react-native-animatable';
import { StylesContext } from '@material-ui/styles';
import { StyleSheet } from 'react-native';
import { brown } from '@material-ui/core/colors';
import {Icon} from 'react-native-elements'
// import {AuthContext} from '../Config/Auth'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const Home=(props)=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const {user,logout}=useContext(AuthContext)


  const HandleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <View style={styles.mainview}>
      <Text style={styles.mainIcon}>
    <Icon  name='menu' 
  
  color="black" size={35}onPress={() => props.navigation.openDrawer()} /></Text>
      <Text style={styles.maintitle}>Car Price Pridiction</Text>
      {/* <Text style={styles.LogoutIcon}>
    <Icon  name='logout' 
  
  color="black" size={30} onPress={logout} /></Text> */}

    </View>
  );
}
const styles=StyleSheet.create({
  mainview:{
    backgroundColor:'silver',
    flexDirection:'row'
  },
  maintitle:{
    marginLeft:40,
    fontSize:20,
    color:'red',
    fontWeight:'bold',
    fontStyle:'italic'
    
  },
  mainIcon:{
    marginLeft:40,
    fontSize:20,
    color:'red'
  },
  LogoutIcon:{
    marginLeft:30,
    fontSize:20,
    color:'red'

  }

})
export default Home
