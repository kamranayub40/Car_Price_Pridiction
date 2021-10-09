import { StylesContext } from '@material-ui/styles'
import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './paymentStyle'
const Payment=(props)=>{
    return(
        <>
        <View style={styles.mainContainer}>
            <Icon name="arrow-left" type="font-awesome-5" size={25} color={'coral'}/>
            <Text style={styles.userText} >User Name</Text>
            <Icon name="arrow-left" type="font-awesome-5" size={25} color={'coral'}/>
            
        </View>
        <View style={styles.pymentgateway}>
            <Text style={styles.pymentgatewayText}>Choose Your Pyment Gateway</Text>
        </View>
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("EasyPaisa")}>
                <Image source={require('../assets/easypaisa.png')} style={styles.cardImage}/>
                <Text style={styles.cardText}> Via Easy Paisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("JazzCash")}>
                <Image source={require('../assets/j1.png')} style={styles.cardImage}/>
                <Text style={styles.cardText}> Via Jazz Cash</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("EasyPaisa")} >
                <Image source={require('../assets/cash.png')} style={styles.cardImage}/>
                <Text style={styles.cardText}> Via Cash Paisa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("Bank")}>
                <Image source={require('../assets/bank.png')} style={styles.cardImage}/>
                {/* <Icon name="university" type="font-awesome-5" size={50}/> */}
                <Text style={styles.cardText}> Via Bank Account</Text>
            </TouchableOpacity>
        </View>

       
        </>
    )
}
export default Payment