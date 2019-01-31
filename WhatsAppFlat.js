import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView , StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';


//const data = require ('./DataComponent');

export default class WAF extends Component{
    render(){
        return(
            <View style = {Styles.informationHolder}>
                <View style = {{justifyContent : 'center'}}>
                    <Image source = {require('phone.png')} 
                    style = {{borderRadius : 50}} />
                </View>

                <View>
                    <View>
                        <View>
                            <Text>John Anderson</Text>
                        </View>
                        <View style = {{flexDirection : 'row'}}>
                            <View style = {{justifyContent : 'center'}}>
                                <Image source = {require('misscall.png')} 
                                style = {{borderRadius : 50 , width : 10 , height : 10}} />
                            </View>
                            <View>
                                <Text>3</Text>
                            </View>
                            <View>
                                <Text>2 minutes ago,</Text>
                            </View>
                            <View>
                                <Text>12:13 AM</Text>
                            </View>
                        </View>
                        
                    </View>

                    <View>
                        <Image source = {require('assert/Unknown_Person_Male_W.png')} 
                        style = {{borderRadius : 50}} />
                    </View>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    informationHolder:{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        height : 50
    },
})