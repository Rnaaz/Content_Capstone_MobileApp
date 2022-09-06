import React, { useState,useEffect } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert } from 'react-native';  
 const SplashScreen = ({navigation})=>{
  
    const [isVisible, setIsVisible] = useState(true);

    useEffect(
        () => {
        //   let timer1 = setTimeout(() => hideSplashScreen(), 5000 );
    
          return () => {
            // clearTimeout(timer1);
          };
        },
        []
      );
   const hideSplashScreen = () =>{  
    setIsVisible(false);
    navigation.navigate('Login');

  }  
   
//   console.warn("splashscreen!!!!"+isVisible);
         return(  
             <View style = { styles.MainContainer }>  
                 { 
                 isVisible? 
                  <View style={styles.SplashScreen_RootView}>  
                     <View style={styles.SplashScreen_ChildView}>  
                       <Image source={require('../assets/images/splashScreen.png')}  
                        style={styles.Image} />  
                     </View>  
                  </View> : null
                }  
            </View>  
              );  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        // backgroundColor: '#ffffff',  
        flex:1,  
    },  
    Image:
    {
        width:'100%', 
        height: '100%', 
        resizeMode: 'contain',
        // borderWidth:  1,
        // height:50,
        
    }
});  

export default SplashScreen;