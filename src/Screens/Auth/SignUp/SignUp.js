import React,{useState} from "react";
import { Icon, ListItem } from 'react-native-elements'

import {View,TextInput,StyleSheet,Text,Button, TouchableOpacity,Image}  from "react-native";
import { SettingsBackupRestore } from "@material-ui/icons";

const SignUp = (props) => {
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

       <Image source={require('../assets/sellcar.png')} style={{ width: 370,
              resizeMode: 'contain',
              height: 270}}/>
      <Text style={{fontWeight:"700",fontSize:15,marginLeft:30,color:"lightgrey"}}>WELLCOME BACK!</Text>
      <Text style={{fontWeight:"700",fontSize:25,top:1,marginLeft:30,color:"darkblue"}}>SignUP</Text>

        {error?<Text style={{color:"red"}}>{error}</Text>:null}
        <Text style={{fontWeight:"700",fontSize:13,top:20,marginLeft:30,color:"lightgrey"}}>Name</Text>
      
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
        
        <TouchableOpacity style={styles.buttonBody} onPress={()=>props.navigation.navigate("Home")}>
        <Text style={styles.buttonText}>
                SignUp
        </Text>
        </TouchableOpacity>
        
       
      
       
      
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
export default SignUp;



// import { arrayContaining } from "expect";
// import React,{useState,useContext} from "react";
// import {View,TextInput,StyleSheet,Text,Button,Alert,TouchableOpacity,ImageBackground,Image,ScrollView,ActivityIndicator}  from "react-native";
// import { Icon, ListItem } from 'react-native-elements'
// import AnimatableView from 'react-native-animatable'
// import { EmojiObjects } from "@material-ui/icons";
// import ImagePicker from 'react-native-image-crop-picker'
// import auth from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore'
// import {AuthContext} from '../Config/Auth'
// import storage from '@react-native-firebase/storage';



// const SignUp = (props) => {
//     const [icon, setIcon] = useState("eye-slash")
//     const [icon2, setIcon2] = useState("eye-slash")
//     const{register,user}=useContext(AuthContext)
//     const [hidePassword, setHidePassword] = useState(false)
//     const [ConfirmhidePassword, setConfirmhidePassword] = useState(false)

//   const[Images,setImages]=useState(null)
//   const[uploading,setUploading]=useState(false)
//   const[transfered,setTransfered]=useState(0)

//     // const [Name,setName]=useState()
//     // const [confirmhidePassword, setHideconfirmPassword] = useState(true)
//     const [error,setError]=useState()
   
//     const [userInfo,setUserInfo]=useState({
//         Email:'',
//         Password:'',
//         Name:'',
//         ConfirmPassword:'',
//     })
   


//     const isValidObjectForm=(obj)=>{
//        return Object.values(obj).every(value=>value.trim())
//     }
//     const isEmailValid=(value)=>{
//         const regx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         return regx.test(value)
//     }
   
//    const {Email,Password,Name,ConfirmPassword}=userInfo
//    const handelInput=(value,filedName)=>{
//        setUserInfo({...userInfo,[filedName]:value})
//     //    setEmail({...Email,[filedName]: value})
//     //    setPassword({...Password,[filedName]:value})
//     //    setConfirmPassword({...ConfirmPassword,[filedName]:value})
//    }
   
//    console.log(userInfo)

//    const updateError=(error,stateUpdater)=>{
//        stateUpdater(error);
//        setTimeout(()=>{
//            stateUpdater('')

//        },2000)
//    }

// const isValidForm=()=>{
//     if(!isValidObjectForm(userInfo)) return updateError('Required All Fields',setError)
//     if(!isEmailValid(Email)) return updateError('Invalid Email',setError)
//     if(!Name==null) return updateError('Please Enter Name',setError)

//     if(!Password.trim()||Password.length<8) return updateError('Password Must Be Atleast 8 Charecter',setError)
//     if(!Password.trim() !=ConfirmPassword) updateError('Password and Confirm Password Not Match',setError)
    
// }

//    const send=async()=>{
//     //     await register(Email,Password)

//     if(isValidForm()){
//                console.log(userInfo)
//            }
//     // const imageUrl=await UploadPost()
//     // console.log("image Url",imageUrl)
//     // console.log("user",use_id)
    
//     // var user_info={
//     //   use_id,
//     //   user_Name:Name,
//     //   imgUrl:imageUrl
      
//     // }
    
//     // database().ref('/').child('User_info').push(user_info)
//     //  await firestore()
//     //         .collection("users")
//     //         .doc(user.user.uid)
//     //         .set({'email': Email, 'username': Name,profileimg:imageUrl,});
//     // console.log(user)
    
//     // .collection('User_Info')
//     // .add({
//     //   // user:user.uid,
//     //   // user:user.uid,
//     //   Name:Name,
//     //   postimg:imageUrl,
//     // })
    
//       // then(()=>{
//       //   console.log("Post Added")
//       // })
//       // catch((error)=>{
//       //   console.log("some thing went wrong",error)
//       // }) 
        
//       }
// //       const choose= async()=>{
// //         // const ar ray=
        
// //         ImagePicker.openPicker({
// //           width:150,
// //           height:120,
// //           cropping:true,
          
// //         }).then((image)=>{
// //           // const ImageList = response.map((image, index) => ({
// //             console.log("image",image)
// //             const Imageuri=Platform.OS=='Android'?image.sourceURL:image.path
// //             // console.log("Url to string ",Url)
// //             // }));
// //             setImages(Imageuri);
// //             console.log("imageuri",Imageuri);
// //             console.log(Images)
// //           }
          
// //           )}
// //           const UploadPost= async()=>{
// //             const uploaduri=Images
// //             console.log("Image url",uploaduri)
            
            
// //             let filename=uploaduri.substring(uploaduri.lastIndexOf('/')+1)
// //         const extension=filename.split('.').pop()
// //         const name=filename.split('.').slice(0,-1).join('.');
// //         filename=name+Date.now()+'.'+extension
// //         console.log("file",filename)
// //     setUploading(true)
// //     setTransfered(0)
// //   const storageref=storage().ref(`photos/${filename}`);
// //   // const task=storage().ref(fileArray).putFile(fileArray)
// //   const task= storageref.putFile(uploaduri)
// //   console.log("String Url milyo",task)
// //   // console.log("User ID",user.uid)
// //   task.on('state_changed', taskSnapshot => {
// //     console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
// //     setTransfered(
// //       Math.round(taskSnapshot.bytesTransferred/taskSnapshot.totalBytes )* 100
// //       )
// //       console.log(transfered)
// //   });
// //   try{
// //     await task
    
// //     const url= await storageref.getDownloadURL()
    
    
// //     setUploading(false)
// //     Alert.alert("succesfully Submit")
// //     // console.log('children',children)
// //     return url
// //   } catch(e){
// //     console.log(e)
// //     return null

// //   }
// //   setImages(null)
  
// // }



// //    console.log(userInfo)
//      const pass = () => {
//       icon !== "eye-slash"
//         ? (setIcon("eye-slash"), setHidePassword(true))
//         : (setIcon("eye"), setHidePassword(false))
//     }
//     const Confirm= () => {
//         icon2 !== "eye-slash"
//           ? (setIcon2("eye-slash"), setConfirmhidePassword(true))
//           : (setIcon2("eye"), setConfirmhidePassword(false))
//       }
       
       

    
//   return (
//       <>
//       <View >

//       <View style={{backgroundColor:' rgba(0, 175, 156, 0.1)',top:20,flexDirection:'row'}}>
//         <TouchableOpacity style={{marginLeft:30,top:9}}>

//           <Icon name="arrow-left" color="#00AF9C" size={25} type="font-awesome-5"  />
//         </TouchableOpacity>

//       <Text style={{fontWeight:"700",fontSize:30,marginLeft:30
//       ,color:'#00AF9C',fontStyle:"italic"}}>CREATE ACCOUNT</Text>
//       </View>
//       {/* {Images?<Image source={{uri:Images}} style={{borderRadius:80,borderWidth:1,width: 120, height: 120,marginLeft:130,justifyContent:'center',alignItems:'center',top:77}}/>:<Image source={require('../Screens/usericon.png')} style={{borderRadius:80,borderWidth:1,width: 120, height: 113,marginLeft:130,marginBottom:1,justifyContent:'center',alignItems:'center',top:77}}/>}
//       <TouchableOpacity style={{backgroundColor:'teal',borderRadius:80,top:35,justifyContent:'center',alignItems:'center',marginLeft:220 ,width:'9%',height:'7%'}}
//        onPress={choose}>
//         <Icon type="font-awesome-5" name='camera' size={20} color='white'    />

//       </TouchableOpacity> */}

    
//     <View style={{ top:60, justifyContent: "center", paddingHorizontal: 20 }}>
        
//       {error ?<Text style={{color:"red"}}>{error}</Text>:null}








//       <TextInput
//         placeholder="Enter your Name"
//         placeholderTextColor="black"
//         value={Name}
//         onChangeText={(value)=>handelInput(value,"Name")}
//         name="Name"
       
        
//         styleLabel={{fontWeight:"600"}}
//         style={styles.Textinput}
//         />
   
//         <TextInput
//         placeholder="Enter Your Email"
//         placeholderTextColor="black"
//         value={Email}
//         onChangeText={(value)=>handelInput(value,"Email")}
//         name="Email"

       
        
//         styleLabel={{fontWeight:"600"}}
//         style={styles.Textinput}
//         />
//         <View style={{flexDirection:"row"}}>
                
//             <TextInput
//                 placeholder="Password"
//                 placeholderTextColor="black"
//                 secureTextEntry={hidePassword}
//                 value={Password}
//                 onChangeText={(value)=>handelInput(value,"Password")}
//                 styleLabel={{fontWeight:"800"}} 
//                 name="Password"

                
//             style={styles.Textinput}/>
//             <View  style={{marginRight:50,top:10}}>

//             <Icon name={icon} color="black" size={20} type="font-awesome" onPress={() => pass()} />
//             </View>
//             </View>
//             <View style={{flexDirection:"row"}}>
                
//             <TextInput
//                 placeholder="ConfirmPassword"
//                 placeholderTextColor="black"
//                 secureTextEntry={ConfirmhidePassword}
//                 value={ConfirmPassword}
//                 onChangeText={(value)=>handelInput(value,"ConfirmPassword")}
//                 styleLabel={{fontWeight:"800"}} 
//         name="ConfirmPassword"

                
//             style={styles.Textinput}/>
//             <View  style={{marginRight:50,top:10}}>

//             <Icon name={icon} color="black" size={20} type="font-awesome" onPress={() => Confirm()} />
//             </View>
//             </View>
          

//              {/* {uploading?(

// <Text>{transfered}% completed 
//   <ActivityIndicator size="large" color="teal"/></Text>
  
  
// ): */}
//         <TouchableOpacity style={styles.buttonBody}onPress={send} >
//         <Text style={styles.buttonText}>
//             SignUP
                
//         </Text>
//         </TouchableOpacity>
//         <View style={{flexDirection:"row"}}>
        
//             <TouchableOpacity>

//             <Text style={styles.RigisterText}> ALREADY ACCOUNT <Text>LOGIN</Text></Text>
           
//             </TouchableOpacity>
//         </View>
       
      
//     </View>
//         {/* </ScrollView> */}
//     {/* </ImageBackground> */}
//     </View>
//     </>
//   );
// };
// const styles=StyleSheet.create({
//     Textinput:{

//         borderBottomWidth:1.5,
//         borderColor:"blue",
//         bottom:10,
//         marginBottom:10,
//         // placeholderTextColor:"white"
//         color:"black"
//         ,
//         width:"90%"
//     },
    
//     buttonBody:{
//         borderRadius:60,
//         borderWidth:2,
//         borderColor:"purple",
//          backgroundColor:"purple",
//          justifyContent:"center",
//          marginBottom:20


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
//         color:"black",
//         fontSize:15,
//         marginBottom:30
//     }


// })
// export default SignUp;