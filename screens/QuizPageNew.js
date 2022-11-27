import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Fonts from './Fonts';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function Vaccine({navigation}) {

  const [modalOpenOneTrue, setModalOpenOneTrue] = useState(false);
  const [modalOpenOneFalse, setModalOpenOneFalse] = useState(false);

  const [modalOpenTwoFalse, setModalOpenTwoFalse] = useState(false);
  const [modalOpenTwoTrue, setModalOpentwoTrue] = useState(false);

  const [modalOpenThreeFalse, setModalOpenThreeFalse] = useState(false);
  const [modalOpenThreeTrue, setModalOpenThreeTrue] = useState(false);




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

      {/* ******************Question 01 - True************************** */}
      <Modal visible={modalOpenOneTrue} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
          <View style={styles.result}>
            <Text style={styles.modelHeadText}>Sorry..! Try Again..</Text>
            <Image source={require('../assets/crying.png')} style={styles.imageresult}/>
            <Text></Text>
            <View style={styles.resultDes}>
              <Text style={styles.resulttext}>Don't Worry. Read Me.</Text>
            </View>
            <Text style={styles.resulttexttwo}>The emergence and the spread of drug resistant pathogens 
            that have acquired new resistance mechanisms, leading to antimicrobial resistance has become a global threat.</Text>
          </View>
          <View style={styles.resultimg}>
            <Image source={require('../assets/a2.jpeg')} style={styles.imagenew}/>
          </View>

          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenOneTrue(false)}>Closed</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}

      {/* ******************Question 01 - False************************** */}
      <Modal visible={modalOpenOneFalse} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
          <View style={styles.result}>
            <Text style={styles.modelHeadTextTwo}>Wow..! You Got it..</Text>
            <Image source={require('../assets/happy.png')} style={styles.imageresult}/>
            <Text></Text>
            <View style={styles.resultDes}>
              <Text style={styles.resulttext}>Now. Read Me.</Text>
            </View>
            <Text style={styles.resulttexttwo}>The emergence and the spread of drug resistant pathogens 
              that have acquired new resistance mechanisms, leading to antimicrobial resistance has become a global threat.</Text>
          </View>
          <View style={styles.resultimg}>
            <Image source={require('../assets/a2.jpeg')} style={styles.imagenew}/>
          </View>

          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenOneFalse(false)}>Closed</Text>
          </View>

        </View>
        
      </Modal>
      {/* ************************************************************************* */}




       {/* ******************Question 02 - False************************** */}
       <Modal visible={modalOpenTwoFalse} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
          <View style={styles.result}>
            <Text style={styles.modelHeadText}>Sorry..! Try Again..</Text>
            <Image source={require('../assets/crying.png')} style={styles.imageresult}/>
            <Text></Text>
            <View style={styles.resultDes}>
              <Text style={styles.resulttext}>Don't Worry. Read Me.</Text>
            </View>
            <Text style={styles.resulttexttwo}>When you take antibiotics more than the prescribed dose, the bacteria residing in your body will adapt to that particular antibiotic. They will develop combat mechanisms against relevant antibiotic. 
            Later on you will not recover by using that antibiotic since the killing mechanism doesn't work anymore. </Text>
          </View>
          <View style={styles.resultimg}>
            <Image source={require('../assets/a3.jpeg')} style={styles.imagenew}/>
          </View>

          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenTwoFalse(false)}>Closed</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}

      {/* ******************Question 02 - True************************** */}
      <Modal visible={modalOpenTwoTrue} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
          <View style={styles.result}>
            <Text style={styles.modelHeadTextTwo}>Wow..! You Got it..</Text>
            <Image source={require('../assets/happy.png')} style={styles.imageresult}/>
            <Text></Text>
            <View style={styles.resultDes}>
              <Text style={styles.resulttext}>Now. Read Me.</Text>
            </View>
            <Text style={styles.resulttexttwo}>When you take antibiotics more than the prescribed dose, the bacteria residing in your body will adapt to that particular antibiotic. They will develop combat mechanisms against relevant antibiotic. 
            Later on you will not recover by using that antibiotic since the killing mechanism doesn't work anymore. </Text>
          </View>
          <View style={styles.resultimg}>
            <Image source={require('../assets/a3.jpeg')} style={styles.imagenew}/>
          </View>
          
          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpentwoTrue(false)}>Closed</Text>
          </View>

        </View>
        
      </Modal>
      {/* ************************************************************************* */}




        {/* ******************Question 03 - False************************** */}
            <Modal visible={modalOpenThreeFalse} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
          <View style={styles.result}>
            <Text style={styles.modelHeadText}>Sorry..! Try Again..</Text>
            <Image source={require('../assets/crying.png')} style={styles.imageresult}/>
            <Text></Text>
            <View style={styles.resultDes}>
              <Text style={styles.resulttext}>Don't Worry. Read Me.</Text>
            </View>
            <Text style={styles.resulttexttwo}>Do not take left over antibiotics next time you get the illness. They may not be the correct antibiotic for your current illness, and they would not provide the full course of treatment. 
              Such type of usage will lead to the development of antimicrobial resistance in your body.</Text>
          </View>
          <View style={styles.resultimg}>
            <Image source={require('../assets/a5.jpeg')} style={styles.imagenew}/>
          </View>

          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenThreeFalse(false)}>Closed</Text>
          </View>

        </View>
      </Modal>
      {/* ************************************************************************* */}

      {/* ******************Question 02 - True************************** */}
      <Modal visible={modalOpenThreeTrue} animationType='slide' style={styles.model}>
        <View style={styles.modelView}>
          <View style={styles.result}>
            <Text style={styles.modelHeadTextTwo}>Wow..! You Got it..</Text>
            <Image source={require('../assets/happy.png')} style={styles.imageresult}/>
            <Text></Text>
            <View style={styles.resultDes}>
              <Text style={styles.resulttext}>Now. Read Me.</Text>
            </View>
            <Text style={styles.resulttexttwo}>Do not take left over antibiotics next time you get the illness. They may not be the correct antibiotic for your current illness, and they would not provide the full course of treatment. 
              Such type of usage will lead to the development of antimicrobial resistance in your body.</Text>
          </View>
          <View style={styles.resultimg}>
            <Image source={require('../assets/a5.jpeg')} style={styles.imagenew}/>
          </View>
          
          <View style={styles.closeCard}>      
            <Text style={styles.closeText} onPress={()=> setModalOpenThreeTrue(false)}>Closed</Text>
          </View>

        </View>
        
      </Modal>
      {/* ************************************************************************* */}


        <View>
            
            <Text style={styles.headText}>Quiz</Text>
            
        </View>

        <View style={styles.containerwhite}>
            
            <ScrollView>

            <View style={styles.containerwhite}>
                {/* <Text style={styles.appointmentText}>Upcoming Appointments</Text> */}

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>1. Antimicrobial resistance is not a global crisis??</Text>
                <TouchableOpacity style={styles.quizCard} onPress={()=> setModalOpenOneTrue(true)}>
                <Text style={styles.quizAns}>True</Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.quizCard} onPress={()=> setModalOpenOneFalse(true)}>
                <Text style={styles.quizAns}>False</Text>
                
                </TouchableOpacity>
              </View>

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>2. Over-usage of antibiotics  would cause antimicrobial resistant?</Text>
                <TouchableOpacity style={styles.quizCard} onPress={()=> setModalOpentwoTrue(true)}>
                <Text style={styles.quizAns}>True</Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.quizCard} onPress={()=> setModalOpenTwoFalse(true)}>
                <Text style={styles.quizAns}>False</Text>
                
                </TouchableOpacity>
              </View>

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>3. It is good to share or use leftover antibiotics?</Text>
                <TouchableOpacity style={styles.quizCard} onPress={()=> setModalOpenThreeFalse(true)}>
                <Text style={styles.quizAns}>True</Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.quizCard} onPress={()=> setModalOpenThreeTrue(true)}>
                <Text style={styles.quizAns}>False</Text>
                
                </TouchableOpacity>
              </View>

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>4. Vaccination can develop anti-microbial resistance in you?</Text>
                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>True</Text>
                
                </View>

                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>False</Text>
                
                </View>
              </View>

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>5. Stopping the use of antibiotics once symptoms ease is enough to maintain good health?</Text>
                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>True</Text>
                
                </View>

                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>False</Text>
                
                </View>
              </View>

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>6. Antibiotics are effective against viral diseases?</Text>
                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>True</Text>
                
                </View>

                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>False</Text>
                
                </View>
              </View>

              <View style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>7. Antimicrobial resistance can be spread by import of livestock and food and travelling?</Text>
                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>True</Text>
                
                </View>

                <View style={styles.quizCard}>
                <Text style={styles.quizAns}>False</Text>
                
                </View>
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

      result:{
        marginLeft:'3%',
        marginRight:'3%',
        marginBottom:'2%',
        marginTop:24,
        //paddingTop:30,
        //backgroundColor:'#fff',
        //marginHorizontal:2,
        // borderRadius:20,
        // color:'black',
        // elevation:3,
        // shadowOffset:{width:1, height:1},
        // shadowColor:'#333',
        // shadowOpacity:0.3,
        // shadowRadius:2,
        //height:'35%',
        width:'94%',
      },

      resultimg:{
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

      imageresult:{
        width:60,
        height:60,
        alignSelf:'center',
        //marginTop:'26%',
      },

      imagenew:{
        width:'100%',
        height:'100%',
        alignSelf:'center',
        //marginTop:'26%',
      },
      modelView: {
        flex:1,
        marginTop:'10%',
        //height:'50%',
        //backgroundColor: '#80aaff',
      },

      closeCard:{
        //width:"45%",
        //marginTop:'25%',
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
        color:'#ff1a1a',
        fontWeight:'500'
      },

      modelHeadTextTwo:{
        textAlign:'center',
        fontSize:35,
        marginTop:'5%',
        marginLeft:'2%',
        color:'#39e600',
        fontWeight:'500'
      },

      resulttext:{
        textAlign:'center',
        fontSize:25,
        marginTop:'5%',
        marginLeft:'2%',
        //color:'#00cc00',
        fontWeight:'450'
      },

      resulttexttwo:{
        textAlign:'center',
        fontSize:18,
        marginTop:'5%',
        marginLeft:'2%',
        //color:'#00cc00',
        fontWeight:'450'
      },
      
      

      containerwhite:{
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '9%' ,
        borderRadius:10,
        //height: "100%",
        width:"100%"
      },

      quizCard:{
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
    
      quizAns:{
        fontSize:15,
        //marginTop:'2%',
        marginLeft:'2%',
        //textAlign:'center',
        color:'#fff',
        //fontWeight:'500'
      },
      // cardtextsmall:{
      //   textAlign:'center',
      //   fontSize:18,
      //   paddingTop:5,
      //   color:'#fff'
      // },

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
