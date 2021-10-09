import React from 'react'
import {View,Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { Icon } from 'react-native-elements'
import { primary } from '../Colors/primary'
import styles from './style'
const Login =()=>{
    return(
        <View style={styles.mainCon}>
            <View style={styles.headercon}>
                <Text  style={styles.headerconText}>IMINN</Text>
            </View>
            <View style={styles.contectCon}>
                <View style={styles.logoHeader}>
                    <Text style={styles.logoWell}> Welcome back to IMINN!</Text>
                    <Text style={styles.logoacnt}>Let’s Login into your Account</Text>
                </View>

            <View style={styles.authbtncon}>
                <TouchableOpacity  style={styles.loginbtn}>
                    <Text style={styles.loginbtnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.signupbtn}>
                    <Text style={styles.signupbtnText}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.inputCon}>
                <Text style={styles.emailconText}>E-Mail Address</Text>
                <View style={styles.inputBox}>
                    <Icon name='envelope' type='font-awesome-5' size={25} color={primary} style={styles.icon}/>
                    <TextInput placeholder="Email" style={styles.input}/>
                </View>
            </View>
            <View style={styles.inputCon}>
                <Text style={styles.emailconText}>Password</Text>
                <View style={styles.inputBox}>
                    <Icon name='lock' type='font-awesome-5' size={25} color={primary} style={styles.icon}/>
                    <TextInput placeholder="Password" style={styles.input}/>
                </View>
                
            </View>
            <TouchableOpacity style={styles.logincon}>
                <Text style={styles.loginconText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.othersign}>
                <Text style={styles.line}></Text>
                <Text style={styles.usingText}>OR USING </Text>
                <Text style={styles.line}></Text>

            </View>
            <View style={styles.socialbtncon}>
                <TouchableOpacity style={styles.googlebtncon}>
                    <Image source={require('./google.png')} style={styles.img}/>
                    <Text style={styles.googletext}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fbbtncon}>
                <Image source={require('./fb.png')} style={styles.img}/>

                {/* <Image source={require("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png")} style={styles.img}/> */}

                    <Text style={styles.fbtext}>Facebook</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>

    )
}
export default Login