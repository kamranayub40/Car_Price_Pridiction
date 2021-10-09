import { grey } from '@material-ui/core/colors'
import {StyleSheet } from 'react-native'
const styles=StyleSheet.create({
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        top:20
    },
    userText:{
        fontSize:30,
        fontWeight:'500',
        color:'coral'

    },
    inputmainContainer:{
        padding:30,
        top:30,

    },
    inputContainer:{
        borderRadius:20,
        borderColor:'green',
        backgroundColor:'grey',
        color:'white',
        marginBottom:30

    },
    card:{
top:50,
        borderWidth:2,
        borderRadius:30,
        borderColor:'white',
        padding:10,height:"80%",width:'90%',marginLeft:20
    },
    button:{
        borderRadius:10,
        width:"100%",
        height:"15%",
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightblue',
        color:'white',
        borderColor:'lightblue'
    },
    buttonText:{
        color:'white',
        fontSize:20
    }
    

    

})
export default styles