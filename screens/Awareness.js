import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
        <Image source={require('../assets/p1.jpeg')} style={styles.image}/>
        </View>

        <View style={styles.page} key="1">
        <Image source={require('../assets/p3.jpeg')} style={styles.image}/>
        </View>

        <View style={styles.page} key="1">
        <Image source={require('../assets/p7.jpeg')} style={styles.image}/>
        </View>


      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    //justifyContent: 'center',
    //alignItems: 'center',
    //alignSelf:'center'
  },

  image:{
    //marginTop:'2%',
    width:'100%',
    height:'100%',
    //alignSelf:'center'
  }
});



export default MyPager;