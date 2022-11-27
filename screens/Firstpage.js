import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function Firstpage({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>

      <View style={styles.loginCard}>
        <View style={styles.loginDes}>
        <TextInput style={styles.login}
          placeholder='User Name'>
        </TextInput>
        <TextInput secureTextEntry={true} style={styles.login}
          placeholder='Password'>
        </TextInput>

        <Text style={styles.pw}>Forget Password?</Text>

        <View style={styles.itemone}>
                <TouchableOpacity style={styles.cardconent} onPress={pressHandler}>
                    <Text style={styles.cardtextmother}>Login</Text>
                </TouchableOpacity>
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

  login: {
    borderBottomColor: 'black',
    borderBottomWidth:1,
    marginTop:'5%',
    //margin: 10,
    width: '100%',
  },

  pw:{
    fontSize:14,
    paddingTop:'5%'
  },

  itemone:{
    //flexDirection: 'row',
    marginTop:24,

  },

  cardconent:{
    width:"50%",
    marginTop:24,
    padding:15,
    backgroundColor:'#80aaff',
    fontSize:18,
    marginHorizontal:'10%',
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

  cardtextmother:{
    textAlign:'center',
    fontSize:14,
    color:'#fff'
  },

  loginCard:{
    marginLeft:'5%',
    marginRight:'5%',
    marginBottom:'2%',
    marginTop:'40%',
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
    height:'55%',
    width:'90%',
  },

  loginDes:{
    marginLeft:'5%',
    marginRight:'5%',
    marginBottom:'2%',
    marginTop:'10%',
    //paddingTop:30,
    //backgroundColor:'#fff',
    //marginHorizontal:2,
    borderRadius:20,
    // color:'black',
    // elevation:3,
    // shadowOffset:{width:1, height:1},
    // shadowColor:'#333',
    // shadowOpacity:0.3,
    // shadowRadius:2,
    height:'55%',
    width:'90%',
    //alignSelf:'center'
  },
});
