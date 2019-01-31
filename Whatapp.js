import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView , StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';


const GLOBAL = require('./Globals');                         

export default class WhatsApp extends Component {
    
    
    state ={
        
        names: [
            {'name': 'Ben', 'id': 1 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Susan', 'id': 2 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Robert', 'id': 3 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Mary', 'id': 4 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Daniel', 'id': 5 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Laura', 'id': 6 , 'bio' : "now I'm using whatsapp"},
            {'name': 'John', 'id': 7 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Debra', 'id': 8 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Aron', 'id': 9 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Ann', 'id': 10 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Steve', 'id': 11 , 'bio' : "now I'm using whatsapp"},
            {'name': 'Olivia', 'id': 12 , 'bio' : "now I'm using whatsapp"}
         ]    
    }
    render(){
        return(
            
            <View style = {styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#DDDDDD" translucent = {true}/> */}
                
            <View style = {{flexDirection: 'row'  , justifyContent: 'flex-end' , alignItems: 'center' , padding : 5 , flexlex :1  ,marginTop :30}}>
                        <View style ={{flex :1 , justifyContent: 'center' , alignItems: 'center'}}>
                            <Text style = {{fontWeight: 'bold' , fontFamily:'Bodoni 72' }}>
                                NEW CHAT
                            </Text>
                        </View>
                        <Text style={{color : GLOBAL.COLOR.WHATSAPPBLUE , marginRight : 15}}>
                            Cancel
                        </Text>
                      
                </View >
                
                 
                <View style = {styles.headerStyle}>
                    <View style ={styles.scrollStyle}>
                        <Image source = {require('./accest/search_icon.png')} 
                                    style ={ {width :25 , height : 25 , borderRadius : 50 , marginLeft : 15 } } />
                        <Text style={{flex:1 , fontSize: 15 , color: '#999999' , marginLeft : 20}}> search </Text>
                    </View>                   
                </View> 
                
                <View style = {{ flex: 12 }}>
                    <ScrollView style = {{marginTop : 10}}>
                        {
                        this.state.names.map((item,index)=>(
                            <View key = {item.id} style = {styles.itemStyle} >
                                    <Image source = {require('./accest/Unknown_Person_Male_W.png')} 
                                    style ={ {width :30 , height : 30 , borderRadius : 50} } />
                                    <View style = {styles.twoTextStyle}>
                                         <Text style = {styles.textStyleName} > {item.name} </Text>
                                         <Text style={{flex:1 , fontSize: 10 , color: '#999999' }}> {item.bio} </Text>
                                    </View>
                            </View>
                        ) )
                    }
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex :1
    },

    scrollStyle :{
        flexDirection: 'row',
        alignItems: 'center',
        width :350 , 
        height : 40 , 
        borderRadius : 15 , 
        backgroundColor : "#EEEEEE"
    },

    headerStyle:{
        justifyContent: 'center' , 
        alignItems: 'center',
        flex:1, 
        borderColor : 'transparent',
        borderBottomWidth: 1 , 
        borderBottomColor: '#BBBBBB',
        marginTop :10
    },

    twoTextStyle:{
       flex:1,
        borderColor : 'transparent',
        borderBottomWidth: 1 ,
        borderBottomColor: '#DDDDDD',
        borderWidth: 1
    },
    textStylName:{
        flex : 2,
        fontWeight: 'bold',
        fontSize: 35,
        color: '#000011',
        // fontStyle: 'italic',
        // textShadowColor: 'gray',
        // textShadowOffset: { width: 2, height: 2 },
        // textShadowRadius : 2
    },
    itemStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',  
        padding:20,
        margin: 2,
    }

})