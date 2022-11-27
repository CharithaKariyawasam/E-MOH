import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Fonts from './Fonts';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, Modal, DateTimePickerAndroid } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Vaccine({navigation}) {

  const [modalOpenOne, setModalOpenOne] = useState(false);

  const [modalOpenTwo, setModalOpenTwo] = useState(false);

  const [modalOpenFour, setModalOpenFour] = useState(false);

  const [modalOpenSix, setModalOpenSix] = useState(false);

  const [modalOpenNine, setModalOpenNine] = useState(false);




  //const [modalOpenDate, setModalOpenDate] = useState(false);


   //const [date, setDate] = useState(new Date());
  //const [mode, setMode] = useState(new date());

  const pressHandler = () => {
    navigation.navigate('OneToEleven');
  }
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  

  //const showMode = (currentMode) => { setShow(true); setMode(currentMode);}


  return(

    
    <View style={styles.container}>

{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}  

      {/* ******************Model for 0-24 hrs vaccines************************** */}
      <Modal visible={modalOpenOne} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
                      
          <Text style={styles.modelHeadText}>0 - 24 Hours</Text>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>        
              <Text style={styles.cardtextName}>BCG</Text>         
            </View>

            <View style={styles.babyDetailsCard}>        
              <Text style={styles.cardtext}>Vaccinated</Text>
            </View> 

          </View>

          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenOne(false)}>Closed</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}


      {/* ******************Model for 02 months vaccines************************** */}
      <Modal visible={modalOpenTwo} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
                      
          <Text style={styles.modelHeadText}>02 Months</Text>
        
          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>OPV</Text>                       
            </View>

            <View style={styles.babyDetailsCard}>                       
              <Text style={styles.cardtext}>Vaccinated</Text>    
            </View>
                        
          </View>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>Pentavalent</Text>                       
            </View>

            <View style={styles.babyDetailsCard}>                       
              <Text style={styles.cardtext}>Vaccinated</Text>    
            </View>
            
          </View>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>fIPV</Text>                       
            </View>

            <View style={styles.babyDetailsCard}>                       
              <Text style={styles.cardtext}>Vaccinated</Text>    
            </View>

          </View>

          <View style={styles.closeCard}>                      
            <Text style={styles.closeText} onPress={()=> setModalOpenTwo(false)}>Close</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}


      {/* ******************Model for 04 months vaccines************************** */}
      <Modal visible={modalOpenFour} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
                      
          <Text style={styles.modelHeadText}>04 Months</Text>
        
          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>OPV</Text>                       
            </View>

            <View style={styles.babyDetailsCard}>                       
              <Text style={styles.cardtext}>Vaccinated</Text>    
            </View>
                        
          </View>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>Pentavalent</Text>                       
            </View>

            <View style={styles.babyDetailsCard}>                       
              <Text style={styles.cardtext}>Vaccinated</Text>    
            </View>
            
          </View>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>fIPV</Text>                       
            </View>

            <View style={styles.babyDetailsCard}>                       
              <Text style={styles.cardtext}>Vaccinated</Text>    
            </View>

          </View>

          <View style={styles.closeCard}>                      
            <Text style={styles.closeText} onPress={()=> setModalOpenFour(false)}>Close</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}

      {/* ******************Model for 06 months vaccines************************** */}
      <Modal visible={modalOpenSix} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>

        {/* <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View> */}
                      
          <Text style={styles.modelHeadText}>06 Months</Text>
        
          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>OPV</Text>                       
            </View>

            <TouchableOpacity style={styles.bookCardLie} onPress={showDatepicker}>               
              <Text style={styles.bookCardText}>Booked</Text> 
              {/* <Text>selected: {date.toLocaleString()}</Text> */} 
            </TouchableOpacity>
                        
          </View>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>                        
              <Text style={styles.cardtextName}>Pentavalent</Text>                       
            </View>

            <TouchableOpacity style={styles.bookCard} onPress={showDatepicker} >                       
              <Text style={styles.bookCardText}>Book Now</Text> 
              {/* <Text>selected: {date.toLocaleString()}</Text> */} 
            </TouchableOpacity>
                        
            
          </View>

          <View style={styles.closeCard}>                      
            <Text style={styles.closeText} onPress={()=> setModalOpenSix(false)}>Close</Text>
          </View>
          
        </View>
      </Modal>
      {/* ************************************************************************* */}


      {/* ******************Model for 09 Months vaccines************************** */}
      <Modal visible={modalOpenNine} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
                      
          <Text style={styles.modelHeadText}>09 Months</Text>

          <View style={styles.babyDetails}>

            <View style={styles.vaccineDetailsCard}>        
              <Text style={styles.cardtextName}>MMR</Text>         
            </View>

            <View style={styles.babyDetailsCard}>        
              <Text style={styles.cardtext}>Pending</Text>
            </View> 

          </View>

          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenNine(false)}>Closed</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}
      

      {/* ******************************************************************************************************** */}
      {/* <Modal visible={modalOpenDate} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
                      
          <Text style={styles.modelHeadText}>04 Months</Text>

          <View style={styles.closeCard}>                      
            <Text style={styles.closeText} onPress={()=> setModalOpenDate(false)}>Close</Text>
          </View>

        </View>
      </Modal> */}
{/* ******************************************************************************************************** */}
      <View>  
        <Text style={styles.headText}>01 - 11 Months</Text>
        <Text style={styles.headTextsmall}>Vaccines for 01 month to 11 month old baby</Text>   
      </View>

      <View style={styles.containerwhite}>
        <View style={styles.containerwhite}>
                
          <TouchableOpacity style={styles.appointmentcardOne} onPress={()=> setModalOpenOne(true)}>
            <Text style={styles.appointmentDes}>0 - 24 Hours</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appointmentcardOne} onPress={()=> setModalOpenTwo(true)}>
            <Text style={styles.appointmentDes}>02 Month</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appointmentcardOne} onPress={()=> setModalOpenFour(true)}>
            <Text style={styles.appointmentDes}>04 Month</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appointmentcard} onPress={()=> setModalOpenSix(true)}>
            <Text style={styles.appointmentDes}>06 Month</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appointmentcard} onPress={()=> setModalOpenNine(true)}>
            <Text style={styles.appointmentDes}>09 Month</Text>
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
        flex:1,
        marginTop:'20%',
        //height:'50%',
        //backgroundColor: '#80aaff',
      },



      containerwhite:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '9%' ,
        borderRadius:10,
        height: "100%",
        width:"100%"
      },

      cardtext:{
        textAlign:'center',
        fontSize:20,
        padding:15,
        color:'#fff',
        fontWeight:'500'
      },

      cardtextName:{
        textAlign:'center',
        fontSize:20,
        padding:15,
        //color:'#fff',
        fontWeight:'500'
      },
    
    


  headText:{
    textAlign:'center',
    fontSize:35,
    marginTop:'5%',
    marginLeft:'2%',
    color:'#fff',
    fontWeight:'500'
  },

  modelHeadText:{
    textAlign:'center',
    fontSize:35,
    marginTop:'5%',
    marginLeft:'2%',
    //color:'#fff',
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

  appointmentcardOne:{
    width:"80%",
    marginTop:'5%',
    marginLeft:'10%',
    marginRight:'10%',
    padding:15,
    backgroundColor:'#b3ccff',
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

  babyDetails:{
    flexDirection: 'row',
    marginTop:'10%',
    marginRight:'5%',
    marginLeft:'5%'

  },

  vaccineDetailsCard:{
    width:"45%",
    marginTop:'2%',
    marginLeft:'2%',
    marginRight:'2%',
    //paddingLeft:'5%',
    //backgroundColor:'#fff',
    fontSize:18,
    //marginHorizontal:'15%',
    borderRadius:20,
    // color:'black',
    // elevation:3,
    // shadowOffset:{width:1, height:1},
    // shadowColor:'#333',
    // shadowOpacity:0.3,
    // shadowRadius:2,
    textAlign:'center'
  },

  babyDetailsCard:{
    width:"45%",
    marginTop:'2%',
    marginLeft:'2%',
    marginRight:'2%',
    //paddingLeft:'5%',
    backgroundColor:'#b3b3b3',
    fontSize:18,
    //marginHorizontal:'15%',
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center'
  },

  bookCard:{
    width:"45%",
    marginTop:'2%',
    marginLeft:'2%',
    marginRight:'2%',
    //paddingLeft:'5%',
    backgroundColor:'#ff4d4d',
    fontSize:18,
    //marginHorizontal:'15%',
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center'
  },

  bookCardLie:{
    width:"45%",
    marginTop:'2%',
    marginLeft:'2%',
    marginRight:'2%',
    //paddingLeft:'5%',
    backgroundColor:'#39e600',
    fontSize:18,
    //marginHorizontal:'15%',
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center'
  },

  bookCardText:{
    textAlign:'center',
    fontSize:20,
    padding:15,
    color:'#fff',
    fontWeight:'500'
  },

  closeCard:{
    //width:"45%",
    marginTop:'25%',
    marginLeft:'2%',
    marginRight:'2%',
    //paddingLeft:'5%',
    backgroundColor:'#80aaff',
    fontSize:18,
    //marginHorizontal:'15%',
    borderRadius:20,
    color:'black',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    textAlign:'center',
    alignSelf:'center'
  },

  closeText:{
    textAlign:'center',
    fontSize:15,
    padding:15,
    color:'#fff',
    fontWeight:'500'
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


});
