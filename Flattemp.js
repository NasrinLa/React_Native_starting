import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator , Image , StyleSheet , Dimensions } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";


const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = Math.round(dimensions.width * 9 / 16);

const d = [
    {
        images: [
            {
                imageUrl: require('./accest/download1.jpg')
            },
            {
                imageUrl: require('./accest/download2.jpg')
            }
        ]
    },
    {
        images: [
            {
                imageUrl: require('./accest/download3.jpg')
            },
            {
                imageUrl: require('./accest/download4.jpg')
            }
        ]
    }
]

const data = [
    
    {
        images:[
            {
                imageUrl: require('./accest/download.jpg')
              },
              {
                imageUrl: require('./accest/download1.jpg')
              },
              {
                imageUrl: require('./accest/download2.jpg')
              },
              {
                imageUrl: require('./accest/download3.jpg')
              }
        ]
    },
    {
        images:[
            {
                imageUrl: require('./accest/download5.jpg')
              },
              {
                imageUrl: require('./accest/download6.jpg')
              },
              {
                imageUrl: require('./accest/download7.jpg')
              },
              {
                imageUrl: require('./accest/download8.jpg')
              }

        ]
    },
    {
        images:[
            {
                imageUrl: require('./accest/download9.jpg')
              },
              {
                imageUrl: require('./accest/download10.jpg')
              },
              {
                imageUrl: require('./accest/download11.jpg')
              },
              {
                imageUrl: require('./accest/download12.jpg')
              }

        ]
    },
    {
        images:[
            {
                imageUrl: require('./accest/download16.jpg')
              },
              {
                imageUrl: require('./accest/download15.jpg')
              },
              {
                imageUrl: require('./accest/download14.jpg')
              },
              {
                imageUrl: require('./accest/download13.jpg')
              }
        ]
    },
    {
        images:[
            {
                imageUrl: require('./accest/download17.jpg')
            },
            {
                imageUrl: require('./accest/download18.jpg')
            },
            {
                imageUrl: require('./accest/download19.png')
            },
            {
                imageUrl: require('./accest/download20.jpg')
            },
            {
                imageUrl: require('./accest/download21.jpg')
            },
            {
                imageUrl: require('./accest/download22.jpg')
            },
        ]
    }
]



  



export default class App extends Component {


  



  render() {
    return (
        <View style = {styles.imageContainerStyle1}>
             <View style ={{flex : 1}}>
                
            </View>
            <View style ={{flex : 1}}>
                 <FlatList 
                    // scrollIndicatorInsets = {true}
                    pagingEnabled = {true}
                    // horizontal
                    data = {data}
                    renderItem = { ({item}) => {
                            return(
                                <View>
                                    
                                    <View style ={{flex : 1}}>
                                    
                                    </View>
                                    <View style ={{flex : 1}}>
                                        <FlatList 
                                            scrollIndicatorInsets = {true}
                                            pagingEnabled = {true}
                                            horizontal
                                            data = {item.images}
                                            keyExtractor={item => item.imageUrl}
                                            renderItem = { ({item}) => {
                                                    return(
                                                        <View style={{height: 189 , width: imageWidth}}>
                                                            <Image source={item.imageUrl} style={{height: 200, width: imageWidth  }} />
                                                        </View>
                                                    )
                                            }
                        
                                            }
                                        />
                                    </View>
                                    <View style ={{flex : 1}}>
                                        
                                    </View>

                                </View>
                            )
                    }

                    }
                />
            </View>
            <View style ={{flex : 1}}>
                
            </View>
        </View>

    )

  }
}

const styles = StyleSheet.create({
    imageContainerStyle :{
        flex :1 ,
        //justifyContent: 'center' ,
        alignItems: 'center',

    },

    imageContainerStyle1 :{
        flex :1 ,
        justifyContent: 'center' ,
        alignItems: 'center',
    }

})