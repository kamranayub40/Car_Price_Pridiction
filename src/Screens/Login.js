import React,{useState} from "react";
import { Icon, ListItem } from 'react-native-elements'

import {View,TextInput,StyleSheet,Text,Button, TouchableOpacity,Image}  from "react-native";
import { SettingsBackupRestore } from "@material-ui/icons";

const Login = (props) => {
    const [icon,setIcon] =useState("eye-slash")
    const[hidePassword, setHidePassword]=useState(true)
    const [error, setError]=useState()
    const [userInfo,setUserInfo]=useState({
        Email:'',
        Password:''
    })
    const {Email,Password}=userInfo;
    const handelInput=(value,filedName)=>{
        setUserInfo({...userInfo,[filedName]:value})

    }
    console.log(userInfo)
    const isValidObjectForm=(obj)=>{
        return(
            Object.values(obj).every(value=>value.trim())
        )
    }
    const isEmailValid=(value)=>{
        const regx=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return(
            regx.test(value)
        )
    }
    const updateError=(error,stateUpdater)=>{
        stateUpdater(error)
        setTimeout(()=>{
            stateUpdater('')
        } ,2000)
    }
    const isValidForm=()=>{
        if(!isValidObjectForm(userInfo)) return updateError('Required all Fields',setError)
        if(!isEmailValid(Email))  return updateError('Invalid Email',setError)
        if(!Password.trim()||Password.length<8)  return updateError('Password Must Be 8 Charecter',setError)
    }
    
    const Submit=()=>{
        if(isValidForm()){
            // console.log(userInfo)
        }
    }
    const pass=()=>{
        icon !=='eye-slash'
        ?(setIcon('eye-slash'),setHidePassword(true))
        :(setIcon('eye'),setHidePassword(false))
    }
  return (
      <>
      <View style={{backgroundColor:'white',padding:10}}>

       <Image source={require('../Screens/sellcar.png')} style={{ width: 370,
              resizeMode: 'contain',
              height: 270}}/>
      <Text style={{fontWeight:"700",fontSize:15,marginLeft:30,color:"lightgrey"}}>WELLCOME BACK!</Text>
      <Text style={{fontWeight:"700",fontSize:25,top:1,marginLeft:30,color:"darkblue"}}>Login</Text>

        {error?<Text style={{color:"red"}}>{error}</Text>:null}
      <Text style={{fontWeight:"700",fontSize:13,top:20,marginLeft:30,color:"lightgrey"}}>Email</Text>
      
    <View style={{ top:30, justifyContent: "center", paddingHorizontal: 20 }}>

        <TextInput
        value={Email}
        onChangeText={(value)=>handelInput(value,'Email')}
        styleLabel={{fontWeight:"600"}}
        style={styles.Textinput}
        />
        <View  style={styles.EmailInputIcon}>

            <Icon name="check-circle" type="font-awesome-5" color="green" style={{marginRight:5}}/>

        </View>
        
        </View>
      <Text style={{fontWeight:"700",fontSize:13,marginLeft:27,color:"lightgrey"}}>password</Text>

        <View style={{flexDirection:'row',top:15}}>


        <TextInput
      
        secureTextEntry={hidePassword}
        value={Password}
        onChangeText={(value)=>handelInput(value,"Password")}
        styleLabel={{fontWeight:"800"}} 
        style={styles.TextinputPassword}/>
          <View  style={styles.EmailInputIcon}>

        <Icon name={icon} type="font-awesome-5" color="green" style={{marginRight:5}} onPress={pass}/>

        </View>
        </View>
        <View style={{marginLeft:220,}} > 
            <Text style={{fontStyle:'italic',fontSize:15,color:'darkblue'}}>Forget Password?</Text>
        </View>
        <TouchableOpacity style={styles.buttonBody} onPress={()=>props.navigation.navigate("Home")}>
        <Text style={styles.buttonText}>
                Login
        </Text>
        </TouchableOpacity>
        
       
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'lightgrey',fontSize:17}}>Don´t have an account? </Text>
            {/* <TouchableOpacity onPress={props.navigation.navigate('SignUp')}>

                <Text style={{color:'darkblue',fontSize:17}} >Create one</Text>
            </TouchableOpacity> */}
        </View>
      
       
      
        </View>
    </>
  );
};
const styles=StyleSheet.create({
    Textinput:{
        borderRadius:30,
        backgroundColor:'lightgrey',
        

        borderWidth:1,
        borderColor:"grey",
        bottom:10,
        marginBottom:20
    },
    TextinputPassword:{
        borderWidth:1,

        borderRadius:30,
        borderColor:"grey",
        bottom:10,
        marginBottom:20,
        backgroundColor:'lightgrey',
        width:"90%",
        marginLeft:17


    },
    buttonBody:{
        // borderRadius:60,
        borderWidth:2,
        borderColor:"orange",
         backgroundColor:"orange",
         justifyContent:"center",
         marginBottom:10,
         width:"80%",
         height:"7%",
         marginLeft:30,
         borderTopRightRadius:30,
         borderBottomLeftRadius:30



    },
    buttonText:{
        fontSize:25,
        textAlign:"center" 
        ,color:"white"
    },
    forgotText:{
        fontWeight:"500",
        fontSize:15,
        marginBottom:16

    },
    RigisterText:{
        fontWeight:"500",
        fontStyle:"italic", 
        color:"blue",
        fontSize:15,
        marginBottom:30
    },
    EmailInputIcon:{

        flexDirection:'row'
        ,marginLeft:250,
        top:1,
        position:'absolute'
    }


})
export default Login;
// import React,{useState} from "react";
// import { Icon, ListItem } from 'react-native-elements'

