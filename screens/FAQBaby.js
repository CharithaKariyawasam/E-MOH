import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Fonts from './Fonts';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function Vaccine({navigation}) {

  const pressHandler = () => {
    navigation.navigate('EPI');
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

        <View>
            
            <Text style={styles.headText}>FAQs</Text>
            
        </View>

        <View style={styles.containerwhite}>
            
            <ScrollView>

            <View style={styles.containerwhite}>
                {/* <Text style={styles.appointmentText}>Upcoming Appointments</Text> */}

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>How long should I wait to give my child another vaccine after giving one?</Text>
                <Text style={styles.appointmentDesAnswer}>If both vaccines are live vaccines, you should wait for 4 months. If either of them is a killed vaccine, you don't have to wait.</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>If my child has only received one dose of a vaccine course, should I repeat the whole course again?</Text>
                <Text style={styles.appointmentDesAnswer}>No. The vaccine schedule could be safely continued as if there has been no delay. The recommended intervals between further doses should be maintained</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>My child is having a cold and a mild fever, can I give him a vaccine now?</Text>
                <Text style={styles.appointmentDesAnswer}>The vaccination should only be postponed if a child is seriously ill or has a high fever of 380 C at the time of immunization.</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>My family recently came back from abroad, should I change my child's vaccination plan to Sri Lankan EPI schedule?</Text>
                <Text style={styles.appointmentDesAnswer}>If you have come back just for a vacation and you intend to back soon, no need of changing. If your family intend to live in Sri Lanka for the rest of the time, you can give the upcoming vaccines according to our schedule.</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>My baby's birth weight was low, should he receive vaccines like other babies?</Text>
                <Text style={styles.appointmentDesAnswer}>Low birth weight babies should receive BCG vaccine when they are fit to be discharged from the hospital. They should also receive their routine vaccinations at the recommended age</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>My child did not develop a scar following BCG vaccination. What should I do?</Text>
                <Text style={styles.appointmentDesAnswer}>If your child is in ages between 6 months and five years, you can give BCG again. If the child is more than five years, you can visit a hospital to do a mantox test first.</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>Is it necessary to give MMR vaccine if you have had mumps before?</Text>
                <Text style={styles.appointmentDesAnswer}>MMR has three components, Mumps, Measles, Rubella. Even if you have had one disease or all diseases before, its not safe to avoid vaccination without a recommendation from a doctor after referring to positive serological tests.</Text>
                </View>

                <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>My child has been through fever fits before. Should I give him the JE vaccine?</Text>
                <Text style={styles.appointmentDesAnswer}>No. You should delay the JE vaccine for at least one year from last fever fit episode.</Text>
                </View>
            </View>

            </ScrollView>

            
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

      containerwhite:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '9%' ,
        borderRadius:10,
        //height: "100%",
        width:"100%"
      },

  headText:{
    textAlign:'center',
    fontSize:35,
    marginTop:'5%',
    marginLeft:'2%',
    color:'#fff',
    fontWeight:'500'
  },
  
  // appointmentcard:{
  //   width:"80%",
  //   marginTop:'5%',
  //   marginLeft:'10%',
  //   marginRight:'10%',
  //   padding:15,
  //   backgroundColor:'#80aaff',
  //   fontSize:18,
  //   marginHorizontal:5,
  //   borderRadius:20,
  //   color:'black',
  //   elevation:3,
  //   shadowOffset:{width:1, height:1},
  //   shadowColor:'#333',
  //   shadowOpacity:0.3,
  //   shadowRadius:2,
  //   textAlign:'center'
  // },

  headTextsmall:{
    textAlign:'center',
    fontSize:18,
    marginTop:'2%',
    fontWeight:'400',
    marginLeft:'2%',
    color:'#fff'
  },

  // appointment:{
  //   marginLeft:'3%',
  //   marginRight:'3%',
  //   marginBottom:'2%',
  //   marginTop:24,
  //   //paddingTop:30,
  //   backgroundColor:'#fff',
  //   //marginHorizontal:2,
  //   borderRadius:20,
  //   color:'black',
  //   elevation:3,
  //   shadowOffset:{width:1, height:1},
  //   shadowColor:'#333',
  //   shadowOpacity:0.3,
  //   shadowRadius:2,
  //   height:'35%',
  //   width:'94%',
  // },

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
    padding:'2%',
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
    //textAlign:'center'
  },

  appointmentDes:{
    fontSize:20,
    //marginTop:'2%',
    marginLeft:'2%',
    //textAlign:'center',
    color:'#80aaff',
    fontWeight:'500'
  },

  appointmentDesAnswer:{
    fontSize:18,
    marginTop:'2%',
    marginLeft:'2%',
    //textAlign:'center',
    color:'#80aaff',
    fontWeight:'380'
  },


});
