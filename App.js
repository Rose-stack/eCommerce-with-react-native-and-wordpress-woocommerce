/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';
import CartScreen from './src/screens/Cart';
import ProductScreen from './src/screens/Product';
import {AppContextProvider} from './src/store/context';
import Icon from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
function NewHomeScreen(){
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
const App = () => {
  return (
    <AppContextProvider>
    <NavigationContainer >
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Product" component={ProductScreen} options={{
        drawerItemStyle:{
          display:"none"
        }
      }}  />
    </Drawer.Navigator>
    </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
