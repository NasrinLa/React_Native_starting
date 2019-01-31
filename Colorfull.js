import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView , StatusBar } from 'react-native';



export default class Colory extends Component{

    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.blackStyle}>
                        <View style = {styles.colorfullStyle}>
                            <View style = {styles.whiteStyle}>
                                <View style ={styles.topStyle}>
                                    <Image source ={require('./accest/left-arrow.png') }
                                        style ={{width : 15 , height: 10 }}/>
                                    
                                    <Text style ={{fontSize :15 , fontWeight :'bold'}}>...</Text>

                                </View>
                                <View style ={{marginTop : 20 , marginStart: 40}}>
                                    <Text style={{color:'black' , fontWeight:'bold' , fontSize : 25 }}>Payment</Text>
                                </View>

                            </View>
                            <View style = {styles.colorfullTempStyle}>
                                <View style = {[styles.minorStyle , {marginTop : 40}]}>
                                   
                                    <Text style ={{color : '#ead8Db' , fontSize : 12 , marginEnd :50 , marginStart:50}}>Express</Text>    
                                    <Text style ={{color : '#ead8Db' , fontSize : 12 , marginEnd :50 , marginStart:50}}>Card number</Text>
                                
                                </View>

                                <View style = {styles.majorStyle}>
                                        <View style = {styles.commonBorderStyleStart}>
                                            <Text style ={{ color : '#FBF9FC' , fontSize : 18 }}>0123 4567 8910 1112</Text>
                                        </View>
                                        <View style = {styles.commonBorderStyleEnd}>
                                            <Text style ={{ color : '#FBF9FC' , fontSize : 18 }}>12/22</Text>
                                        </View>
                                   
                                   
                                </View>

                                <View style = {styles.minorStyle}>
                                    <Text style ={{color : '#ead8Db' , fontSize : 12 , marginEnd :50 , marginStart:50}}>Name</Text>    
                                    <Text style ={{color : '#ead8Db' , fontSize : 12 , marginEnd :50 , marginStart:50}}>CVC</Text>
                                </View>

                                <View style = {styles.majorStyle}>
                                    
                                    <View style = {styles.commonBorderStyleStart}>
                                        <Text style ={{ color : '#FBF9FC' , fontSize : 18 }}>JOHN DOE</Text>
                                    </View>
                                    <View style = {styles.commonBorderStyleEnd}>
                                        <Text style ={{ color : '#FBF9FC' , fontSize : 18 }}>555</Text>
                                    </View>

                                </View>

                                
                            </View>
                        </View >
                        <View style = {styles.backTempStyle}>
                            <View style ={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , marginStart :40 , marginEnd : 40 , marginTop : 40}}>
                                <View style ={{flexDirection: 'row'}}>
                                    <Text style ={{color : '#FBF9FC' , fontSize : 15}}>Green Tea</Text>
                                    <Text style ={{color : 'rgba(157, 161, 166,0.5)' , fontSize : 15}}>  x3</Text>
                                </View>
                                
                                <Text style ={{color : 'rgba(157, 161, 166,1)' , fontSize : 15}}>$15</Text>
                            </View>
                            <View style ={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  marginStart :40 , marginEnd : 40 , marginTop : 30}}>
                                <View style ={{flexDirection: 'row'}}>
                                    <Text style ={{color : '#FBF9FC' , fontSize : 15}}>Cupacakes</Text>
                                    <Text style ={{color : 'rgba(157, 161, 166,0.5)' , fontSize : 15}}>  x2</Text>
                                </View>
                                
                                <Text style ={{color : '#9da1a6' , fontSize : 15}}>$20</Text>
                            </View>
                            <View style ={{flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between' , marginStart :40 , marginEnd : 40 , marginTop : 40}}>
                                <Text style ={{fontWeight: 'bold', color : '#FBF9FC' , fontSize : 25}}>Total</Text>
                                
                                <View style ={{flexDirection: 'row'}}>
                                    <Text style ={{color : '#9da1a6'}}>$</Text>
                                    <Text style ={{fontWeight: 'bold', color : '#FBF9FC' , fontSize : 45}}>35</Text>
                                </View>
                            </View>
                            

                        </View>

                    </View>


                    <View style = {styles.silverStyle}>

                        <View style = {{  justifyContent: 'center', alignItems: 'center', flex :1 , marginStart :60}}>
                                <Text style = {{color : '#FBF9FC' , fontSize : 20 }}> continue </Text>
                        </View>
                        <Image source = {require('./accest/Navigation-Right-128.png')} 
                            style ={ {width :40 , height : 15 , marginEnd :15 }}/>
                    </View>

                </View>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor : '#BAB4C7' 
    },

    blackStyle:{
        backgroundColor : '#000033',
        // flex:5,
        height:700,
        borderBottomLeftRadius : 70 ,
     
    }, 
    colorfullStyle:{
        // flex:1, 
        height:400,
        backgroundColor : '#A43759',
        borderBottomLeftRadius : 70
    },
    whiteStyle:{
        // flex:1,
        height:150,
        backgroundColor : '#FBF9FC',
        borderBottomLeftRadius : 70
    },
    backTempStyle :{
        // flex :1,
        backgroundColor : 'transparent'
    },

    colorfullTempStyle :{
        // flex :1,
        backgroundColor : 'transparent'
    },

    silverStyle:{
        // flex:1,
        height:75,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',  
        backgroundColor :'transparent',
        // marginTop : 50
    },

    minorStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor : 'transparent',
        marginTop:25

    },

    majorStyle :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
    },
    commonBorderStyleStart:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor : 'transparent',
        borderBottomWidth: 1 ,
        width :180,
        borderBottomColor: '#ead8Db',
        borderWidth: 1, 
        marginStart:50 

    },
    commonBorderStyleEnd:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor : 'transparent',
        borderBottomWidth: 1 ,
        borderBottomColor: '#FBF9FC',
        borderWidth: 1, 
        marginEnd:50 

    },
    topStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop :40 , 
        marginStart: 20 , 
        marginEnd: 20
    }

})