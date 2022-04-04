import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,Button} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {AppContext} from '../store/context';

function Product({route,navigation}) {
    const {product} = route.params;
    let {cart,setCart} = useContext(AppContext);
    let already_in_cart = cart.find(item => item.id === product.id);
    let [quantity,setQuantity] = useState( already_in_cart ? already_in_cart.quantity : 1 );   
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                 <Image source={{uri:product.images[0].src.replace('https','http')}} style={styles.image}/>
            </View>           
            <Text style={styles.text}>
                {product.name}
            </Text>
            <Text style={styles.text}>
                ${product.price}
            </Text>            
            <HTMLView value= {product.short_description} stylesheet={{
                p:{
                    fontSize:15,
                    color:'#000',
                    //textAlign:'center',
                    width:'100%',
                    padding:10
                }
            }} />
            <View style={styles.quantityContainer}>
                <Text style={styles.text}>Quantity</Text>
                <View style={styles.quantity}>
                    <TouchableOpacity onPress={() => quantity > 1 ? setQuantity(quantity - 1) : null }>
                        <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{quantity}</Text>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                        <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={() =>{
                    already_in_cart ? setCart(cart.map(item => item.id === product.id ? {...item,quantity:quantity} : item)) :
                    setCart([...cart,{
                        id:product.id,
                        name:product.name,
                        price:product.price,
                        quantity:quantity
                    }]);
                    navigation.navigate('Cart')
                }} title={
                    already_in_cart ? "Update cart" : "Add to cart"
                } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        justifyContent:'center',
    },
    imageContainer:{
        //textAlign:'center',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        color:'#000',
        padding:10
    },
    image:{
        width:200,
        height:200,
        borderRadius:10,
    },
    quantityContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    quantity:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer:{
        width:'100%',
        padding:10,
    }
});

export default Product;