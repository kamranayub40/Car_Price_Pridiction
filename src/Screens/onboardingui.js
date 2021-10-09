// import React from 'react'
// import {View,Text,Button,TouchableOpacity,Image} from 'react-native'
// // import { AntDedign } from 'react-native-vector-icons'
// import Onboarding from 'react-native-onboarding-swiper';
// // import { IconFill, IconOutline } from "@ant-design/icons-react-native";


// function onboardingui(props){
//     return(
        
//         <Onboarding
//         bottomBarHeight={60}
//         onSkip={()=>props.navigation.navigate("Login2")}
//         onDone={()=>props.navigation.navigate("Login2")}

//         pages={[
//           {
//             backgroundColor: 'white',
//             titleStyles:{color:'darkblue'},
//             image: <Image source={require('../Screens/mainclean.jpg')} style={{ width: 700,
//               resizeMode: 'contain',
//               height: 270}}/>,
//             title: 'Get Home Services by Lookaftermyvilla by sitting at your home',
            
//           },
//           {
//             backgroundColor: 'white',
//             titleStyles:{color:'darkblue',marginTop:50,fontWeight:'500'},
//             image: <Image source={require('../Screens/clean4.jpg')} style={{ width: 800,
//               resizeMode: 'contain',
//               height: 350}} />,
//             title: 'Take your phone book an appointment by just filling few details.',
//           },
//           {
//             backgroundColor: 'white',
//             titleStyles:{color:'darkblue',fontWeight:'500'},

//             image: <Image source={require('../Screens/mainclean.jpg')} style={{ width: 400,
//               resizeMode: 'contain',
//               height: 370}}/>,
//             title: 'Get home services at reasonable prices with our experienced employees.',
//           },
         
        
//         ]}
//       />
//     )
// }
// export default onboardingui
import React from 'react'
import {View,Text,Button,TouchableOpacity,Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


function onboardingui(props){
    return(
        
        <Onboarding
        onSkip={()=>props.navigation.navigate("Login")}
        onDone={()=>props.navigation.navigate("Login")}

        pages={[
          {
            backgroundColor: 'white',
            titleStyles:{color:'darkblue'},
            subTitleStyles:{color:'lightgrey'},

            image: <Image source={require('../Screens/carlogo3.jpg')} style={{ width: 600,
              resizeMode: 'contain',
              height: 270}}/>,
            title: 'VALUATION',
            subtitle: 'frist step you can free car valuation',
            
          },
          {
            backgroundColor: 'white',
            titleStyles:{color:'darkblue'},
            subTitleStyles:{color:'lightgrey'},
            image: <Image source={require('../Screens/carlogo5.jpg')} style={{ width: 800,
              resizeMode: 'contain',
              height: 370}} />,
            title: 'Inspection',
            subtitle: 'Your Inspection is totally free ',
          },
          {
            backgroundColor: 'white',
            titleStyles:{color:'darkblue'},
            subTitleStyles:{color:'lightgrey'},
            image: <Image source={require('../Screens/carlog5.jpg')} style={{ width: 400,
              resizeMode: 'contain',
              height: 370}}/>,
            title: 'PAYMENT',
            subtitle: 'Secure Payment',
          },
          {
            backgroundColor: 'white',
            titleStyles:{color:'darkblue'},
            subTitleStyles:{color:'lightgrey'},
            image: <Image source={require('../Screens/wellcome.jpg')} style={{ width: 400,
              resizeMode: 'contain',
              height: 370}} />,
            title: 'WELLCOME TO',
            subtitle: 'SELLCAR ',
          },
        
        ]}
      />
    )
}
export default onboardingui