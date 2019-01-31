import React, { Component } from 'react'
import { View, StyleSheet , Image , ImageBackground , Text , Button } from 'react-native'

export default class Starting extends Component {
   render(){
      return (
         <View style = {styles.container}>

         <View>
          <Image source = {require('./accest/12.png')} 
            style = {{width : 100 , height :100 , marginTop : 80,borderRadius : 100}}/>
           </View>

         <View>
            <Text style = {styles.TextStyle }>welcom Here</Text>
         </View>
         <View>
         <Button
            style={styles.button}
            title = {"login"}
             />
         </View>
        
      </View>
      )

   }
}


const styles = StyleSheet.create({
   container :{
      flex : 1,
      alignItems: 'center',
      backgroundColor: 'grey',
   },
   FLXone: {
      flex :1
   },
   TextStyle :{
      marginTop : 20,
      color : 'white'
   },
   button :{
      width : 200 , 
      height :800 , 
      marginTop : 80,
      borderRadius : 100,
      borderWidth:1,
      backgroundColor:'black',
      marginTop : 60


   }

})