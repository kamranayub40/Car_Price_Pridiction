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
    pymentgateway:{
        marginVertical:90
    },
    pymentgatewayText:{
        fontWeight:'500',
        fontStyle:'italic',
        fontSize:20,
        color:'darkblue',
        justifyContent:'center',
        textAlign:'center'
    },
    cardContainer:{
        flexDirection:'row',
        padding:20,
        justifyContent:'space-around'

    },
    cardImage:{
      width:'40%',
      resizeMode:'contain',

    },

    card:{
        backgroundColor:'coral',
        borderRadius:10,
        justifyContent:'space-evenly',
        lineHeight:10,
        alignItems:'center',
        width:130,
        height:120
        
    },
    cardText:{
        color:'black',
        fontSize:15,
        backgroundColor:'grey',borderRadius:10,
        width:"100%",
        color:'white',
        

    }

})
export default styles