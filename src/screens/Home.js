import { useEffect } from "react";
import { Button, Text, View } from "react-native"
import useCart from "../contexts/CartContext";
export default Home = () => {
    const { totalAmount, addToCart, removeFromCart, items, clearCart } = useCart();

    useEffect(() => {
        console.log(totalAmount);
        console.log(items)


    }, [items])
    function x() {
        console.log("clicked")
        addToCart("qweert", 10)
        addToCart("qweert", 10)

    }

    return (
        <View>
            <Text>
                home
            </Text>
            {/* <View>
                {items.map(item => <Text>{item.id}</Text>)}
            </View> */}
            <Button onPress={() => {
                console.log("clicked")

                addToCart("qweert", 10)
            }} title="ADD ME"></Button>
            <Button onPress={() => {
                console.log("clicked")

                removeFromCart("qweert", 10)
            }} title="REMOVE ME"></Button>


            <Button onPress={() => {
                console.log("clicked")

                addToCart("qweer222t", 10)
            }} title="ADD ME 2"></Button>


            <Button onPress={() => {
                console.log("clicked")

                clearCart()
                console.log("items " , items)
            }} title="CLEAR ME"></Button>


        </View>
    )
}