import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Language({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Firstpage');
  }

  return(
    <View style={styles.container}>
        <Text style={{fontSize: 30}}> Choose Language</Text>
        <Text></Text>
        <View style={styles.langButton}>
            <Button title='Englishss' onPress={pressHandler} />
            <Text></Text>
            <Button title='Sinhala'/>
            <Text></Text>
            <Button title='Tamil'/>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  langButton: {
    height: 100,
  },
});
