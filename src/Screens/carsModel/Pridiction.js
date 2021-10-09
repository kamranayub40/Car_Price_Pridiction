import React from 'react'
import {View,Alert,Text, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'
import {Icon} from 'react-native-elements'

const Pridiction=()=>{
    return(
        <>
        <View style={{backgroundColor:"orange",height:"100%"}}>

        <View style={{height:'20%',flexDirection:'row',justifyContent:'center'}}>
            <Icon name="car" type="font-awesome-5" size={30} color="white" style={{top:55,marginRight:12}} />
            <Text style={{fontSize:30,top:50,textAlign:'center',fontFamily:'Nunito Sans'
            ,fontStyle:'normal',fontWeight:'bold'}}>Companies</Text>
        </View>
            <Text style={{color:'darkblue',marginLeft:10,fontWeight:'300'}}>Choose your Company</Text>  
        <View style={{backgroundColor:'white',borderTopEndRadius:28,borderTopStartRadius:28,
        borderWidth:1,width:"100%",height:'100%',flex:1}}>
        {/* <SafeAreaView style={{flex:1}}> */}
        <>

        <ScrollView behaviour = "height"
                keyboardVerticalOffset = {300}
                contentContainerStyle={{ flexGrow: 1,paddingBottom:450}} bounces={false}> 
            {/* <View>
            {/* <View> */}


                <TouchableOpacity style={{borderRadius:28,top:5,marginBottom:10,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}} onPress={()=>console.log("Clicked")}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Suzuki</Text>
                </TouchableOpacity>
            {/* </View> */}
            <TouchableOpacity style={{borderRadius:28,marginBottom:10,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Toyota</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Honda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Audi</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>BMW</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Daihatsu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Hyundai</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>ISUZU</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>KIA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Lexus</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Mazda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Mercedes Benz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Mitsubishi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Nissan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:28,marginBottom:5,marginLeft:20,backgroundColor:"rgba(0, 175, 156, 0.1);",width:"90%",height:"10%"}}>
                    <Text style={{textAlign:'center',fontFamily:'Nunito Sans',color:"#00AF9C",fontSize:30}}>Subaru</Text>
                </TouchableOpacity>
                
               
            {/* </View> */}
            
        

            </ScrollView>
        </>
        {/* </SafeAreaView> */}
        </View>
        </View>
        </>
    )
}
export default Pridiction