import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Fonts from './Fonts';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function Vaccine({navigation}) {

    const [modalOpen, setModalOpen] = useState(false);

  const pressHandler = () => {
    navigation.navigate('OneToEleven');
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

                <Modal visible={modalOpen} animationType='slide' style={styles.model}>
                    <View style={styles.modelView}>
                        <Text>basvcdhj</Text>
                        <Button title='Close' onPress={()=> setModalOpen(false)}/>
                    </View>
                </Modal>

        <View>
            
            <Text style={styles.headText}>EPI Shedule</Text>
            <Text style={styles.headTextsmall}>Choosse your child's age group </Text>
           
            
        </View>

        <View style={styles.containerwhite}>
            

            <View style={styles.containerwhite}>
                {/* <Text style={styles.appointmentText}>Upcoming Appointments</Text> */}


                <TouchableOpacity style={styles.appointmentcard} onPress={pressHandler}>
                <Text style={styles.appointmentDes}>0 - 11 Months</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appointmentcard} onPress={pressHandler}>
                <Text style={styles.appointmentDes}>01 - 02 Years</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appointmentcard} onPress={pressHandler}>
                <Text style={styles.appointmentDes}>02 - 04 Months</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appointmentcard} onPress={pressHandler}>
                <Text style={styles.appointmentDes}>05 - 09 Years</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appointmentcard} onPress={pressHandler}>
                <Text style={styles.appointmentDes}>10 - 15 Years</Text>
                </TouchableOpacity>
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

    //   model: {
    //     //flex:0.5,
    //     backgroundColor: '#80aaff',
    //     //paddingBottom: 65,
    //     marginTop:'50%',
    //   },

      modelView: {
        //flex:0.5,
        marginTop:'20%',
        //height:'50%',
        backgroundColor: '#80aaff',
      },

      containerwhite:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '9%' ,
        borderRadius:10,
        height: "100%",
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
  
  appointmentcard:{
    width:"80%",
    marginTop:'5%',
    marginLeft:'10%',
    marginRight:'10%',
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
    textAlign:'center'
  },

  appointmentDes:{
    fontSize:20,
    //marginTop:'2%',
    //marginLeft:'2%',
    textAlign:'center',
    color:'#fff',
    //fontWeight:'500'
  },
  headTextsmall:{
    textAlign:'center',
    fontSize:18,
    marginTop:'2%',
    fontWeight:'400',
    marginLeft:'2%',
    color:'#fff'
  },


});