// import {View,TextInput,StyleSheet,Text,Button, TouchableOpacity}  from "react-native";
// import { SettingsBackupRestore } from "@material-ui/icons";

// const Login = (props) => {
//     const [icon,setIcon] =useState("eye-slash")
//     const[hidePassword, setHidePassword]=useState(true)
//     const [error, setError]=useState()
//     const [userInfo,setUserInfo]=useState({
//         Email:'',
//         Password:''
//     })
//     const {Email,Password}=userInfo;
//     const handelInput=(value,filedName)=>{
//         setUserInfo({...userInfo,[filedName]:value})

//     }
//     console.log(userInfo)
//     const isValidObjectForm=(obj)=>{
//         return(
//             Object.values(obj).every(value=>value.trim())
//         )
//     }
//     const isEmailValid=(value)=>{
//         const regx=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         return(
//             regx.test(value)
//         )
//     }
//     const updateError=(error,stateUpdater)=>{
//         stateUpdater(error)
//         setTimeout(()=>{
//             stateUpdater('')
//         } ,2000)
//     }
//     const isValidForm=()=>{
//         if(!isValidObjectForm(userInfo)) return updateError('Required all Fields',setError)
//         if(!isEmailValid(Email))  return updateError('Invalid Email',setError)
//         if(!Password.trim()||Password.length<8)  return updateError('Password Must Be 8 Charecter',setError)
//     }
    
//     const Submit=()=>{
//         if(isValidForm()){
//             // console.log(userInfo)
//         }
//     }
//     const pass=()=>{
//         icon !=='eye-slash'
//         ?(setIcon('eye-slash'),setHidePassword(true))
//         :(setIcon('eye'),setHidePassword(false))
//     }
//   return (
//       <>
//       <Text style={{fontWeight:"700",fontSize:30,top:90,marginLeft:30,color:"black",fontStyle:"italic"}}>WELLCOME</Text>
//     <View style={{ top:120, justifyContent: "center", paddingHorizontal: 20 }}>
//         {error?<Text style={{color:"red"}}>{error}</Text>:null}
//         <TextInput
//         placeholder="Email"
//         value={Email}
//         onChangeText={(value)=>handelInput(value,'Email')}
//         styleLabel={{fontWeight:"600"}}
//         style={styles.Textinput}
//         />
//         <View style={{flexDirection:'row'}}>


//         <TextInput
//         placeholder="Password"
//         secureTextEntry={hidePassword}
//         value={Password}
//         onChangeText={(value)=>handelInput(value,"Password")}
//         styleLabel={{fontWeight:"800"}} 
//         style={styles.TextinputPassword}/>
//         <View  style={{paddingRight:100,top:10}}>

//             <Icon name={icon} color="black" size={20} type="font-awesome" onPress={() => pass()} />
//         </View>
//         </View>
//         <TouchableOpacity style={styles.buttonBody} onPress={()=>props.navigation.navigate("Home")}>
//         <Text style={styles.buttonText}>
//                 Login
//         </Text>
//         </TouchableOpacity>
//         <View style={{flexDirection:"row"}}>
//         <TouchableOpacity >

//             <Text style={styles.forgotText}>Forgot Password?</Text>
//         </TouchableOpacity>
//             <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>

//             <Text style={styles.RigisterText}> Are you New? <Text>Register</Text></Text>
//             </TouchableOpacity>
//         </View>
       
      
//     </View>
//     </>
//   );
// };
// const styles=StyleSheet.create({
//     Textinput:{

//         borderBottomWidth:1.5,
//         borderColor:"blue",
//         bottom:10,
//         marginBottom:20
//     },
//     TextinputPassword:{
//         borderBottomWidth:1.5,
//         borderColor:"blue",
//         bottom:10,
//         marginBottom:20
//         ,
//         width:"100%"


//     },
//     buttonBody:{
//         borderRadius:60,
//         borderWidth:2,
//         borderColor:"purple",
//          backgroundColor:"purple",
//          justifyContent:"center",
//          marginBottom:10


//     },
//     buttonText:{
//         fontSize:25,
//         textAlign:"center" 
//         ,color:"white"
//     },
//     forgotText:{
//         fontWeight:"500",
//         fontSize:15,
//         marginBottom:16

//     },
//     RigisterText:{
//         fontWeight:"500",
//         fontStyle:"italic", 
//         color:"blue",
//         fontSize:15,
//         marginBottom:30
//     }


// })
// export default Login;