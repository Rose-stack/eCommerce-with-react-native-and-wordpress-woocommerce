import React,{useContext} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {AppContext} from '../store/context';

function Cart({}){
    const {cart,removeItem} = useContext(AppContext);
    return(
        <View style={styles.container}>
            {
                cart.length > 0 ?
                cart.map(item => {
                    return(
                        <View key={item.id} style={styles.cart}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>${item.price}</Text>
                            <Text style={styles.text}>{item.quantity}</Text>
                            <Button title="Remove" onPress={() => removeItem(item.id)}/>
                        </View>
                    )
                }) : (
                    <Text style={styles.text}>Cart is empty</Text>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    text:{
        fontSize:15,
        color:"#000"
    },
    cart:{
        padding:10,
        backgroundColor:"#fff",
        width:'90%',
        borderRadius:20,
        margin:10
    }
});

export default Cart;