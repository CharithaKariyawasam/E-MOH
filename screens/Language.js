import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

export default function Language({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Firstpage');
  }

  return(
    <View style={styles.container}>

        <Image source={require('../assets/mms.png')} style={styles.imagemother}/>
        <Text style={styles.headText}> E-MOH </Text>

        <Text style={styles.headTextSmall}> Welcome to E-MOH  </Text>
        <Text style={styles.headTextSmall}> Join our one stop stationto get your vaccines without a delay. Shedule your appointment for allclinics online </Text>
        <Text></Text>
        <View style={styles.langButton}>
            {/* <Button title='English' onPress={pressHandler}/>
            <Text></Text>
            <Button title='Sinhala'/>
            <Text></Text>
            <Button title='Tamil'/> */}

            <TouchableOpacity style={styles.appointmentcard} onPress={pressHandler}>
                <Text style={styles.appointmentDes}>English</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>Sinhala</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.appointmentcard}>
                <Text style={styles.appointmentDes}>Tamil</Text>
              </TouchableOpacity>
        </View>

        <View>

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

  appointmentcard:{
    width:"96%",
    marginTop:'4%',
    marginLeft:'2%',
    marginRight:'2%',
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
    //textAlign:'center'
  },

  appointmentDes:{
    fontSize:15,
    //marginTop:'2%',
    marginLeft:'2%',
    textAlign:'center',
    color:'#80aaff',
    //fontWeight:'500'
  },

  headText:{
    color:'#fff',
    //marginLeft:'5%',
    //marginRight:'5%',
    //marginBottom:'2%',
    paddingTop:'10%',
    fontSize: 48,
    textAlign:'center',
    fontWeight:'900'
  },

  imagemother:{
    width:'30%',
    height:'20%',
    marginTop:'20%',
    alignSelf:'center'
  },

  headTextSmall:{
    color:'#fff',
    marginLeft:'5%',
    marginRight:'5%',
    //marginBottom:'2%',
    paddingTop:'4%',
    fontSize: 20,
    textAlign:'center',
    fontWeight:'400'
  },

  langButton: {
    height: 100,
  },
});
