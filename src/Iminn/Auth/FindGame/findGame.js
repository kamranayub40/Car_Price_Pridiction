import React from 'react'
import { View,Text, TouchableOpacity, TextInput  } from 'react-native'
import { Icon } from 'react-native-elements'
import { primary } from '../../Colors/primary'
import styles from './style'
const FindGame =()=>{
    return(
        <>
        <View style={styles.mainCon}>
            <Icon name="arrow-left" type="font-awesome-5" size={20}/>
            <TouchableOpacity style={styles.bedgebtn}>
                <Icon name="award" type="font-awesome-5" size={20} color={primary}/>
               <Text style={styles.countText}>928</Text>

            
            </TouchableOpacity>
            <Icon name="bell" type="font-awesome-5" size={20} color={primary}/>
        </View>
        <View style={styles.inputcon}>
        <Icon name="search" type="font-awesome-5" size={25}  style={styles.icon} color={primary}/>
        <TextInput placeholder="Find a Game" style={styles.input}/>

        </View>
        </>
    )
}
export default FindGame