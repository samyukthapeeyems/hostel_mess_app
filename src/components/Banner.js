import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';

export default function Banner({ children }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.yellow,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        opacity: 0.5,
    },

    text: {
        color: 'black',
        fontWeight: '600'
    },

});
