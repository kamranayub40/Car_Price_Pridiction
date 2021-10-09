import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    mainCon:{
        top:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

    },
    bedgebtn:{
        flexDirection:'row',
        width:'30%',
        height:40,
        borderRadius:30,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-around',
        alignItems:'center',
        marginLeft:50
    },
    countText:{
        fontSize:14,
        fontWeight:'bold'
    },
    inputcon:{
        width:'90%',
        height:50,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',top:60,
        borderRadius:30,
        marginLeft:17
    },
    icon:{
        top:10,
        marginLeft:10
    },
    input:{
        marginLeft:10
    }

})
export default styles