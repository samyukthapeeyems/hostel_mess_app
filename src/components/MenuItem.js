import { useEffect, useState } from 'react';
import useCart from '../contexts/CartContext';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import { COLORS } from '../constants/theme';

import { GreenButton } from '../../assets/icons';
import ItemCounter from './ItemCounter';
import Image from './Image'



export default function MenuItem({ item }) {

    const { items , addToCart , removeFromCart  , totalAmount} = useCart();
    const [count, setCount] = useState();

    useEffect(() => {
        let _item = items.find(element => element.id == item.id)
        if (_item?.quantity) setCount(_item.quantity)
        else setCount(0)
    }, [totalAmount]);

    return (
        <View style={styles.menuItemBox}>
            {/* left item  */}
            <View style={styles.leftItem}>
                <Image path={item.image} />
            </View>
            {/* center item  */}
            <View style={styles.centerItem}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.detailsText}>{item.name}</Text>
                <Text style={styles.costText}>₹{item.price}</Text>
            </View>
            {/* right item  */}
            <View style={styles.rightItem}>
                {count === 0 ? (
                    <TouchableOpacity onPress={async() =>await addToCart(item.id, item.price)}>
                        <GreenButton />
                    </TouchableOpacity>
                ) : (
                    <ItemCounter
                        count={count}
                        handleAddItems={ () =>addToCart(item.id , item.price)}
                        handleRemoveItems={ () => removeFromCart(item.id , item.price)}
                    />
                )}
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    listTitle: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 10,
        color: COLORS.black
    },
    menuCardTitleContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
    },
    menuCardText: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.black

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 4,
    },
    sectionHeader: {
        fontSize: 32,

        padding: 7,
    },
    title: {
        fontSize: 24, color: COLORS.black
    },
    conatiner: { width: '100%' },
    textinput: {
        fontSize: 18,
        backgroundColor: '#7676801F',
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    leftItem: {
        padding: 10,
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    centerItem: {
        flex: 2,
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexWrap: 'wrap',
    },
    rightItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    costText: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.green,
    },
    detailsText: { fontSize: 12, fontWeight: '400', marginBottom: 4, color: COLORS.black },
    itemTitle: { fontSize: 16, fontWeight: '700', color: COLORS.black },
    menuItemBox: {
        marginVertical: 4,
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
