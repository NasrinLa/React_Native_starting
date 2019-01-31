import React, { Component } from "react";
import { View, Text, FlatList , StyleSheet , Image , TouchableOpacity , TouchableHighlight ,TextInput } from "react-native";

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
      
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  alertItemName = (item) => {
    alert(item.cell)
 }

  renderHeader = () => <TextInput placeholder="Type Here..."/>;

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        // seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "76%",
          backgroundColor: "#CED0CE",
          marginLeft: "20%",
          marginTop :'2%'
        }}
      />
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  render(){
    return(
        <View style={{flex: 1}}>
            <View style ={Styles.Header}>
                <View style ={{margin : 10}}>
                    <Text style={Styles.wStyle}>Whats App</Text>
                </View>
                <View style ={Styles.rightHeader}>
                    <Image source = {require('./accest/icons/Search-Find-128.png')} 
                        style = {Styles.iconStyle} />
                    <Image source = {require('./accest/icons/Contact-128.png')} 
                        style = {Styles.iconStyle} />
                    <Image source = {require('./accest/icons/Data-Information-128.png')} 
                        style = {Styles.iconStyle} />
                  

                </View>

            </View>
            
            <View style = {Styles.secondHeader}>
                <TouchableOpacity style ={{borderBottomColor : 'rgba(256,256,256,1)' , borderBottomWidth :2 }}>
                    <View>
                    <Text style = {[Styles.headerFont , {color : 'rgba(256,256,256,1)' , marginLeft : 30}]}>CALLS</Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {[Styles.headerFont , {marginLeft : 20}]}>CHATS</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {[Styles.headerFont , {marginRight : 30}]}>CONTACTS</Text>
                </TouchableOpacity>
                

            </View>

            <View style={{  flex: 1 }}>
                <FlatList
                
                    data = {this.state.data}
                    style={{flex : 1}}
                    keyExtractor={item => item.cell}
                    
                    renderItem={({item}) =>( 
                        <TouchableHighlight
                            onPress = {() => this.alertItemName(item)}>
                              {/* <Text>
                                {item.name}
                            </Text>  */}
                            <View style = {Styles.informationHolder}>

                                <View style = {Styles.contactInf}>
                    
                                    <View style= {Styles.imageHolder}>
                                        <Image source = {{uri: item.picture.thumbnail}} 
                                        style = {Styles.contactImg} />
                                    </View>
                                
                                    <View style= {Styles.infHolder}>
                                        <View>
                                            <Text style = {Styles.nameStyle}>{item.name.first}</Text>
                                        </View>
                                        <View style = {{flexDirection : 'row'}}>
                                            <View style = {{justifyContent : 'center'}}>
                                                <Image source = {require('./accest/icons/call_in.png')} 
                                                style = {Styles.callImg} />
                                            </View>
                                            {/* <View>
                                                <Text style = {{fontSize:15}}>3</Text>
                                            </View> */}
                                            <View>
                                                <Text style = {{fontSize:15}}> 2 minutes ago,</Text>
                                            </View>
                                            <View >
                                                <Text style = {{fontSize:15}}> 12:13 AM</Text>
                                            </View>
                                        </View>
                                        
                                    </View>
                
                                </View>
                                            
            
                                <View style = {{justifyContent : 'center' , flex : 1 , marginTop :5 , marginBottom :5}}>
                                    <Image source = {require('./accest/icons/phone.png')} 
                                                style = {Styles.kindImg} />
                                </View>
                            
                            </View>
                        </TouchableHighlight>
                    )  
                }
                // ListHeaderComponent={this.renderHeader}
                ItemSeparatorComponent={this.renderSeparator}   
                // Refreshing the page at the top the page
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
                // load more items with Threshold={10}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={2}
                />
                
            </View>
        </View>
    )
}
}

const Styles = StyleSheet.create({
Header : {
    //flex : 1 , 
    flexDirection : 'row' , 
    //marginLeft : 20,
    //marginTop : 5,
    height : 50,
    alignContent : 'center' ,
    justifyContent :'center' ,
    backgroundColor: '#006622'
},

infHolder: {
    marginLeft : 20 , 
    marginRight :10, 
    flex:10 , 
    alignContent :'center' ,
    justifyContent :'center' 
},

imageHolder:{
    marginLeft : 20 , 
    marginRight :20 , 
    flex : 1
},

callImg:{
    borderRadius : 50 , 
    width : 15 , 
    height : 15
},

contactImg :{
    borderRadius : 50 , 
    width : 50 , 
    height :50 ,  
    alignContent :'center' ,
    justifyContent : 'center'
},

nameStyle :{ 
    fontSize:20 , 
    fontWeight : 'bold'
},

secondHeader : {
    //flex : 1 , 
    flexDirection : 'row' , 
    //marginLeft : 20,
    //marginTop : 5,
    height : 40,
    alignContent : 'center' ,
    justifyContent : 'space-between' ,
    backgroundColor: '#006622'
},

contactInf:{
    flexDirection : 'row' , 
    alignContent :'center' ,
    justifyContent : 'space-around', 
    flex : 9
},

informationHolder:{
    flexDirection : 'row',
    justifyContent : 'flex-end',
    height : 50,
    marginEnd : 20 , 
    marginTop : 10
},

kindImg :{
    borderRadius : 50 , 
    width : 40 , 
    height : 40
},

rightHeader:{
    flex : 1 , 
    flexDirection : 'row' ,
    justifyContent :'flex-end' , 
    alignContent :'center',
    margin : 10

},

wStyle:{
    fontSize : 20 , 
    fontWeight :'bold' , 
    color :'white'
},

headerFont : {
    alignContent : 'center',
    justifyContent : 'center',
    fontSize:15 , 
    fontWeight : 'bold' , 
    color :'rgba(255,255,255,0.6)' , 
    width : 115,
    marginTop : 10,
},

 iconStyle:{
     borderRadius : 50 , 
     width : 30 , 
     height : 30, 
     marginLeft : 5,
     marginRight :5
}

})


export default FlatListDemo;