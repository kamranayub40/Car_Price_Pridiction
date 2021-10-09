import { StyleSheet } from "react-native";
import { primary } from "../../Colors/primary";
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
        marginLeft:10
    },
    icon:{
        top:10,
        marginLeft:10
    },
    input:{
        marginLeft:10
    },
    Searchcon:{
        top:40,
        marginLeft:40
    },
    Searchcontext:{
        fontWeight:'bold',
        fontSize:20
    },
    gameCode:{
        top:50,
        marginLeft:40


    },
    gameCodetext:{
        fontSize:16,
        fontWeight:'bold'

    },
    hr:{
        color:primary
    },
    cardmainCon:{
        top:"10%",
        // justifyContent:'center',
        // alignItems:'center',
        width:'90%',
        height:"75%",
        // borderWidth:2,
        marginLeft:20,
        borderRadius:30,
        backgroundColor:'#FFFFFF'

    },
    img:{
        resizeMode:'contain',
        width:'90%',
        marginLeft:20,top:10
        // height:"50%"
        // marginVertical:20

    },
    headercon:{
        top:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5

    },
    headerconText:{
        fontSize:20,
        fontWeight:'bold'

    },
    dtlcon:{
        flexDirection:'row',
        marginLeft:30,
        marginTop:10

    },
    dtlconText:{
        fontWeight:'normal',
        fontSize:16,
        marginLeft:10
    },
    joinbtn:{
        width:'86%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:primary,
        borderRadius:30,
        marginTop:15,
        marginLeft:20
    },
    joinbtntext:{
        fontSize:18,
        fontWeight:'bold',
        color:"#FFFFFF"
    }

})
export default styles