import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Mother');

  }

  const pressHandlerBaby = () => {
    navigation.navigate('Baby');

  }

  const pressHandlerQuiz = () => {
    navigation.navigate('Quiz');

  }

  const [people, setPeople] = useState([
    { name:'Mother', key:'1'},
    { name:'Baby 01', key:'2'},
    { name:'Baby 02', key:'3'}
  ]);

  const [other, setOther] = useState([
    { name:'Other Services', key:'1'},
    { name:'FAQ', key:'2'},
    { name:'Contact Us', key:'3'}
  ]);

  return(
    <View style={styles.containerx}>
        {/* <Text style={styles.container}> Welcome To E-MOH </Text> */}
        <Text></Text>

        {/* <FlatList numColumns={3} data={people} renderItem={({item}) => (
            <TouchableOpacity>
                <Text style={styles.item} onPress={pressHandler}>{item.name}</Text>
            </TouchableOpacity>
            
        )}/> */}

        <View style={styles.itemone}>

            <TouchableOpacity style={styles.cardconent} onPress={pressHandler}>
                <Image source={require('../assets/mom.png')} style={styles.image}/>
                <Text style={styles.cardtext}>Mother</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cardconent} onPress={pressHandlerBaby}>
                <Image source={require('../assets/boy.png')} style={styles.image}/>
                <Text style={styles.cardtext}>Baby 01</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cardconent}>
                <Image source={require('../assets/boy.png')} style={styles.image}/>
                <Text style={styles.cardtext}>Baby 02</Text>
            </TouchableOpacity>
        </View>

        <Text></Text>

        {/* <Button title='Add Profile'/> */}


        <Text></Text>
{/* 
        <FlatList numColumns={3} data={other} renderItem={({item}) => (
            <Text style={styles.itemone}>{item.name}</Text>
        )}/> */}

        <View style={styles.itemone}>
            <View style={styles.cardconenttwo}>
                <Image source={require('../assets/OS.jpg')} style={styles.imagetwo}/>
                <Text style={styles.cardtexttwo}>Other Services</Text>
            </View>
            <TouchableOpacity style={styles.cardconenttwo} onPress={pressHandlerQuiz}>
                <Image source={require('../assets/quiz.jpg')} style={styles.imagetwo}/>
                <Text style={styles.cardtexttwo}>Quiz</Text>
            </TouchableOpacity>
            <View style={styles.cardconenttwo}>
                <Image source={require('../assets/contact.jpg')} style={styles.imagetwo}/>
                <Text style={styles.cardtexttwo}>Contact Us</Text>
            </View>
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
    //color:'#000066',
    fontWeight:'600',
    textAlign:'center'
    //flex:1
    
    // position: 'absolute',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  containerx:{
    flex:1
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
    marginTop:24,
    paddingTop:30,
    backgroundColor:'#fff',
    marginHorizontal:2,
    borderRadius:20,
    //color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center',
    height:'100%',
    width:'32%',
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
    fontSize:18,
    fontWeight:'500'
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
    width:60,
    height:60,
    alignSelf:'center'
  }
});
