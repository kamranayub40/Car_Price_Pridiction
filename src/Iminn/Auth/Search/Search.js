import React from 'react'
import { View,Text, TouchableOpacity, TextInput, Image  } from 'react-native'
import { Icon } from 'react-native-elements'
import { primary } from '../../Colors/primary'
import styles from './style'
const Search =()=>{
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
        <View style={styles.Searchcon}>
            <Text style={styles.Searchcontext}>Search</Text>
        </View>
        <View style={styles.gameCode}>
            <Text style={styles.gameCodetext}>Game code <Text style={styles.hr}>HR12</Text> has founded</Text>
        </View>
        <View style={styles.cardmainCon}>
            <Image source={require("../Rectangle.png")} style={styles.img}/>
            <View  style={styles.headercon}>
                <Text  style={styles.headerconText}>FCL vc FCV</Text>
            </View>
            <View style={styles.dtlcon}>
                <Icon name="map-marker-alt" type="font-awesome-5" size={20} color={primary}/>
                <Text style={styles.dtlconText}> Shady Smile Sport Centre, Londo</Text>
            </View>
            <View style={styles.dtlcon}>
                <Icon name="calendar-week" type="font-awesome-5" size={20} color={primary}/>
                <Text style={styles.dtlconText}>  2nd of December, 04:15 PM</Text>
            </View>
            <View style={styles.dtlcon}>
            <Icon name="dollar-sign" type="font-awesome-5" size={20} color={primary}/>
                <Text style={styles.dtlconText}> $150.00</Text>
            </View>
            <TouchableOpacity style={styles.joinbtn}>
                <Text  style={styles.joinbtntext}>Join Now</Text>
            </TouchableOpacity>
        </View>
        
        </>
    )
}
export default Search