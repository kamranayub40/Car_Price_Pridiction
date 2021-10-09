import React from 'react'
import {Text,View,Button, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import styles from  './EasyPaisastyle'
import TextInputMask from 'react-native-text-input-mask';
import { BorderAllRounded } from '@material-ui/icons'

const EasyPaisa=()=>{
    return(
        <>
        <View style={styles.mainContainer}>
        <Icon name="arrow-left" type="font-awesome-5" size={25} color={'coral'}/>
        <Text style={styles.userText} >EasyPaisa</Text>
        <Icon name="user" type="font-awesome-5" size={25} color={'coral'}/>
        
        </View>
        <View style={styles.card}>

    <View style={styles.inputmainContainer}>
        <TextInput placeholder="Enter your Account Name"placeholderTextColor="white"  style={styles.inputContainer}/>
        {/* <TextInput placeholder="Enter your Account Number" keyboardType="number-pad" value={'100,00,00,0S'} placeholderTextColor="white"  style={styles.inputContainer}/> */}
        {/* <TextInput placeholder="Enter your Account Name"placeholderTextColor="white"  style={styles.inputContainer}/> */}
<TextInputMask 
style={styles.inputContainer}
  onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
  placeholder="Account Number"
  placeholderTextColor="white"

  mask={"+1 ([000]) [000] [00] [00]"}
/>
<TextInputMask 
style={styles.inputContainer}
  onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
  placeholder="Expiry Date MM/YY"
  placeholderTextColor="white"

  mask={" [00] / [00]"}
/>
<TextInputMask 
style={styles.inputContainer}
  onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
  placeholder="CVC"
  placeholderTextColor="white"
  
  mask={" [000]"}
/><TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
{/* <Button title="DONE" style={styles.button}></Button> */}


    </View>
    </View>
    </>
    )
}
export default EasyPaisa