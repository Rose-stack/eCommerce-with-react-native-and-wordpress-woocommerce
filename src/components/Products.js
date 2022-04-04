import React,{useContext} from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
import {AppContext} from '../store/context';
function Products({navigation}) {
    const {products,cart,setCart,loading} = useContext(AppContext);
    return(
        <View style={styles.container}>
            {
            loading ? <Text>Loading...</Text> :
            products.map(product =>{
                let already_in_cart = cart.find(item => item.id === product.id);
                return (
                    <View key={product.id} style={styles.product}>
                        <TouchableOpacity onPress={() => navigation.navigate('Product',{product})}>
                        <Image source={{uri:product.images[0].src.replace('https','http')}} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Product',{product})}>
                        <Text>{product.name}</Text>
                        </TouchableOpacity>
                        <Text>${product.price}</Text>
                        <Button 
                        title= {
                            already_in_cart ? "Added to cart" : "Add to cart"
                        }
                        onPress={
                            already_in_cart ? () => null : 
                            () => {
                                setCart([...cart,{
                                    id:product.id,
                                    name:product.name,
                                    price:product.price,
                                    quantity:1
                                }]);
                            }
                        }
                        />
                    </View>
                )
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius:10
    },
    container:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    product:{
        width:180,
        height:220,
        backgroundColor:'#ccc',
        alignItems:'center',
        justifyContent:'center',
        margin:10
    }
})
export default Products;