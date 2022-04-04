import React  from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import Products from '../components/Products';

function HomeScreen({navigation}) {    
    return (        
      <View style={styles.container} >
          <ScrollView>
          <Products navigation={navigation} />
          </ScrollView>        
      </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:23,
        color:'#000'
    },
    button:{
        textTransform:'lowercase'
    }
})
export default HomeScreen;