import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Fonts from './Fonts';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function Baby({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Vaccine');
  }

  const pressHandlerFaq = () => {
    navigation.navigate('FAQBaby');
  }

//   const [people, setPeople] = useState([
//     { name:'Mother', key:'1'},
//     { name:'Baby 01', key:'2'},
//     { name:'Baby 02', key:'3'}
//   ]);

//   const [other, setOther] = useState([
//     { name:'Other Services', key:'1'},
//     { name:'FAQ', key:'2'},
//     { name:'Contact Us', key:'3'}
//   ]);

  return(
    <View style={styles.container}>

        <View style={styles.babyDetails}>

            <View style={styles.babyDetailsCard}>
            <Image source={require('../assets/bby.jpg')} style={styles.image}/>
            <Text style={styles.cardtext}>Baby Rayan</Text>
            <Text style={styles.cardtextage}>5 Months</Text>
            </View>

            <View style={styles.babyDetailsCard}>
            {/* <Image source={require('../assets/bby.jpg')} style={styles.image}/> */}
            {/* <Text style={styles.cardtext}>Baby Rayan</Text> */}
            <Text style={styles.cardtextdetails}>Name   : Rayan Mendis</Text>
            <Text style={styles.cardtextdetails}>BOD    : 04/04/2022</Text>
            <Text style={styles.cardtextdetails}>Gender : Male</Text>
            <Text style={styles.cardtextdetails}>Height : 64 cm</Text>
            <Text style={styles.cardtextdetails}>Weight : 7.3 kg</Text>

            </View>

        </View>
        

        <View style={styles.containerwhite}>
            
            <View style={styles.itemone}>
                <TouchableOpacity style={styles.cardconent} onPress={pressHandler}>
                    <Image source={require('../assets/syringe.png')} style={styles.imagemother}/>
                    <Text style={styles.cardtextmother}>Vaccines</Text>
                </TouchableOpacity>
                <View style={styles.cardconent}>
                    <Image source={require('../assets/children.png')} style={styles.imagemother}/>
                    <Text style={styles.cardtextmother}>Child Wellfare</Text>
                </View>
                <TouchableOpacity style={styles.cardconent} onPress={pressHandlerFaq}>
                    <Image source={require('../assets/faqs.png')} style={styles.imagemother}/>
                    <Text style={styles.cardtextmother}>FAQs</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.appointment}>
                <Text style={styles.appointmentText}>Upcoming Appointments</Text>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>appointment for oral polio vaccine on Saturday  17/09/2022 at 3.30pm, MOH Ragama</Text>
                </View>

            </View>
        </View>

    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#80aaff',
    paddingBottom: 65,
    height: "50%",
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
    marginTop:2,
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

  card:{
    flexDirection: 'row',
    borderRadius:20,
    elevation:3,
    backgroundColor:'#fff',
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
  },

  cardconent:{
    width:"30%",
    marginTop:24,
    padding:15,
    backgroundColor:'#fff',
    fontSize:18,
    marginHorizontal:5,
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center'
  },

  cardtext:{
    //textAlign:'center',
    fontSize:25,
    paddingTop:15,
    color:'#fff',
    fontWeight:'500'
  },

  cardtextdetails:{
    //textAlign:'center',
    fontSize:16,
    paddingTop:15,
    color:'#fff',
    fontWeight:'500'
  },

  
  cardtextage:{
    //textAlign:'center',
    fontSize:20,
    paddingTop:5,
    color:'#fff',
    fontWeight:'500'
  },

  cardtextmother:{
    textAlign:'center',
    fontSize:15,
    paddingTop:'5%'
  },

  appointment:{
    marginLeft:'3%',
    marginRight:'3%',
    marginBottom:'2%',
    marginTop:24,
    //paddingTop:30,
    backgroundColor:'#fff',
    //marginHorizontal:2,
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    height:'35%',
    width:'94%',
  },

  appointmentText:{
    fontSize:22,
    marginTop:'3%',
    marginLeft:'3%',
    textAlign:'center',
    color:'black',
    fontWeight:'500'
  },
  
  appointmentcard:{
    width:"96%",
    marginTop:'4%',
    marginLeft:'2%',
    marginRight:'2%',
    padding:15,
    backgroundColor:'#80aaff',
    fontSize:18,
    marginHorizontal:5,
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    //textAlign:'center'
  },

  appointmentDes:{
    fontSize:15,
    //marginTop:'2%',
    marginLeft:'2%',
    //textAlign:'center',
    color:'#fff',
    //fontWeight:'500'
  },
  cardtextsmall:{
    textAlign:'center',
    fontSize:18,
    paddingTop:5,
    color:'#fff'
  },

  itemone:{
    flexDirection: 'row',
    marginTop:24,

  },

  babyDetails:{
    flexDirection: 'row',
    marginTop:24,

  },

  babyDetailsCard:{
    width:"45%",
    //marginTop:'2%',
    marginLeft:'2%',
    marginRight:'2%',
    paddingLeft:'5%',
    backgroundColor:'#80aaff',
    fontSize:18,
    marginHorizontal:'6%',
    //borderRadius:20,
    //color:'black',
    //elevation:3,
    // shadowOffset:{width:1, height:1},
    // shadowColor:'#333',
    // shadowOpacity:0.3,
    // shadowRadius:2,
    //textAlign:'center'
  },

  image:{
    width:60,
    height:60,
    //alignSelf:'center',
    borderRadius: 200 / 2,
    paddingLeft: "2%",
    paddingRight:'2%',
    paddingTop: "2%",
    marginTop:'5%',
    borderColor:'#fff'
  },

  containerwhite:{
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '9%' ,
    borderRadius:10,
    height: "100%",
    width:"100%"
  },

  imagemother:{
    width:50,
    height:50,
    alignSelf:'center'
  }
});
