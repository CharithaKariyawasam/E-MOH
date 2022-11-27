import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function Quiz({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Mother');

  }

  const pressHandlerQuiz = () => {
    navigation.navigate('QuizPageNew');

  }

  const pressHandlerAware = () => {
    navigation.navigate('Awareness');

  }

  return(
    <View style={styles.containerx}>
        {/* <Text style={styles.container}> Welcome To E-MOH </Text> */}
        <Text></Text>

        {/* <FlatList numColumns={3} data={people} renderItem={({item}) => (
            <TouchableOpacity>
                <Text style={styles.item} onPress={pressHandler}>{item.name}</Text>
            </TouchableOpacity>
            
        )}/> */}

        {/* <Button title='Add Profile'/> */}
{/* 
        <FlatList numColumns={3} data={other} renderItem={({item}) => (
            <Text style={styles.itemone}>{item.name}</Text>
        )}/> */}

        <View style={styles.itemone}>
            <TouchableOpacity style={styles.cardconenttwo} onPress={pressHandlerAware}>
                <Image source={require('../assets/aware.png')} style={styles.imagetwo}/>
                <Text style={styles.cardtexttwo}>Awareness</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardconenttwo}  onPress={pressHandlerQuiz}>
                <Image source={require('../assets/quizone.png')} style={styles.imagetwo}/>
                <Text style={styles.cardtexttwo}>Quiz</Text>
            </TouchableOpacity>
        </View>
        
        

        

        {/* <View numColumns={2} style={styles.containerone}>
            <Text style={styles.containertwo}>Mother</Text>
            <Text style={styles.containertwo}>Baby 01</Text>
            <Text style={styles.containertwo}>Baby 02</Text>
        </View> */}

    </View>
)
}

const styles = StyleSheet.create({
  container: {
    marginLeft:"2%",
    marginRight:"2%",
    paddingTop: "5%",
    fontSize:28,
    backgroundColor:'#fff',
    fontWeight:'600',
    textAlign:'center'
    //flex:1
    
    // position: 'absolute',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  containerx:{
    flex:1,
    backgroundColor:'#fff',
  },

  head:{
    //flex:1,
    width:'96%',
    height:'20%',
    marginTop: "5%",
    backgroundColor:'#80aaff',
    marginLeft:"2%",
    marginRight:"2%",
    borderRadius:20,

  },

  containertwo: {
    fontSize: 20,
  },

  containerone: {
    //flexDirection: 'row',
    borderRadius:6,
    elevation:3,
    backgroundColor:'#80aaff',
  },
  
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'#80aaff',
    fontSize:24,
    marginHorizontal:2,
    borderRadius:20,
    color:'#fff',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2

  },

  itemtwo:{
    marginRight:"12%",
    marginLeft:"12%",
    marginTop:'5%',
    padding:10,
    backgroundColor:'#80aaff',
    fontSize:24,
    marginHorizontal:2,
    borderRadius:20,
    color:'#fff',
    textAlign: 'center',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2
    
  },

  cardconent:{
    marginTop:24,
    paddingTop:30,
    backgroundColor:'#80aaff',
    marginHorizontal:2,
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center',
    height:'100%',
    width:'32%',
  },

  cardconenttwo:{
    marginTop:'20%',
    paddingTop:30,
    backgroundColor:'#fff',
    marginHorizontal:'2%',
    borderRadius:20,
    //color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center',
    height:'100%',
    width:'46%',
  },

  cardtext:{
    paddingTop:'15%',
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'500'
  },

  cardtexttwo:{
    paddingTop:'15%',
    textAlign:'center',
    //color:'#fff',
    fontSize:25,
    fontWeight:'450'
  },

  itemone:{
    //flex:1,
    flexDirection: 'row',
    marginRight:"2%",
    marginLeft:"2%"

  },
  image:{
    width:40,
    height:40,
    alignSelf:'center'
  },

  imagetwo:{
    width:80,
    height:80,
    alignSelf:'center'
  }
});
