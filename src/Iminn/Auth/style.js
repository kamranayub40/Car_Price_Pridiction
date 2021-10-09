import {StyleSheet} from 'react-native'
import {primary} from '../Colors/primary'
const styles=StyleSheet.create({
    mainCon:{
        height:'100%',
        backgroundColor:primary
    },
    headercon:{
        marginTop:"10%",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    headerconText:{
        fontSize:30,
        color:"#FFFFFF",
        fontWeight:'800',
        fontFamily:'nonito-sens'
    },
    contectCon:{
        backgroundColor:'#FFFFFF',
        height:"100%",
        borderRadius:30,
        
    },
    logoHeader:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10


    },
    logoWell:{
        fontSize:16,
        fontWeight:'600',
        color:primary,
        marginBottom:10


    },
    logoacnt:{
        fontWeight:'bold',
        fontSize:22

    },
    authbtncon:{
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        width:'80%',
        height:50,
        flexDirection:'row',
        borderRadius:30,
        marginLeft:"10%",
        backgroundColor:' rgba(255, 130, 82, 0.1)'
    },
    loginbtn:{
        backgroundColor:primary,
        width:'43%',
        height:50,
        borderRadius:30,
        justifyContent:'center',
        alignItems:"center"

    },
    loginbtnText:{
        fontSize:20,
        fontWeight:'bold'
    },
    signupbtn:{
        marginRight:'15%'
    },
    signupbtnText:{
        fontWeight:'600',
        fontSize:20,
        color:'rgba(255, 130, 82, 0.6)'
    },
    inputCon:{
        // marginTop:"15%",
        marginBottom:20,
        top:30,
        marginLeft:"10%",
        // marginVertical:10
    },
    inputBox:{
        borderRadius:30,
        borderWidth:1,
        borderColor:primary,
        width:'90%',
        height:50,
        flexDirection:'row',
        // justifyContent:'space-around'

    },
    emailconText:{
        marginBottom:10,
    
        fontWeight:'300',
        fontSize:13,
        marginLeft:10

    },
    icon:{
        top:10,
        marginLeft:20
    },
    input:{
        marginLeft:10
    },
    logincon:{
        top:30,
        borderRadius:30,
        borderWidth:1,
        borderColor:primary,
        backgroundColor:primary,
        width:'83%',
        height:50,
        marginLeft:30,
        justifyContent:'center',
        alignItems:'center'


    },
    loginconText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FFFFFF'

    },
    othersign:{
    flexDirection:'row',
    top:50,
    alignItems:'center',
    justifyContent:'center'

    },
    line:{
        width:'30%',
        borderBottomWidth:0.7,
        borderColor:'rgba(37, 39, 41, 0.1)'

    },
    usingText:{
        top:10,
        fontSize:14,
        fontWeight:'600',

    },
    img:{
        resizeMode:'contain',
        width:'20%',
        height:20
    },
    socialbtncon:{
        top:"23%",
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    googlebtncon:{
        flexDirection:'row',
        width:'35%',
        height:40,
        // borderWidth:2,
        backgroundColor:'#FFFFFF',
        borderColor:'#FFFFFF',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        


    },
    googletext:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:4

    },
    fbbtncon:{
        flexDirection:'row',
        width:'35%',
        height:40,
        // borderWidth:2,
        backgroundColor:'#4465AC',
        borderColor:'#4465AC',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
    fbtext:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:4,
        color:'rgba(255, 255, 255, 0.8)'
    }


    
})
export default styles